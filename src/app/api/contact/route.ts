import { NextRequest, NextResponse } from "next/server";
import { validateContactPayload, isHoneypotTripped } from "@/lib/contact-validation";
import { sendContactEmail } from "@/lib/email";
import { isRateLimited } from "@/lib/rate-limit";

// Defensive cap on request size — this form has no file uploads, a few KB is plenty.
const MAX_BODY_BYTES = 20_000;

function clientKey(request: NextRequest): string {
  // Most proxies/CDNs (including Vercel) set this; falls back to a shared
  // bucket if absent, which is a known limitation of not having a real
  // client-IP source in this deployment (see lib/rate-limit.ts).
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || "unknown";
}

export async function POST(request: NextRequest) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "Requisição muito grande." }, { status: 413 });
  }

  if (isRateLimited(clientKey(request))) {
    return NextResponse.json(
      { error: "Muitas solicitações. Tente novamente em alguns minutos." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Corpo da requisição inválido." }, { status: 400 });
  }

  // Honeypot: a real visitor never fills this. Respond as if it worked so
  // scripted clients get no signal to adapt, but never actually send mail.
  if (isHoneypotTripped(body)) {
    return NextResponse.json({ success: true }, { status: 200 });
  }

  const result = validateContactPayload(body);
  if (!result.ok) {
    return NextResponse.json({ error: "Dados inválidos.", fields: result.errors }, { status: 422 });
  }

  const sendResult = await sendContactEmail(result.data);

  if (!sendResult.ok) {
    // Never leak provider/internal detail to the client — log it server-side only.
    console.error("[contact] email delivery failed:", sendResult.reason, sendResult.detail);
    const status = sendResult.reason === "not_configured" ? 503 : 502;
    return NextResponse.json(
      { error: "Não foi possível enviar sua mensagem agora. Tente novamente em instantes." },
      { status }
    );
  }

  return NextResponse.json({ success: true }, { status: 200 });
}

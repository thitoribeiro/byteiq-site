import type { ValidatedContact } from "./contact-validation";

/**
 * Email delivery, abstracted behind EMAIL_PROVIDER so swapping providers
 * later doesn't touch the API route. Only "resend" is implemented today,
 * called via plain `fetch` against Resend's REST API — no SDK dependency
 * added for a single POST call. See `.env.example` for required variables.
 */

export type SendResult =
  | { ok: true }
  | { ok: false; reason: "not_configured" | "provider_error"; detail?: string };

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderEmailBody(contact: ValidatedContact): string {
  return [
    `Novo briefing recebido pelo site ByteIQ.`,
    ``,
    `Nome: ${contact.name}`,
    `E-mail: ${contact.email}`,
    `Empresa: ${contact.company}`,
    `Tipo de sistema: ${contact.projectType}`,
    ``,
    `Descrição:`,
    contact.description,
  ].join("\n");
}

async function sendViaResend(contact: ValidatedContact): Promise<SendResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;
  const to = process.env.EMAIL_TO;

  if (!apiKey || !from || !to) {
    return { ok: false, reason: "not_configured" };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: contact.email,
        subject: `Novo projeto: ${contact.company} — ${contact.projectType}`,
        text: renderEmailBody(contact),
        html: `<pre style="font-family:ui-monospace,monospace;white-space:pre-wrap">${escapeHtml(
          renderEmailBody(contact)
        )}</pre>`,
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      return { ok: false, reason: "provider_error", detail: `Resend ${res.status}: ${detail}` };
    }

    return { ok: true };
  } catch (err) {
    return {
      ok: false,
      reason: "provider_error",
      detail: err instanceof Error ? err.message : "network error",
    };
  }
}

export async function sendContactEmail(contact: ValidatedContact): Promise<SendResult> {
  const provider = process.env.EMAIL_PROVIDER;

  if (!provider) return { ok: false, reason: "not_configured" };

  switch (provider) {
    case "resend":
      return sendViaResend(contact);
    default:
      return { ok: false, reason: "not_configured", detail: `Unknown EMAIL_PROVIDER "${provider}"` };
  }
}

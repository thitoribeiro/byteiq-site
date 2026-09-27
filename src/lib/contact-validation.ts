/**
 * Server-side validation for the contact form. Deliberately dependency-free
 * (no zod/yup) since the field set is small and fixed — client-side (HTML5
 * required/type=email) handles usability, this is the security boundary.
 */

export interface ContactPayload {
  name: string;
  email: string;
  company: string;
  projectType: string;
  description: string;
  /** Honeypot — real users never see or fill this field. */
  website?: string;
}

export interface ValidationError {
  field: string;
  message: string;
}

const LIMITS = {
  name: 120,
  email: 254,
  company: 160,
  projectType: 120,
  description: 4000,
} as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown): string {
  if (typeof value !== "string") return "";
  // Strip control characters (incl. CR/LF, which enable header injection in naive mailers) and trim.
  return value.replace(/[\u0000-\u001F\u007F]/g, "").trim();
}

export interface ValidatedContact {
  name: string;
  email: string;
  company: string;
  projectType: string;
  description: string;
}

export type ValidationResult =
  | { ok: true; data: ValidatedContact }
  | { ok: false; errors: ValidationError[] };

export function validateContactPayload(raw: unknown): ValidationResult {
  const errors: ValidationError[] = [];

  if (typeof raw !== "object" || raw === null) {
    return { ok: false, errors: [{ field: "_", message: "Corpo da requisição inválido." }] };
  }

  const body = raw as Record<string, unknown>;
  const name = clean(body.name);
  const email = clean(body.email);
  const company = clean(body.company);
  const projectType = clean(body.projectType);
  const description = clean(body.description);

  if (!name) errors.push({ field: "name", message: "Informe seu nome completo." });
  else if (name.length > LIMITS.name) errors.push({ field: "name", message: "Nome muito longo." });

  if (!email) errors.push({ field: "email", message: "Informe um e-mail." });
  else if (email.length > LIMITS.email || !EMAIL_RE.test(email))
    errors.push({ field: "email", message: "Informe um e-mail válido." });

  if (!company) errors.push({ field: "company", message: "Informe sua empresa ou organização." });
  else if (company.length > LIMITS.company) errors.push({ field: "company", message: "Nome muito longo." });

  if (!projectType) errors.push({ field: "projectType", message: "Selecione o tipo de sistema." });
  else if (projectType.length > LIMITS.projectType)
    errors.push({ field: "projectType", message: "Valor inválido." });

  if (!description) errors.push({ field: "description", message: "Descreva o desafio ou requisito técnico." });
  else if (description.length > LIMITS.description)
    errors.push({ field: "description", message: "Descrição muito longa (máx. 4000 caracteres)." });

  if (errors.length > 0) return { ok: false, errors };

  return { ok: true, data: { name, email, company, projectType, description } };
}

/** True when the honeypot field was filled — a real visitor never fills it. */
export function isHoneypotTripped(raw: unknown): boolean {
  if (typeof raw !== "object" || raw === null) return false;
  const value = (raw as Record<string, unknown>).website;
  return typeof value === "string" && value.trim().length > 0;
}

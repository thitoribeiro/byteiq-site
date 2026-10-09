"use client";

import React, { useId, useState } from "react";
import { Icon } from "@/components/brand/Icon";

const projectTypes = [
  "AI Agents & Multi-Agent Systems",
  "Software Web / SaaS Platform",
  "Automação Inteligente de Processos",
  "Engenharia de Qualidade & Observabilidade",
  "Consultoria Técnica & Arquitetura",
  "Outro Desafio de Engenharia",
];

const inputClass =
  "w-full h-11 px-3.5 rounded-md bg-surface border border-border-strong text-sm text-primary placeholder:text-muted focus:border-focus transition-colors";
const inputErrorClass = "border-error focus:border-error";

type Status = "idle" | "submitting" | "success" | "error";

interface FieldErrors {
  [field: string]: string;
}

const initialForm = {
  name: "",
  email: "",
  company: "",
  projectType: projectTypes[0],
  description: "",
  website: "", // honeypot — always empty for real users
};

export function ContactForm() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const statusId = useId();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return; // guard against duplicate submits

    setStatus("submitting");
    setErrorMessage(null);
    setFieldErrors({});

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData(initialForm); // clear only on confirmed success
        return;
      }

      const data = await res.json().catch(() => null);
      if (data?.fields && Array.isArray(data.fields)) {
        const errors: FieldErrors = {};
        for (const f of data.fields) {
          if (f?.field && f?.message) errors[f.field] = f.message;
        }
        setFieldErrors(errors);
      }
      setErrorMessage(data?.error || "Não foi possível enviar sua mensagem. Tente novamente.");
      setStatus("error");
    } catch {
      setErrorMessage("Falha de conexão. Verifique sua internet e tente novamente.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="py-12 text-center space-y-4" role="status" aria-live="polite">
        <div className="w-11 h-11 rounded-full bg-brand-subtle text-brand flex items-center justify-center mx-auto">
          <Icon name="check" size={22} />
        </div>
        <h2 className="text-2xl font-semibold text-primary tracking-tight">Solicitação Recebida.</h2>
        <p className="text-sm text-secondary max-w-md mx-auto leading-relaxed">
          Obrigado por entrar em contato com a <strong className="text-primary font-medium">ByteIQ</strong>.
          Analisaremos o escopo do seu projeto e retornaremos em até 24 horas úteis.
        </p>
        <div className="pt-4">
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="px-5 py-2.5 bg-surface hover:bg-bg text-primary text-sm rounded-md border border-border-strong transition-colors"
          >
            Enviar Nova Mensagem
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {errorMessage && (
        <div
          role="alert"
          id={statusId}
          className="p-3.5 rounded-md border border-error bg-error-subtle text-sm text-error-text"
        >
          {errorMessage}
        </div>
      )}

      {/* Honeypot — hidden from real users, left unstyled-empty by bots that fill every field. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Não preencha este campo</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={formData.website}
          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="name" className="block text-sm font-medium text-secondary">
            Nome Completo *
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Ex: João da Silva"
            className={fieldErrors.name ? `${inputClass} ${inputErrorClass}` : inputClass}
            aria-invalid={Boolean(fieldErrors.name)}
            aria-describedby={fieldErrors.name ? "name-error" : undefined}
          />
          {fieldErrors.name && (
            <p id="name-error" className="text-sm text-error-text">
              {fieldErrors.name}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <label htmlFor="email" className="block text-sm font-medium text-secondary">
            E-mail Corporativo *
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="nome@empresa.com.br"
            className={fieldErrors.email ? `${inputClass} ${inputErrorClass}` : inputClass}
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={fieldErrors.email ? "email-error" : undefined}
          />
          {fieldErrors.email && (
            <p id="email-error" className="text-sm text-error-text">
              {fieldErrors.email}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="company" className="block text-sm font-medium text-secondary">
          Empresa ou Organização *
        </label>
        <input
          type="text"
          id="company"
          required
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          placeholder="Nome da sua empresa"
          className={fieldErrors.company ? `${inputClass} ${inputErrorClass}` : inputClass}
          aria-invalid={Boolean(fieldErrors.company)}
          aria-describedby={fieldErrors.company ? "company-error" : undefined}
        />
        {fieldErrors.company && (
          <p id="company-error" className="text-sm text-error-text">
            {fieldErrors.company}
          </p>
        )}
      </div>

      <div className="space-y-1.5">
        <label htmlFor="projectType" className="block text-sm font-medium text-secondary">
          Tipo de Sistema *
        </label>
        <select
          id="projectType"
          value={formData.projectType}
          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
          className={inputClass}
        >
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="description" className="block text-sm font-medium text-secondary">
          Descrição do Desafio ou Requisitos Técnicos *
        </label>
        <textarea
          id="description"
          rows={5}
          required
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="Descreva brevemente o sistema que deseja construir, integrações necessárias ou problemas de negócio a serem resolvidos..."
          className={
            fieldErrors.description
              ? "w-full px-3.5 py-2.5 rounded-md bg-surface border border-error focus:border-error text-sm text-primary placeholder:text-muted transition-colors resize-y"
              : "w-full px-3.5 py-2.5 rounded-md bg-surface border border-border-strong text-sm text-primary placeholder:text-muted focus:border-focus transition-colors resize-y"
          }
          aria-invalid={Boolean(fieldErrors.description)}
          aria-describedby={fieldErrors.description ? "description-error" : undefined}
        />
        {fieldErrors.description && (
          <p id="description-error" className="text-sm text-error-text">
            {fieldErrors.description}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full h-12 px-6 bg-brand hover:bg-brand-hover text-white font-medium text-sm rounded-md transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
      >
        {status === "submitting" ? (
          <span>Enviando solicitação...</span>
        ) : (
          <>
            <span>Enviar Briefing de Engenharia</span>
            <Icon name="send" size={16} />
          </>
        )}
      </button>

      <div className="text-sm text-muted text-center flex items-center justify-center gap-1.5 pt-2">
        <Icon name="lock" size={14} />
        <span>Suas informações técnicas são tratadas sob estrito sigilo corporativo.</span>
      </div>
    </form>
  );
}

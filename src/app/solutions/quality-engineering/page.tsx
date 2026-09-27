import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/brand/Icon";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Quality Engineering & Observability",
  description:
    "Garantia de qualidade, testes automatizados, instrumentação de observabilidade e CI/CD pela ByteIQ.",
  alternates: {
    canonical: absoluteUrl("/solutions/quality-engineering"),
  },
};

const pillars = [
  {
    label: "Test Automation",
    title: "Automação de Testes",
    desc: "Suítes automatizadas de testes unitários, de integração e ponta a ponta (E2E) com Playwright e Jest para evitar regressões.",
  },
  {
    label: "Telemetry & APM",
    title: "Observabilidade em Produção",
    desc: "Tracing distribuído com OpenTelemetry, monitoramento de latência P95/P99 e alertas configurados antes de impactos em clientes.",
  },
  {
    label: "AI Evaluation",
    title: "Validação & Evals de IA",
    desc: "Métricas determinísticas para avaliar respostas de LLMs, detectando alucinações, drift de modelo e degradação de acurácia.",
  },
];

const deliverables = [
  "Configuração de suítes de testes automatizados com cobertura garantida",
  "Instrumentação de OpenTelemetry em backends e serviços de IA",
  "Pipelines de CI/CD com portas de qualidade (Quality Gates) automatizadas",
  "Testes de carga e stress para validação de limites de infraestrutura",
  "Painéis de telemetria em tempo real (Grafana / Datadog / CloudWatch)",
  "Auditorias de vulnerabilidades e verificação estática de segurança (SAST)",
];

export default function QualityEngineeringSolutionPage() {
  return (
    <div className="pt-48 pb-24 sm:pt-56 sm:pb-32 bg-bg min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-sm text-muted mb-4">
          <Link href="/" className="link-underline hover:text-primary transition-colors">ByteIQ</Link>
          <span>/</span>
          <Link href="/solutions" className="link-underline hover:text-primary transition-colors">Soluções</Link>
          <span>/</span>
          <span className="text-secondary">Quality Engineering</span>
        </div>

        <div className="pb-12 border-b border-border">
          <span className="text-overline text-muted">Reliability, Testing &amp; Observability</span>
          <h1 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight text-primary text-balance">
            Quality Engineering &amp; Observabilidade.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-secondary leading-relaxed max-w-2xl">
            Qualidade é um princípio contínuo. Implementamos automação de testes, validação
            determinística de modelos de IA, telemetria proativa e pipelines de entrega contínua.
          </p>
        </div>

        <div className="py-14 border-b border-border space-y-8">
          <span className="text-overline text-muted">Pilares de Qualidade</span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p) => (
              <div key={p.title} className="space-y-2">
                <div className="text-sm font-medium text-brand-text">{p.label}</div>
                <h2 className="text-lg font-semibold text-primary">{p.title}</h2>
                <p className="text-sm text-secondary leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="py-14 space-y-8">
          <span className="text-overline text-muted">Entregáveis Técnicos</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {deliverables.map((item) => (
              <div
                key={item}
                className="p-4 rounded-lg border border-border bg-bg-subtle text-sm text-secondary flex items-start gap-3"
              >
                <Icon name="check" size={16} className="text-brand shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 p-8 sm:p-10 rounded-xl bg-bg-subtle flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-semibold text-primary mb-1">
              Quer elevar a confiabilidade dos seus sistemas e modelos?
            </h2>
            <p className="text-sm text-secondary">Converse com nosso time de engenharia de qualidade.</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center h-11 px-6 bg-brand text-white font-medium text-sm rounded-md transition-all duration-200 ease-out hover:bg-brand-hover hover:-translate-y-0.5 active:translate-y-0 motion-reduce:hover:translate-y-0 shrink-0"
          >
            Falar sobre Confiabilidade
          </Link>
        </div>
      </div>
    </div>
  );
}

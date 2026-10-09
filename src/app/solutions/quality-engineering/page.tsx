import React from "react";
import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";
import { OG_IMAGE } from "@/app/layout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { CTABanner } from "@/components/layout/CTABanner";
import { Reveal } from "@/components/motion/Reveal";
import { SolutionDiagram } from "@/components/solutions/SolutionDiagram";

const TITLE = "Quality Engineering & Observability";
const DESCRIPTION =
  "Garantia de qualidade, testes automatizados, instrumentação de observabilidade e CI/CD pela ByteIQ.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: absoluteUrl("/solutions/quality-engineering"),
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: absoluteUrl("/solutions/quality-engineering"),
    images: [OG_IMAGE],
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
        <Breadcrumb
          items={[{ label: "ByteIQ", href: "/" }, { label: "Soluções", href: "/solutions" }, { label: "Quality Engineering" }]}
          className="mb-4"
        />

        <div className="pb-12 border-b border-border lg:grid lg:grid-cols-12 lg:gap-10 lg:items-center">
          <div className="lg:col-span-7">
            <span className="text-overline text-muted">Reliability, Testing &amp; Observability</span>
            <h1 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight text-primary text-balance">
              Quality Engineering &amp; Observabilidade.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-secondary leading-relaxed max-w-2xl">
              Qualidade é um princípio contínuo. Implementamos automação de testes, validação
              determinística de modelos de IA, telemetria proativa e pipelines de entrega contínua.
            </p>
          </div>
          <Reveal variant="up" delay={120} className="hidden lg:block lg:col-span-5">
            <SolutionDiagram kind="pipeline" accent="brand" labels={["Código", "Testes", "Deploy", "Monitor"]} />
          </Reveal>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
            {deliverables.map((item, index) => (
              <div key={item} className="flex items-start gap-3 py-4 border-t border-border">
                <span className="text-sm text-brand-text shrink-0 w-6">{String(index + 1).padStart(2, "0")}</span>
                <span className="text-sm text-secondary leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <CTABanner
          title="Quer elevar a confiabilidade dos seus sistemas e modelos?"
          subtitle="Converse com nosso time de engenharia de qualidade."
          ctaLabel="Falar sobre Confiabilidade"
          ctaHref="/contact"
          titleAs="h2"
          className="mt-8"
        />
      </div>
    </div>
  );
}

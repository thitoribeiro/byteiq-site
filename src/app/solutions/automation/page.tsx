import React from "react";
import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";
import { OG_IMAGE } from "@/app/layout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { CTABanner } from "@/components/layout/CTABanner";

const TITLE = "Intelligent Automation & Integrations";
const DESCRIPTION =
  "Automação de processos operacionais, orquestração de workflows e integração de APIs e sistemas legados pela ByteIQ.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: absoluteUrl("/solutions/automation"),
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: absoluteUrl("/solutions/automation"),
    images: [OG_IMAGE],
  },
};

const pillars = [
  {
    label: "Connector Mesh",
    title: "Integração de APIs & Webhooks",
    desc: "Conexões bidirecionais resilientes com tolerância a falhas, filas de retry com backoff exponencial e garantia de entrega de eventos.",
  },
  {
    label: "Continuous Pipelines",
    title: "Pipelines de Dados Contínuos",
    desc: "Esteiras de sincronização e transformação de dados com validação de contratos de schema e detecção automática de anomalias.",
  },
  {
    label: "Audit & Security",
    title: "Governança & Auditoria",
    desc: "Trilha de auditoria imutável para todas as execuções automatizadas, alertas em tempo real e isolamento seguro de credenciais.",
  },
];

const deliverables = [
  "Orquestração de esteiras de processamento de documentos e pedidos",
  "Conectores de integração sob medida para ERPs, CRMs e bancos legados",
  "Mecanismo de retry automático com garantia de idempotência",
  "Monitoramento de status de execução de fluxos",
  "Alertas automatizados via Slack, e-mail ou webhook operacional",
  "Documentação de arquitetura de dados e catálogo de integrações",
];

export default function AutomationSolutionPage() {
  return (
    <div className="pt-48 pb-24 sm:pt-56 sm:pb-32 bg-bg min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[{ label: "ByteIQ", href: "/" }, { label: "Soluções", href: "/solutions" }, { label: "Automation" }]}
          className="mb-4"
        />

        <div className="pb-12 border-b border-border">
          <span className="text-overline text-data-text">Process Orchestration &amp; APIs</span>
          <h1 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight text-primary text-balance">
            Automação Inteligente &amp; Integração de Sistemas.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-secondary leading-relaxed max-w-2xl">
            Eliminamos ineficiências manuais e silos de informação construindo pipelines de automação
            determinísticos que orquestram dados e integram softwares heterogêneos.
          </p>
        </div>

        <div className="py-14 border-b border-border space-y-8">
          <span className="text-overline text-muted">Capacidades de Automação</span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p) => (
              <div key={p.title} className="space-y-2">
                <div className="text-sm font-medium text-data-text">{p.label}</div>
                <h2 className="text-lg font-semibold text-primary">{p.title}</h2>
                <p className="text-sm text-secondary leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="py-14 space-y-8">
          <span className="text-overline text-muted">Entregáveis &amp; Especificações</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
            {deliverables.map((item, index) => (
              <div key={item} className="flex items-start gap-3 py-4 border-t border-border">
                <span className="text-sm text-data-text shrink-0 w-6">{String(index + 1).padStart(2, "0")}</span>
                <span className="text-sm text-secondary leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <CTABanner
          title="Deseja automatizar processos críticos da sua empresa?"
          subtitle="Converse com nossos especialistas em integração e orquestração de sistemas."
          ctaLabel="Iniciar Projeto de Automação"
          ctaHref="/contact"
          titleAs="h2"
          className="mt-8"
        />
      </div>
    </div>
  );
}

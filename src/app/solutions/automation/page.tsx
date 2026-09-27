import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/brand/Icon";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Intelligent Automation & Integrations",
  description:
    "Automação de processos operacionais, orquestração de workflows e integração de APIs e sistemas legados pela ByteIQ.",
  alternates: {
    canonical: absoluteUrl("/solutions/automation"),
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
        <div className="flex items-center gap-2 text-sm text-muted mb-4">
          <Link href="/" className="link-underline hover:text-primary transition-colors">ByteIQ</Link>
          <span>/</span>
          <Link href="/solutions" className="link-underline hover:text-primary transition-colors">Soluções</Link>
          <span>/</span>
          <span className="text-secondary">Automation</span>
        </div>

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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {deliverables.map((item) => (
              <div
                key={item}
                className="p-4 rounded-lg border border-border bg-bg-subtle text-sm text-secondary flex items-start gap-3"
              >
                <Icon name="check" size={16} className="text-data shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 p-8 sm:p-10 rounded-xl bg-bg-subtle flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-semibold text-primary mb-1">
              Deseja automatizar processos críticos da sua empresa?
            </h2>
            <p className="text-sm text-secondary">
              Converse com nossos especialistas em integração e orquestração de sistemas.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center h-11 px-6 bg-brand text-white font-medium text-sm rounded-md transition-all duration-200 ease-out hover:bg-brand-hover hover:-translate-y-0.5 active:translate-y-0 motion-reduce:hover:translate-y-0 shrink-0"
          >
            Iniciar Projeto de Automação
          </Link>
        </div>
      </div>
    </div>
  );
}

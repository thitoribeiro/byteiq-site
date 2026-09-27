import React from "react";
import Link from "next/link";
import { Icon } from "@/components/brand/Icon";
import type { IconName } from "@/components/brand/Icon";
import { Reveal } from "@/components/motion/Reveal";

const flow: { label: string; desc: string; icon: IconName }[] = [
  { label: "Processo de Negócio", desc: "Mapeamento de regras operacionais, gatilhos de eventos e exceções.", icon: "briefcase" },
  { label: "Automação", desc: "Execução assíncrona com filas de retry e controle rigoroso de idempotência.", icon: "workflow" },
  { label: "Integração", desc: "Conexão bidirecional entre ERPs, CRMs, bancos e serviços modernos.", icon: "integration" },
  { label: "Resultado", desc: "Auditoria imutável de transações, telemetria e alertas em tempo real.", icon: "trend-up" },
];

const capabilities = [
  {
    title: "Automação de Workflows Críticos",
    desc: "Substituição de rotinas manuais repetitivas por fluxos automatizados que operam 24/7 com tolerância a falhas.",
  },
  {
    title: "Integração de Sistemas Heterogêneos",
    desc: "Interligação segura entre arquiteturas legadas e novos ecossistemas em nuvem, garantindo consistência dos dados.",
  },
  {
    title: "Pipelines de Dados Contínuos",
    desc: "Sistemas de ingestão e transformação com validação contínua de schema, evitando perda ou corrupção de informações.",
  },
  {
    title: "Governança & Segurança",
    desc: "Controle estrito de acessos, encriptação de ponta a ponta e rastreabilidade total de cada evento transacional.",
  },
];

export function AutomationSection() {
  return (
    <section id="automation" aria-label="Automação Inteligente ByteIQ" className="py-24 sm:py-32 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal variant="up" className="max-w-2xl mb-16">
          <span className="text-overline text-data-text">Automation</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-primary text-balance">
            Processos conectados, operação contínua.
          </h2>
          <p className="mt-6 text-base sm:text-lg text-secondary leading-relaxed">
            Desenhamos esteiras de automação determinísticas para orquestrar dados, softwares e
            integrações sem atrito operacional.
          </p>
        </Reveal>

        {/* Single visual idea: Business Process -> Automation -> Integration -> Result */}
        <Reveal
          variant="right"
          delay={80}
          className="mb-16 flex flex-col sm:flex-row sm:items-stretch gap-6 sm:gap-0"
        >
          {flow.map((step, idx) => (
            <React.Fragment key={step.label}>
              <div className="flex-1 sm:px-6 first:pl-0 last:pr-0">
                <Icon name={step.icon} size={22} className="text-data mb-3" />
                <div className="text-sm font-semibold text-primary">{step.label}</div>
                <p className="mt-1.5 text-sm text-secondary leading-relaxed">{step.desc}</p>
              </div>
              {idx < flow.length - 1 && (
                <div className="hidden sm:flex items-center text-data/40">
                  <Icon name="arrow-right" size={16} />
                </div>
              )}
            </React.Fragment>
          ))}
        </Reveal>

        <Reveal
          variant="up"
          delay={140}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 pt-10 border-t border-border"
        >
          {capabilities.map((item) => (
            <div key={item.title} className="space-y-1.5">
              <h3 className="text-base font-semibold text-primary">{item.title}</h3>
              <p className="text-sm text-secondary leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </Reveal>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <span className="text-sm text-secondary">
            Integrações seguras com garantia de entrega e idempotência.
          </span>
          <Link
            href="/solutions/automation"
            className="link-underline group inline-flex items-center gap-2 text-sm font-medium text-brand-text hover:text-brand-hover transition-colors"
          >
            <span>Ver Soluções em Automação</span>
            <Icon
              name="arrow-right"
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:group-hover:translate-x-0"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

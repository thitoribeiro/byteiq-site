import React from "react";
import Link from "next/link";
import { Icon } from "@/components/brand/Icon";
import type { IconName } from "@/components/brand/Icon";
import { Reveal } from "@/components/motion/Reveal";

const aiCapabilities: { title: string; desc: string; icon: IconName }[] = [
  {
    title: "AI Agents",
    desc: "Agentes autônomos com execução de ferramentas determinísticas, memória estruturada e tomadas de decisão contextualizadas.",
    icon: "agent",
  },
  {
    title: "AI Copilots",
    desc: "Assistentes integrados diretamente ao software corporativo para acelerar fluxos analíticos e operacionais complexos.",
    icon: "ai-prompt",
  },
  {
    title: "RAG & Knowledge Systems",
    desc: "Arquiteturas RAG com chunking semântico, busca híbrida vetorial/lexical e guardrails rigorosos anti-alucinação.",
    icon: "knowledge-base",
  },
  {
    title: "Multi-Agent Systems",
    desc: "Redes colaborativas de agentes com papéis especializados, orquestrados de forma determinística.",
    icon: "agent-workflow",
  },
  {
    title: "LLM Integration",
    desc: "Integração de modelos fundacionais com failover inteligente, roteamento por custo/latência e caching semântico.",
    icon: "ai-model",
  },
  {
    title: "AI Evaluation",
    desc: "Instrumentação de chamadas de LLM com rastreamento de tokens, latência e métricas de acurácia.",
    icon: "target",
  },
];

const flow = [
  { label: "Knowledge", desc: "Bases vetoriais, documentos e dados corporativos indexados com busca híbrida." },
  { label: "Intelligence", desc: "Modelos fundacionais e agentes que raciocinam sobre o contexto recuperado." },
  { label: "Action", desc: "Execução determinística de ferramentas, APIs e regras de negócio." },
  { label: "Result", desc: "Saída validada, auditável e observável de ponta a ponta." },
];

export function AiEngineeringSection() {
  return (
    <section id="ai-engineering" aria-label="Engenharia de IA ByteIQ" className="py-24 sm:py-32 bg-bg-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal variant="up" className="max-w-2xl mb-16">
          <span className="text-overline text-ai-text">AI Engineering</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-primary text-balance">
            Sistemas inteligentes, não mágica de IA.
          </h2>
          <p className="mt-6 text-base sm:text-lg text-secondary leading-relaxed">
            Tratamos inteligência artificial como disciplina de engenharia de software: arquiteturas
            resilientes, determinismo de execução e observabilidade contínua.
          </p>
        </Reveal>

        {/* Single visual idea: Knowledge -> Intelligence -> Action -> Result */}
        <Reveal
          variant="up"
          delay={80}
          className="mb-16 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-8 border-y border-ai-border/60 py-8"
        >
          {flow.map((step, idx) => (
            <div key={step.label} className="relative">
              <div className="flex items-center gap-2 text-ai-text text-sm font-medium mb-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-ai-subtle text-xs font-semibold">
                  {idx + 1}
                </span>
                {step.label}
              </div>
              <p className="text-sm text-secondary leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </Reveal>

        <Reveal
          variant="up"
          delay={160}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10"
        >
          {aiCapabilities.map((cap) => (
            <div key={cap.title} className="flex gap-3.5">
              <Icon name={cap.icon} size={20} className="text-ai mt-0.5 shrink-0" />
              <div>
                <h3 className="text-base font-semibold text-primary">{cap.title}</h3>
                <p className="mt-1.5 text-sm text-secondary leading-relaxed">{cap.desc}</p>
              </div>
            </div>
          ))}
        </Reveal>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <span className="text-sm text-secondary">
            Arquiteturas de IA personalizadas com governança e observabilidade.
          </span>
          <Link
            href="/solutions/ai-agents"
            className="link-underline group inline-flex items-center gap-2 text-sm font-medium text-brand-text hover:text-brand-hover transition-colors"
          >
            <span>Explorar Soluções em IA</span>
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

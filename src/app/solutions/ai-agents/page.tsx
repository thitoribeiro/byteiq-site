import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/brand/Icon";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI Agents & Autonomous Systems",
  description:
    "Desenvolvimento de agentes autônomos de IA, sistemas multiagentes, copilots especializados e pipelines RAG com observabilidade e determinismo.",
  alternates: {
    canonical: absoluteUrl("/solutions/ai-agents"),
  },
};

const pillars = [
  {
    label: "Tool Calling & APIs",
    title: "Execução Determinística",
    desc: "Agentes que executam consultas parametrizadas, acionam webhooks e operam sistemas corporativos com validação estrita de esquemas.",
  },
  {
    label: "Hybrid RAG",
    title: "Recuperação de Conhecimento",
    desc: "Bancos vetoriais integrados a busca lexical e re-ranking neural, garantindo que as respostas sejam fundamentadas em dados reais.",
  },
  {
    label: "Multi-Agent Networks",
    title: "Orquestração em Grafos",
    desc: "Divisão de problemas complexos em redes de agentes especializados, orquestrados com tolerância a falhas.",
  },
];

const deliverables = [
  "Agentes autônomos de triagem e diagnóstico operacional",
  "Sistemas RAG com re-ranking e guardrails anti-alucinação",
  "Copilots contextuais integrados a ERPs e CRMs existentes",
  "Instrumentação OpenTelemetry para rastreamento de latência e custo",
  "Pipelines de validação contínua de prompts e datasets de benchmark",
  "Serviço privado de inferência local ou em VPC dedicada",
];

export default function AiAgentsSolutionPage() {
  return (
    <div className="pt-48 pb-24 sm:pt-56 sm:pb-32 bg-bg min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-sm text-muted mb-4">
          <Link href="/" className="link-underline hover:text-primary transition-colors">ByteIQ</Link>
          <span>/</span>
          <Link href="/solutions" className="link-underline hover:text-primary transition-colors">Soluções</Link>
          <span>/</span>
          <span className="text-secondary">AI Agents</span>
        </div>

        <div className="pb-12 border-b border-border">
          <span className="text-overline text-ai-text">AI Engineering &amp; Autonomous Systems</span>
          <h1 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight text-primary text-balance">
            AI Agents &amp; Sistemas Autônomos.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-secondary leading-relaxed max-w-2xl">
            Projetamos e implementamos agentes inteligentes que executam tarefas complexas de forma
            determinística, conectando modelos de linguagem de ponta às ferramentas, bancos de dados e
            APIs da sua empresa.
          </p>
        </div>

        <div className="py-14 border-b border-border space-y-8">
          <span className="text-overline text-muted">Arquitetura de Agentes</span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p) => (
              <div key={p.title} className="space-y-2">
                <div className="text-sm font-medium text-ai-text">{p.label}</div>
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
                <Icon name="check" size={16} className="text-ai shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 p-8 sm:p-10 rounded-xl bg-bg-subtle flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-semibold text-primary mb-1">
              Vamos construir um sistema de agentes para a sua operação?
            </h2>
            <p className="text-sm text-secondary">
              Agende uma sessão técnica de viabilidade e arquitetura com nossos engenheiros.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center h-11 px-6 bg-brand text-white font-medium text-sm rounded-md transition-all duration-200 ease-out hover:bg-brand-hover hover:-translate-y-0.5 active:translate-y-0 motion-reduce:hover:translate-y-0 shrink-0"
          >
            Iniciar Projeto de IA
          </Link>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";
import { OG_IMAGE } from "@/app/layout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { CTABanner } from "@/components/layout/CTABanner";

const TITLE = "AI Agents & Autonomous Systems";
const DESCRIPTION =
  "Desenvolvimento de agentes autônomos de IA, sistemas multiagentes, copilots especializados e pipelines RAG com observabilidade e determinismo.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: absoluteUrl("/solutions/ai-agents"),
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: absoluteUrl("/solutions/ai-agents"),
    images: [OG_IMAGE],
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
        <Breadcrumb
          items={[{ label: "ByteIQ", href: "/" }, { label: "Soluções", href: "/solutions" }, { label: "AI Agents" }]}
          className="mb-4"
        />

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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
            {deliverables.map((item, index) => (
              <div key={item} className="flex items-start gap-3 py-4 border-t border-border">
                <span className="text-sm text-ai-text shrink-0 w-6">{String(index + 1).padStart(2, "0")}</span>
                <span className="text-sm text-secondary leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <CTABanner
          title="Vamos construir um sistema de agentes para a sua operação?"
          subtitle="Agende uma sessão técnica de viabilidade e arquitetura com nossos engenheiros."
          ctaLabel="Iniciar Projeto de IA"
          ctaHref="/contact"
          titleAs="h2"
          className="mt-8"
        />
      </div>
    </div>
  );
}

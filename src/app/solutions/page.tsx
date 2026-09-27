import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/brand/Icon";
import type { IconName } from "@/components/brand/Icon";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Soluções de Engenharia",
  description:
    "Explore as capacidades de engenharia de software, inteligência artificial, automação e consultoria técnica da ByteIQ.",
  alternates: {
    canonical: absoluteUrl("/solutions"),
  },
};

const solutionsList: {
  slug: string;
  title: string;
  category: string;
  desc: string;
  deliverables: string[];
  href: string;
  icon: IconName;
}[] = [
  {
    slug: "ai-agents",
    title: "AI Agents & Autonomous Systems",
    category: "AI Engineering",
    desc: "Agentes autônomos com tool-calling determinístico, memórias de curto/longo prazo, pipelines RAG híbridos e observabilidade de LLMs.",
    deliverables: [
      "Agentes Autônomos de Suporte & Diagnóstico",
      "Pipelines RAG com Re-ranking Vetorial",
      "Multi-Agent Collaborative Workflows",
      "Sistemas de Avaliação de Modelos (Eval)",
    ],
    href: "/solutions/ai-agents",
    icon: "ai-spark",
  },
  {
    slug: "software-engineering",
    title: "Software & Web Applications",
    category: "Systems & Backends",
    desc: "Construção de aplicações web complexas, plataformas SaaS multi-tenant, arquiteturas de microsserviços e backends transacionais.",
    deliverables: [
      "Aplicações Web em Next.js & React",
      "Plataformas SaaS Escaláveis",
      "APIs REST / gRPC de Baixa Latência",
      "Aplicativos Móveis iOS & Android",
    ],
    href: "/solutions/software-engineering",
    icon: "code",
  },
  {
    slug: "automation",
    title: "Intelligent Automation & Integrations",
    category: "Workflow Orchestration",
    desc: "Automação avançada de processos de negócio, integração de sistemas legados e criação de pipelines assíncronos orientados a eventos.",
    deliverables: [
      "Orquestração de Processos de Negócio",
      "Conectores de APIs & Webhooks Resilientes",
      "Processamento Inteligente de Documentos",
      "Esteiras de Dados Contínuas (ETL/ELT)",
    ],
    href: "/solutions/automation",
    icon: "workflow",
  },
  {
    slug: "quality-engineering",
    title: "Quality Engineering & Observability",
    category: "Reliability & Testing",
    desc: "Engenharia de confiabilidade contínua com suítes de testes automatizados, telemetria em tempo real, tracing OpenTelemetry e CI/CD.",
    deliverables: [
      "Testes Automatizados E2E, Integração e Unitários",
      "Instrumentação OpenTelemetry & Tracing",
      "Pipelines CI/CD com Verificações de Segurança",
      "Benchmarking Contínuo de Latência e Custo",
    ],
    href: "/solutions/quality-engineering",
    icon: "shield",
  },
  {
    slug: "technology-consulting",
    title: "Technology Consulting & Architecture",
    category: "Technical Advisory",
    desc: "Consultoria técnica especializada para desenho de arquitetura de novos produtos, modernização de sistemas legados e estratégia de adoção de IA.",
    deliverables: [
      "Auditoria Arquitetural & Diagnóstico de Código",
      "Desenho de Topologia e Segurança em Nuvem",
      "Planejamento de Migração & Escalabilidade",
      "Estratégia de Integração de Modelos de IA",
    ],
    href: "/solutions/technology-consulting",
    icon: "target",
  },
];

export default function SolutionsHubPage() {
  return (
    <div className="pt-48 pb-24 sm:pt-56 sm:pb-32 bg-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pb-12 mb-16 border-b border-border">
          <div className="flex items-center gap-2 text-sm text-muted mb-4">
            <Link href="/" className="link-underline hover:text-primary transition-colors">ByteIQ</Link>
            <span>/</span>
            <span className="text-secondary">Soluções</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-primary text-balance">
            Soluções de engenharia &amp; software.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-secondary max-w-2xl leading-relaxed">
            Arquitetamos e desenvolvemos sistemas completos com foco em estabilidade operacional,
            escalabilidade e inteligência aplicada.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-14">
          {solutionsList.map((sol) => (
            <div key={sol.slug} className="border-t border-border pt-8">
              <Icon name={sol.icon} size={24} className="text-brand mb-4" />
              <span className="text-sm text-muted">{sol.category}</span>
              <h2 className="mt-1 text-xl font-semibold text-primary tracking-tight">{sol.title}</h2>
              <p className="mt-3 text-sm text-secondary leading-relaxed">{sol.desc}</p>

              <ul className="mt-5 space-y-1.5">
                {sol.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-secondary">
                    <span className="w-1 h-1 rounded-full bg-muted mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={sol.href}
                className="link-underline group mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand-text hover:text-brand-hover transition-colors"
              >
                <span>Ver documentação da solução</span>
                <Icon
                  name="arrow-right"
                  size={14}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:group-hover:translate-x-0"
                />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 sm:p-10 rounded-xl bg-bg-subtle flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-semibold text-primary">
              Precisa de uma combinação personalizada de soluções?
            </h3>
            <p className="mt-1 text-sm text-secondary">
              Desenhamos arquiteturas integradas que combinam IA, software web e automação contínua.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center h-11 px-6 bg-brand text-white font-medium text-sm rounded-md transition-all duration-200 ease-out hover:bg-brand-hover hover:-translate-y-0.5 active:translate-y-0 motion-reduce:hover:translate-y-0 shrink-0"
          >
            Falar com a Engenharia
          </Link>
        </div>
      </div>
    </div>
  );
}

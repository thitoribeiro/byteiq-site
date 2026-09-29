import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/brand/Icon";
import { absoluteUrl } from "@/lib/site";
import { OG_IMAGE } from "@/app/layout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { CTABanner } from "@/components/layout/CTABanner";

const TITLE = "Soluções de Engenharia";
const DESCRIPTION =
  "Explore as capacidades de engenharia de software, inteligência artificial, automação e consultoria técnica da ByteIQ.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: absoluteUrl("/solutions"),
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: absoluteUrl("/solutions"),
    images: [OG_IMAGE],
  },
};

const solutionsList: {
  slug: string;
  title: string;
  category: string;
  desc: string;
  deliverables: string[];
  href: string;
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
  },
];

export default function SolutionsHubPage() {
  return (
    <div className="pt-48 pb-24 sm:pt-56 sm:pb-32 bg-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pb-12 mb-16 border-b border-border">
          <Breadcrumb items={[{ label: "ByteIQ", href: "/" }, { label: "Soluções" }]} className="mb-4" />
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-primary text-balance">
            Soluções de engenharia &amp; software.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-secondary max-w-2xl leading-relaxed">
            Arquitetamos e desenvolvemos sistemas completos com foco em estabilidade operacional,
            escalabilidade e inteligência aplicada.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-14">
          {solutionsList.map((sol, index) => (
            <div key={sol.slug} className="border-t border-border pt-8">
              <span className="text-2xl font-semibold tracking-tight text-brand-text">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="mt-4 text-sm text-muted">{sol.category}</div>
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

        <CTABanner
          title="Precisa de uma combinação personalizada de soluções?"
          subtitle="Desenhamos arquiteturas integradas que combinam IA, software web e automação contínua."
          ctaLabel="Falar com a Engenharia"
          ctaHref="/contact"
        />
      </div>
    </div>
  );
}

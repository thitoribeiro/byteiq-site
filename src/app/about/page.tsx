import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl } from "@/lib/site";
import { OG_IMAGE } from "@/app/layout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { CTABanner } from "@/components/layout/CTABanner";
import { Icon } from "@/components/brand/Icon";

const TITLE = "Sobre a ByteIQ";
const DESCRIPTION =
  "A ByteIQ é uma empresa de tecnologia orientada à engenharia, focada em Engenharia de IA, desenvolvimento de software e infraestrutura de sistemas inteligentes.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: absoluteUrl("/about"),
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: absoluteUrl("/about"),
    images: [OG_IMAGE],
  },
};

const studioPillars = [
  {
    num: "01",
    title: "Engenharia sobre Hype",
    desc: "Não tratamos inteligência artificial como acessório de marketing. IA é uma camada crítica de computação que requer arquiteturas determinísticas, contratos estritos de dados e observabilidade contínua.",
  },
  {
    num: "02",
    title: "Sistemas & Pensamento Estrutural",
    desc: "Enxergamos cada produto digital como parte de um ecossistema conectado. Do banco de dados à interface do usuário, cada componente é desenhado com limites claros de responsabilidade.",
  },
  {
    num: "03",
    title: "Precisão & Confiabilidade",
    desc: "Qualidade é inegociável. Aplicamos tipagem estrita, suítes completas de testes automatizados e monitoramento de telemetria em tempo real.",
  },
];

const disciplines = [
  {
    title: "AI Agents",
    desc: "Agentes autônomos, sistemas multiagentes, RAG e orquestração de LLMs.",
    href: "/solutions/ai-agents",
  },
  {
    title: "Software Engineering",
    desc: "Aplicações web escaláveis, microsserviços e plataformas SaaS.",
    href: "/solutions/software-engineering",
  },
  {
    title: "Automation",
    desc: "Orquestração de workflows, mensageria e integração de APIs.",
    href: "/solutions/automation",
  },
  {
    title: "Quality Engineering",
    desc: "Testes automatizados, observabilidade e tracing distribuído.",
    href: "/solutions/quality-engineering",
  },
  {
    title: "Technology Consulting",
    desc: "Auditoria arquitetural, diagnóstico técnico, estratégia de IA e topologia de infraestrutura em nuvem.",
    href: "/solutions/technology-consulting",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-48 pb-24 sm:pt-56 sm:pb-32 bg-bg min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "ByteIQ", href: "/" }, { label: "Sobre" }]} className="mb-4" />

        <div className="pb-12 border-b border-border mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          <div className="lg:col-span-7">
            <span className="text-overline text-muted">Digital Engineering Studio</span>
            <h1 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight text-primary text-balance">
              Engenharia de Software &amp; Inteligência Artificial.
            </h1>
          </div>
          <div className="lg:col-span-5 lg:pt-16">
            <p className="text-base sm:text-lg text-secondary leading-relaxed">
              A <strong className="text-primary font-semibold">ByteIQ Tecnologia</strong> é uma empresa de
              tecnologia orientada à engenharia. Projetamos e construímos sistemas de software
              inteligentes, agentes autônomos, soluções de automação e plataformas digitais de alta
              confiabilidade.
            </p>
          </div>
        </div>

        <div className="pb-16 border-b border-border">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <span className="text-overline text-muted">Quem Somos</span>
              <h2 className="mt-2 text-2xl font-semibold text-primary tracking-tight">
                Um estúdio de engenharia digital.
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-4 text-sm sm:text-base text-secondary leading-relaxed">
              <p>
                Acreditamos que o futuro do software corporativo reside na convergência entre engenharia
                de software tradicional de alta disciplina e capacidades modernas de inteligência
                artificial generativa.
              </p>
              <p>
                Ao contrário de agências digitais genéricas ou fábricas de software convencionais, a
                ByteIQ atua como parceira técnica estratégica, projetando sistemas que resolvem gargalos
                operacionais reais e que continuam performando com estabilidade à medida que o negócio
                cresce.
              </p>
            </div>
          </div>

          <div className="mt-16 max-w-3xl">
            {studioPillars.map((pillar) => (
              <div key={pillar.num} className="pt-8 pb-8 border-t border-border first:border-t-0">
                <div className="sm:flex sm:items-baseline sm:gap-8">
                  <span className="text-xl font-medium text-brand-text shrink-0">{pillar.num}</span>
                  <div className="mt-2 sm:mt-0">
                    <h3 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">{pillar.title}</h3>
                    <p className="mt-2 text-sm sm:text-base text-secondary leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="py-16 border-b border-border">
          <h2 className="text-overline text-muted mb-8">Disciplinas Integradas</h2>
          <div className="border-t border-border">
            {disciplines.map((disc, index) => (
              <Link
                key={disc.title}
                href={disc.href}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-10 items-baseline border-b border-border py-6"
              >
                <div className="relative lg:col-span-1">
                  <span className="text-xl font-medium text-brand-text">{String(index + 1).padStart(2, "0")}</span>
                  <span
                    aria-hidden="true"
                    className="capability-trace hidden lg:block absolute top-1/2 left-full h-px w-10 bg-border-strong"
                  />
                </div>
                <div className="lg:col-span-4">
                  <span className="text-base font-semibold text-primary group-hover:text-brand-text transition-colors">
                    {disc.title}
                  </span>
                </div>
                <div className="lg:col-span-6">
                  <p className="text-sm text-secondary leading-relaxed">{disc.desc}</p>
                </div>
                <div className="lg:col-span-1 lg:flex lg:justify-end">
                  <Icon
                    name="arrow-right"
                    size={16}
                    className="text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-brand-text motion-reduce:group-hover:translate-x-0"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="py-16 border-b border-border">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <span className="text-overline text-muted">Abordagem</span>
              <h2 className="mt-2 text-2xl font-semibold text-primary tracking-tight">
                Da complexidade à clareza.
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-4 text-sm sm:text-base text-secondary leading-relaxed">
              <p>
                Cada projeto segue uma metodologia estruturada em cinco fases — de descoberta a evolução
                contínua — com entregáveis técnicos claros em cada etapa, em vez de escopos abertos e
                prazos indefinidos.
              </p>
              <Link
                href="/process"
                className="link-underline inline-flex items-center gap-1.5 text-sm font-medium text-brand-text hover:text-brand-hover transition-colors"
              >
                Conhecer nossa metodologia
              </Link>
            </div>
          </div>
        </div>

        <CTABanner
          title="Quer levar o rigor de engenharia da ByteIQ para a sua empresa?"
          subtitle="Inicie uma conversa técnica com nossos arquitetos."
          ctaLabel="Falar com a ByteIQ"
          ctaHref="/contact"
        />
      </div>
    </div>
  );
}

import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sobre a ByteIQ",
  description:
    "A ByteIQ é uma empresa de tecnologia orientada à engenharia, focada em Engenharia de IA, desenvolvimento de software e infraestrutura de sistemas inteligentes.",
  alternates: {
    canonical: absoluteUrl("/about"),
  },
};

const studioPillars = [
  {
    title: "Engenharia sobre Hype",
    desc: "Não tratamos inteligência artificial como acessório de marketing. IA é uma camada crítica de computação que requer arquiteturas determinísticas, contratos estritos de dados e observabilidade contínua.",
  },
  {
    title: "Sistemas & Pensamento Estrutural",
    desc: "Enxergamos cada produto digital como parte de um ecossistema conectado. Do banco de dados à interface do usuário, cada componente é desenhado com limites claros de responsabilidade.",
  },
  {
    title: "Precisão & Confiabilidade",
    desc: "Qualidade é inegociável. Aplicamos tipagem estrita, suítes completas de testes automatizados e monitoramento de telemetria em tempo real.",
  },
];

const disciplines = [
  { title: "AI Engineering", desc: "Agentes autônomos, sistemas multiagentes, RAG e orquestração de LLMs." },
  { title: "Software Engineering", desc: "Aplicações web escaláveis, microsserviços e plataformas SaaS." },
  { title: "Intelligent Automation", desc: "Orquestração de workflows, mensageria e integração de APIs." },
  { title: "Quality Engineering", desc: "Testes automatizados, observabilidade e tracing distribuído." },
  { title: "Cloud & Infrastructure", desc: "Infraestrutura como código, contêineres e segurança." },
  { title: "Technology Consulting", desc: "Auditoria arquitetural, diagnóstico técnico e estratégia de IA." },
];

export default function AboutPage() {
  return (
    <div className="pt-48 pb-24 sm:pt-56 sm:pb-32 bg-bg min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-sm text-muted mb-4">
          <Link href="/" className="link-underline hover:text-primary transition-colors">ByteIQ</Link>
          <span>/</span>
          <span className="text-secondary">Sobre</span>
        </div>

        <div className="pb-12 border-b border-border mb-16">
          <span className="text-overline text-muted">Digital Engineering Studio</span>
          <h1 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight text-primary text-balance">
            Engenharia de Software &amp; Inteligência Artificial.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-secondary leading-relaxed max-w-2xl">
            A <strong className="text-primary font-semibold">ByteIQ Tecnologia</strong> é uma empresa de
            tecnologia orientada à engenharia. Projetamos e construímos sistemas de software
            inteligentes, agentes autônomos, soluções de automação e plataformas digitais de alta
            confiabilidade.
          </p>
        </div>

        <div className="space-y-16 pb-16 border-b border-border">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4 border-t border-border">
            {studioPillars.map((pillar) => (
              <div key={pillar.title} className="space-y-2">
                <h3 className="text-base font-semibold text-primary tracking-tight">{pillar.title}</h3>
                <p className="text-sm text-secondary leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="py-16 border-b border-border space-y-8">
          <span className="text-overline text-muted">Disciplinas Integradas</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {disciplines.map((disc) => (
              <div key={disc.title} className="space-y-1.5">
                <div className="text-sm font-semibold text-primary">{disc.title}</div>
                <p className="text-sm text-secondary leading-relaxed">{disc.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 p-8 sm:p-10 rounded-xl bg-bg-subtle flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-semibold text-primary">
              Quer levar o rigor de engenharia da ByteIQ para a sua empresa?
            </h3>
            <p className="mt-1 text-sm text-secondary">Inicie uma conversa técnica com nossos arquitetos.</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center h-11 px-6 bg-brand text-white font-medium text-sm rounded-md transition-all duration-200 ease-out hover:bg-brand-hover hover:-translate-y-0.5 active:translate-y-0 motion-reduce:hover:translate-y-0 shrink-0"
          >
            Falar com a ByteIQ
          </Link>
        </div>
      </div>
    </div>
  );
}

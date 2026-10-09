import React from "react";
import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";
import { OG_IMAGE } from "@/app/layout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { CTABanner } from "@/components/layout/CTABanner";
import { Reveal } from "@/components/motion/Reveal";
import { SolutionDiagram } from "@/components/solutions/SolutionDiagram";

const TITLE = "Technology Consulting & Architecture";
const DESCRIPTION =
  "Consultoria técnica especializada em arquitetura de sistemas, modernização de infraestrutura e viabilidade de IA pela ByteIQ.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: absoluteUrl("/solutions/technology-consulting"),
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: absoluteUrl("/solutions/technology-consulting"),
    images: [OG_IMAGE],
  },
};

const pillars = [
  {
    label: "Architecture Audit",
    title: "Auditoria Arquitetural",
    desc: "Diagnóstico aprofundado de código-fonte, gargalos de performance, vulnerabilidades de segurança e débitos técnicos em sistemas legados.",
  },
  {
    label: "AI Strategy & Feasibility",
    title: "Viabilidade & Roadmap de IA",
    desc: "Avaliação técnica de viabilidade de agentes e LLMs para desafios específicos, estimativa de custos de inferência e design de infraestrutura.",
  },
  {
    label: "Cloud Topology",
    title: "Topologia Cloud & Segurança",
    desc: "Desenho de infraestruturas em nuvem (AWS / GCP) com foco em isolamento, conformidade regulatória e otimização de gastos.",
  },
];

const deliverables = [
  "Relatório de Diagnóstico e Auditoria Arquitetural (C4 Model)",
  "Plano de Modernização e Migração para Nuvem",
  "Matriz de Decisão Tecnológica e Trade-offs",
  "Estimativa de Capacidade e Dimensionamento de Custos de IA",
  "Aconselhamento Arquitetural Contínuo (Principal Architect)",
  "Revisão de Segurança de Aplicações e Práticas de DevSecOps",
];

export default function TechnologyConsultingSolutionPage() {
  return (
    <div className="pt-48 pb-24 sm:pt-56 sm:pb-32 bg-bg min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[{ label: "ByteIQ", href: "/" }, { label: "Soluções", href: "/solutions" }, { label: "Technology Consulting" }]}
          className="mb-4"
        />

        <div className="pb-12 border-b border-border lg:grid lg:grid-cols-12 lg:gap-10 lg:items-center">
          <div className="lg:col-span-7">
            <span className="text-overline text-muted">Technical Advisory &amp; Architecture</span>
            <h1 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight text-primary text-balance">
              Technology Consulting &amp; Arquitetura.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-secondary leading-relaxed max-w-2xl">
              Apoiamos lideranças técnicas e executivas na tomada de decisões arquiteturais críticas,
              escolha de tecnologias, modernização de sistemas legados e estratégia de engenharia de IA.
            </p>
          </div>
          <Reveal variant="up" delay={120} className="hidden lg:block lg:col-span-5">
            <SolutionDiagram kind="arc" accent="brand" labels={["Auditoria", "Diagnóstico", "Plano", "Execução"]} />
          </Reveal>
        </div>

        <div className="py-14 border-b border-border space-y-8">
          <span className="text-overline text-muted">Escopo de Consultoria</span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p) => (
              <div key={p.title} className="space-y-2">
                <div className="text-sm font-medium text-brand-text">{p.label}</div>
                <h2 className="text-lg font-semibold text-primary">{p.title}</h2>
                <p className="text-sm text-secondary leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="py-14 space-y-8">
          <span className="text-overline text-muted">Formatos de Atuação</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
            {deliverables.map((item, index) => (
              <div key={item} className="flex items-start gap-3 py-4 border-t border-border">
                <span className="text-sm text-brand-text shrink-0 w-6">{String(index + 1).padStart(2, "0")}</span>
                <span className="text-sm text-secondary leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <CTABanner
          title="Precisa de orientação técnica estratégica para o seu sistema?"
          subtitle="Agende uma sessão técnica inicial com os arquitetos da ByteIQ."
          ctaLabel="Agendar Sessão Técnica"
          ctaHref="/contact"
          titleAs="h2"
          className="mt-8"
        />
      </div>
    </div>
  );
}

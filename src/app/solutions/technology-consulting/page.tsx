import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/brand/Icon";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Technology Consulting & Architecture",
  description:
    "Consultoria técnica especializada em arquitetura de sistemas, modernização de infraestrutura e viabilidade de IA pela ByteIQ.",
  alternates: {
    canonical: absoluteUrl("/solutions/technology-consulting"),
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
        <div className="flex items-center gap-2 text-sm text-muted mb-4">
          <Link href="/" className="link-underline hover:text-primary transition-colors">ByteIQ</Link>
          <span>/</span>
          <Link href="/solutions" className="link-underline hover:text-primary transition-colors">Soluções</Link>
          <span>/</span>
          <span className="text-secondary">Technology Consulting</span>
        </div>

        <div className="pb-12 border-b border-border">
          <span className="text-overline text-muted">Technical Advisory &amp; Architecture</span>
          <h1 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight text-primary text-balance">
            Technology Consulting &amp; Arquitetura.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-secondary leading-relaxed max-w-2xl">
            Apoiamos lideranças técnicas e executivas na tomada de decisões arquiteturais críticas,
            escolha de tecnologias, modernização de sistemas legados e estratégia de engenharia de IA.
          </p>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {deliverables.map((item) => (
              <div
                key={item}
                className="p-4 rounded-lg border border-border bg-bg-subtle text-sm text-secondary flex items-start gap-3"
              >
                <Icon name="check" size={16} className="text-brand shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 p-8 sm:p-10 rounded-xl bg-bg-subtle flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-semibold text-primary mb-1">
              Precisa de orientação técnica estratégica para o seu sistema?
            </h2>
            <p className="text-sm text-secondary">
              Agende uma sessão técnica inicial com os arquitetos da ByteIQ.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center h-11 px-6 bg-brand text-white font-medium text-sm rounded-md transition-all duration-200 ease-out hover:bg-brand-hover hover:-translate-y-0.5 active:translate-y-0 motion-reduce:hover:translate-y-0 shrink-0"
          >
            Agendar Sessão Técnica
          </Link>
        </div>
      </div>
    </div>
  );
}

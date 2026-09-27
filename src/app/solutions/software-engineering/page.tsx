import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/brand/Icon";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Software & Web Applications",
  description:
    "Desenvolvimento de aplicações web, plataformas SaaS, microsserviços, backends de alto throughput e aplicativos móveis pela ByteIQ.",
  alternates: {
    canonical: absoluteUrl("/solutions/software-engineering"),
  },
};

const pillars = [
  {
    label: "Frontend & Platforms",
    title: "Aplicações Web & SaaS",
    desc: "Sistemas web modernos construídos em Next.js e React com renderização no servidor, gerenciamento de estado robusto e isolamento por tenant.",
  },
  {
    label: "Backends & APIs",
    title: "Microsserviços & Filas",
    desc: "Arquiteturas orientadas a eventos, contratos de API estritos (REST/gRPC) e processamento assíncrono com tolerância a falhas.",
  },
  {
    label: "Mobile Systems",
    title: "Aplicativos Móveis",
    desc: "Aplicações iOS e Android com sincronização de dados offline-first, alta taxa de quadros e integração com hardware e sensores.",
  },
];

const deliverables = [
  "Código 100% tipado com TypeScript e tipagem estrita",
  "Arquitetura limpa com separação de responsabilidades",
  "Testes automatizados unitários e de integração com cobertura rigorosa",
  "Documentação viva de APIs via OpenAPI / Swagger",
  "Pipelines de CI/CD automatizados para staging e produção",
  "Instrumentação de observabilidade e tracing distribuído",
];

export default function SoftwareEngineeringSolutionPage() {
  return (
    <div className="pt-48 pb-24 sm:pt-56 sm:pb-32 bg-bg min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-sm text-muted mb-4">
          <Link href="/" className="link-underline hover:text-primary transition-colors">ByteIQ</Link>
          <span>/</span>
          <Link href="/solutions" className="link-underline hover:text-primary transition-colors">Soluções</Link>
          <span>/</span>
          <span className="text-secondary">Software Engineering</span>
        </div>

        <div className="pb-12 border-b border-border">
          <span className="text-overline text-brand-text">Systems &amp; Product Architecture</span>
          <h1 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight text-primary text-balance">
            Software Engineering &amp; Plataformas Web.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-secondary leading-relaxed max-w-2xl">
            Engenharia de software focada em longevidade, modularidade e performance. Projetamos
            backends resilientes, plataformas SaaS multi-tenant e interfaces web ultrarrápidas.
          </p>
        </div>

        <div className="py-14 border-b border-border space-y-8">
          <span className="text-overline text-muted">Áreas de Especialização</span>
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
          <span className="text-overline text-muted">Padrões de Qualidade &amp; Entregáveis</span>
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
              Pronto para construir seu produto ou plataforma digital?
            </h2>
            <p className="text-sm text-secondary">
              Discuta os requisitos técnicos e escopo com a equipe de engenharia da ByteIQ.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center h-11 px-6 bg-brand text-white font-medium text-sm rounded-md transition-all duration-200 ease-out hover:bg-brand-hover hover:-translate-y-0.5 active:translate-y-0 motion-reduce:hover:translate-y-0 shrink-0"
          >
            Iniciar Projeto de Software
          </Link>
        </div>
      </div>
    </div>
  );
}

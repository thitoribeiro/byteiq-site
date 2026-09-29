import React from "react";
import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";
import { OG_IMAGE } from "@/app/layout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { CTABanner } from "@/components/layout/CTABanner";

const TITLE = "Software & Web Applications";
const DESCRIPTION =
  "Desenvolvimento de aplicações web, plataformas SaaS, microsserviços, backends de alto throughput e aplicativos móveis pela ByteIQ.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: absoluteUrl("/solutions/software-engineering"),
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: absoluteUrl("/solutions/software-engineering"),
    images: [OG_IMAGE],
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
        <Breadcrumb
          items={[{ label: "ByteIQ", href: "/" }, { label: "Soluções", href: "/solutions" }, { label: "Software Engineering" }]}
          className="mb-4"
        />

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
          title="Pronto para construir seu produto ou plataforma digital?"
          subtitle="Discuta os requisitos técnicos e escopo com a equipe de engenharia da ByteIQ."
          ctaLabel="Iniciar Projeto de Software"
          ctaHref="/contact"
          titleAs="h2"
          className="mt-8"
        />
      </div>
    </div>
  );
}

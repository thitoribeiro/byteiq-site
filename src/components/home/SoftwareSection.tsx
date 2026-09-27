import React from "react";
import Link from "next/link";
import { Icon } from "@/components/brand/Icon";
import { Reveal } from "@/components/motion/Reveal";

const stackLayers = [
  { name: "Interface", spec: "Next.js, React e React Native — acessibilidade WCAG 2.2 AA e renderização no servidor." },
  { name: "Aplicação", spec: "Lógica de domínio tipada, isolamento multi-tenant e controle de permissões (RBAC)." },
  { name: "API", spec: "REST, gRPC e webhooks com contratos OpenAPI versionados." },
  { name: "Dados", spec: "PostgreSQL, Redis e bancos vetoriais — transações ACID e particionamento." },
  { name: "Cloud", spec: "AWS, GCP, Docker e Terraform — ambientes de infraestrutura reprodutíveis." },
];

const productAreas = [
  {
    title: "Web Applications & Plataformas",
    desc: "Aplicações web modernas e responsivas, combinando renderização no servidor e gerenciamento de estado previsível.",
  },
  {
    title: "SaaS & Sistemas Multi-Tenant",
    desc: "Plataformas completas com isolamento estrito de dados por cliente, faturamento recorrente e permissões granulares.",
  },
  {
    title: "Backend & APIs",
    desc: "Arquiteturas de microsserviços de alto throughput, processamento assíncrono e resiliência a picos de tráfego.",
  },
  {
    title: "Aplicativos Móveis",
    desc: "Aplicações nativas e multiplataforma para iOS e Android com sincronização offline-first de dados.",
  },
];

export function SoftwareSection() {
  return (
    <section id="software" aria-label="Desenvolvimento de Software e Aplicativos ByteIQ" className="py-24 sm:py-32 bg-bg-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal variant="up" className="max-w-2xl mb-16">
          <span className="text-overline text-brand-text">Software Engineering</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-primary text-balance">
            Produtos digitais, backends e plataformas.
          </h2>
          <p className="mt-6 text-base sm:text-lg text-secondary leading-relaxed">
            Engenharia de software focada em longevidade, modularidade e performance computacional
            previsível.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-6 space-y-8">
            {productAreas.map((area) => (
              <div key={area.title} className="space-y-1.5">
                <h3 className="text-lg font-semibold text-primary">{area.title}</h3>
                <p className="text-sm sm:text-base text-secondary leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>

          {/* Architectural stack — a single composition, not a dashboard. */}
          <div className="lg:col-span-6">
            <div className="text-sm font-medium text-muted mb-4">Hierarquia arquitetural típica</div>
            <div>
              {stackLayers.map((layer, idx) => (
                <div key={layer.name} className="flex items-start gap-4 py-4 border-t border-border first:border-t-0">
                  <span className="text-sm text-brand-text font-medium w-6 shrink-0 pt-0.5">{idx + 1}</span>
                  <div>
                    <div className="text-sm font-semibold text-primary">{layer.name}</div>
                    <div className="mt-0.5 text-sm text-secondary">{layer.spec}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <span className="text-sm text-secondary">
            Código estritamente tipado, modular e pronto para escala corporativa.
          </span>
          <Link
            href="/solutions/software-engineering"
            className="link-underline group inline-flex items-center gap-2 text-sm font-medium text-brand-text hover:text-brand-hover transition-colors"
          >
            <span>Ver Engenharia de Software</span>
            <Icon
              name="arrow-right"
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:group-hover:translate-x-0"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

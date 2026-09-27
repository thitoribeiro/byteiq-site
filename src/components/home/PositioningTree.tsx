"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/brand/Icon";
import type { IconName } from "@/components/brand/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

interface Capability {
  id: string;
  name: string;
  icon: IconName;
  description: string;
  href: string;
}

const capabilities: Capability[] = [
  {
    id: "ai-engineering",
    name: "AI Engineering",
    icon: "ai-spark",
    description:
      "Agentes autônomos, sistemas multiagentes, pipelines RAG híbridos e orquestração determinística de LLMs integrados a regras de negócio.",
    href: "/solutions/ai-agents",
  },
  {
    id: "software-engineering",
    name: "Software Engineering",
    icon: "code",
    description:
      "Aplicações web complexas, plataformas SaaS multi-tenant, microsserviços de alto throughput e arquiteturas de backend resilientes.",
    href: "/solutions/software-engineering",
  },
  {
    id: "app-development",
    name: "App Development",
    icon: "app-window",
    description:
      "Aplicativos móveis e multiplataforma com sincronização offline-first, integrados à mesma camada de API e dados do produto principal.",
    href: "/solutions/software-engineering",
  },
  {
    id: "automation",
    name: "Automation",
    icon: "workflow",
    description:
      "Automação de processos operacionais críticos, integrando ferramentas heterogêneas, mensageria e fluxos assíncronos orientados a eventos.",
    href: "/solutions/automation",
  },
  {
    id: "data-cloud",
    name: "Data & Cloud",
    icon: "cloud",
    description:
      "Infraestrutura segura em nuvem, pipelines de ingestão de dados, conteinerização e políticas de governança e segurança.",
    href: "/solutions/technology-consulting",
  },
  {
    id: "quality-engineering",
    name: "Quality Engineering",
    icon: "shield",
    description:
      "Suítes de testes automatizados, telemetria em tempo real, tracing distribuído e validação contínua de modelos de IA.",
    href: "/solutions/quality-engineering",
  },
];

export function PositioningTree() {
  const [openId, setOpenId] = useState<string>("ai-engineering");

  return (
    <section id="positioning" aria-label="Posicionamento e Capacidades ByteIQ" className="py-24 sm:py-32 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal variant="up" className="max-w-2xl mb-16 sm:mb-20">
          <span className="text-overline text-muted">Posicionamento</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-primary text-balance">
            Tecnologia construída em torno de problemas reais de negócio.
          </h2>
          <p className="mt-6 text-base sm:text-lg text-secondary leading-relaxed">
            A ByteIQ conecta IA, software, automação, dados e nuvem em um mesmo sistema de engenharia —
            para transformar demandas operacionais complexas em produtos digitais estáveis.
          </p>
        </Reveal>

        <Reveal variant="up" delay={100} className="border-t border-border">
          {capabilities.map((cap, index) => {
            const isOpen = openId === cap.id;
            return (
              <div key={cap.id} className="border-b border-border">
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? "" : cap.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center gap-5 py-6 sm:py-7 text-left group"
                >
                  <span className="text-sm text-muted w-6 shrink-0">0{index + 1}</span>
                  <Icon
                    name={cap.icon}
                    size={20}
                    className={cn("shrink-0 transition-colors", isOpen ? "text-brand" : "text-muted")}
                  />
                  <span
                    className={cn(
                      "flex-1 text-xl sm:text-2xl font-medium tracking-tight transition-colors",
                      isOpen ? "text-primary" : "text-secondary group-hover:text-primary"
                    )}
                  >
                    {cap.name}
                  </span>
                  <Icon
                    name="chevron-down"
                    size={18}
                    className={cn("shrink-0 text-muted transition-transform duration-200", isOpen && "rotate-180")}
                  />
                </button>

                {isOpen && (
                  <div className="pb-7 pl-11 sm:pl-[68px] pr-8 -mt-2 max-w-2xl">
                    <p className="text-sm sm:text-base text-secondary leading-relaxed">{cap.description}</p>
                    <Link
                      href={cap.href}
                      className="link-underline group mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-text hover:text-brand-hover transition-colors"
                    >
                      <span>Ver detalhes</span>
                      <Icon
                        name="arrow-right"
                        size={14}
                        className="transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:group-hover:translate-x-0"
                      />
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}

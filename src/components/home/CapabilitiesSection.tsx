"use client";

import React, { useState } from "react";
import { Icon } from "@/components/brand/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

interface Capability {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  accent: "brand" | "ai";
}

const capabilities: Capability[] = [
  {
    id: "digital-products",
    number: "01",
    title: "Produtos Digitais",
    description:
      "Plataformas SaaS, aplicações web e sistemas de negócio desenhados em torno de necessidades operacionais reais.",
    tags: ["Web", "Mobile", "Multi-tenant"],
    accent: "brand",
  },
  {
    id: "intelligent-systems",
    number: "02",
    title: "Sistemas Inteligentes",
    description:
      "Fluxos de trabalho com IA, agentes autônomos e automação orientada a decisão — onde inteligência artificial gera valor operacional mensurável, não onde é usada por si só.",
    tags: ["Agentes", "RAG", "Automação de Decisão"],
    accent: "ai",
  },
  {
    id: "software-engineering",
    number: "03",
    title: "Engenharia de Software",
    description:
      "Arquiteturas escaláveis, APIs, integrações e infraestrutura em nuvem para sistemas que operam em produção, não apenas em demonstração.",
    tags: ["APIs", "Cloud", "Dados"],
    accent: "brand",
  },
  {
    id: "product-engineering",
    number: "04",
    title: "Engenharia de Produto",
    description:
      "Da concepção e validação ao desenvolvimento, lançamento e evolução contínua do produto.",
    tags: ["Descoberta", "Build", "Evolução"],
    accent: "brand",
  },
];

export function CapabilitiesSection() {
  const [openId, setOpenId] = useState<string>("digital-products");

  return (
    <section id="capabilities" aria-label="O que a ByteIQ constrói" className="py-24 sm:py-32 bg-bg-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal variant="up" className="max-w-2xl mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-primary text-balance">
            O que construímos
          </h2>
        </Reveal>

        <div className="border-t border-border">
          {capabilities.map((cap, index) => {
            const isOpen = openId === cap.id;
            return (
              <Reveal
                key={cap.id}
                variant="up"
                delay={index * 100}
                className="border-b border-border py-10 sm:py-12"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-10">
                  <div className="lg:col-span-1">
                    <span
                      className={cn(
                        "text-2xl font-semibold tracking-tight",
                        cap.accent === "ai" ? "text-ai-text" : "text-brand-text"
                      )}
                    >
                      {cap.number}
                    </span>
                  </div>

                  <div className="lg:col-span-4">
                    <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-primary">
                      {cap.title}
                    </h3>
                  </div>

                  <div className="lg:col-span-7">
                    <p className="text-base sm:text-lg text-secondary leading-relaxed max-w-2xl">
                      {cap.description}
                    </p>

                    <button
                      type="button"
                      onClick={() => setOpenId(isOpen ? "" : cap.id)}
                      aria-expanded={isOpen}
                      className="lg:hidden mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-primary transition-colors"
                    >
                      <span>Detalhes técnicos</span>
                      <Icon
                        name="chevron-down"
                        size={14}
                        className={cn("transition-transform duration-200", isOpen && "rotate-180")}
                      />
                    </button>

                    <div
                      className={cn(
                        "mt-4 flex-wrap items-center gap-x-2 gap-y-1.5 text-sm text-muted",
                        isOpen ? "flex" : "hidden",
                        "lg:flex"
                      )}
                    >
                      {cap.tags.map((tag, tagIndex) => (
                        <React.Fragment key={tag}>
                          {tagIndex > 0 && <span aria-hidden="true">·</span>}
                          <span>{tag}</span>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Link from "next/link";
import { Icon } from "@/components/brand/Icon";
import { Reveal } from "@/components/motion/Reveal";

const techTaxonomy = [
  {
    category: "AI",
    items: ["LangChain / LangGraph", "OpenAI / Claude / Gemini", "Pinecone / pgvector", "LlamaIndex", "Ollama / vLLM"],
  },
  {
    category: "Software",
    items: ["Node.js / TypeScript", "Python / FastAPI", "Go", "Next.js / React", "React Native / Flutter"],
  },
  {
    category: "Data & Cloud",
    items: ["PostgreSQL", "Redis", "AWS / GCP", "Docker & Kubernetes", "Terraform"],
  },
  {
    category: "Quality",
    items: ["Playwright & Jest", "OpenTelemetry", "Prometheus & Grafana", "GitHub Actions"],
  },
];

export function TechnologiesSection() {
  return (
    <section id="technologies" aria-label="Stack de Tecnologias ByteIQ" className="py-24 sm:py-32 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal variant="up" className="max-w-2xl mb-16">
          <span className="text-overline text-muted">Stack &amp; Tecnologias</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-primary text-balance">
            Tecnologias de produção.
          </h2>
          <p className="mt-6 text-base sm:text-lg text-secondary leading-relaxed">
            Componentes selecionados por estabilidade operacional, maturidade em produção e eficiência
            computacional.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {techTaxonomy.map((group, idx) => (
            <Reveal key={group.category} variant="up-sm" delay={80 + idx * 60}>
              <div className="text-sm font-semibold text-primary pb-3 border-b border-border mb-4">
                {group.category}
              </div>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-secondary">{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <span className="text-sm text-secondary">
            Arquiteturas adaptadas ao ecossistema existente da sua empresa.
          </span>
          <Link
            href="/technologies"
            className="link-underline group inline-flex items-center gap-2 text-sm font-medium text-brand-text hover:text-brand-hover transition-colors"
          >
            <span>Ver Matriz Tecnológica Completa</span>
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

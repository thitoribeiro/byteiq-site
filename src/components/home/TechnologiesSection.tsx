import React from "react";
import Link from "next/link";
import { Icon } from "@/components/brand/Icon";
import { Reveal } from "@/components/motion/Reveal";

const techDomains = [
  {
    category: "AI",
    items: ["LangChain / LangGraph", "OpenAI / Claude / Gemini", "Pinecone / pgvector", "LlamaIndex", "Ollama / vLLM"],
    accent: "border-ai-border",
  },
  {
    category: "Software",
    items: ["Node.js / TypeScript", "Python / FastAPI", "Go", "Next.js / React", "React Native / Flutter"],
    accent: "border-border-strong",
  },
  {
    category: "Data & Cloud",
    items: ["PostgreSQL", "Redis", "AWS / GCP", "Docker & Kubernetes", "Terraform"],
    accent: "border-data",
  },
] as const;

const qualityItems = ["Playwright & Jest", "OpenTelemetry", "Prometheus & Grafana", "GitHub Actions"];

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
            Tecnologia é credibilidade, não decoração — cada componente é escolhido por maturidade em
            produção, não por tendência.
          </p>
        </Reveal>

        <div className="relative">
          {/* Official ByteIQ "data flow" pattern, used here at real visual
              weight to represent interconnection between domains — not a
              dependency-order diagram. */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-40 opacity-[0.14] pointer-events-none"
            style={{
              backgroundImage: "url(/brand/data-flow-light.svg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-8">
            {techDomains.map((group, idx) => (
              <Reveal key={group.category} variant="left" delay={80 + idx * 80}>
                <div className={`pl-5 border-l-2 ${group.accent}`}>
                  <div className="text-sm font-semibold text-primary pb-3 border-b border-border mb-4">
                    {group.category}
                  </div>
                  <ul className="space-y-2.5">
                    {group.items.map((item) => (
                      <li key={item} className="text-sm text-secondary">{item}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal variant="up-sm" delay={320}>
          <p className="mt-8 text-sm text-muted max-w-2xl">
            Como organizamos nosso stack em projetos reais — não um padrão universal, mas o conjunto
            que sustenta a maior parte do nosso trabalho.
          </p>
        </Reveal>

        <Reveal variant="up-sm" delay={380} className="mt-14">
          <div className="pt-6 border-t-2 border-dashed border-brand text-center">
            <span className="text-sm font-semibold text-brand-text">
              Qualidade &amp; Observabilidade — em todas as camadas
            </span>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-x-2 gap-y-1.5 text-sm text-muted">
              {qualityItems.map((item, i) => (
                <React.Fragment key={item}>
                  {i > 0 && <span aria-hidden="true">·</span>}
                  <span>{item}</span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </Reveal>

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

import React from "react";
import Link from "next/link";
import { Icon } from "@/components/brand/Icon";
import { Reveal } from "@/components/motion/Reveal";

const processPhases = [
  { phase: "01", name: "Discover", desc: "Mapeamento de requisitos de negócio, dependências técnicas e critérios de sucesso mensuráveis." },
  { phase: "02", name: "Architect", desc: "Definição de topologia em nuvem, contratos de API, esquemas de dados e arquitetura de agentes." },
  { phase: "03", name: "Build", desc: "Construção iterativa com código tipado, revisões por pares e integração contínua." },
  { phase: "04", name: "Validate", desc: "Testes de unidade, integração e carga, auditorias de segurança e benchmarks de IA." },
  { phase: "05", name: "Evolve", desc: "Deploy com telemetria contínua, monitoramento de latência e iteração orientada a dados." },
];

export function ProcessSection() {
  return (
    <section id="process" aria-label="Metodologia de Engenharia ByteIQ" className="py-24 sm:py-32 bg-bg-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal variant="up" className="max-w-2xl mb-16">
          <span className="text-overline text-muted">Metodologia</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-primary text-balance">
            Engenharia em 5 fases.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-8 sm:gap-6">
          {processPhases.map((phase, idx) => (
            <Reveal
              key={phase.phase}
              variant="up"
              delay={idx * 80}
              className="relative pt-6 border-t-2 border-brand"
            >
              <div className="text-sm text-muted mb-2">{phase.phase}</div>
              <div className="text-lg font-semibold text-primary tracking-tight">{phase.name}</div>
              <p className="mt-2 text-sm text-secondary leading-relaxed">{phase.desc}</p>
              {idx < processPhases.length - 1 && (
                <Icon
                  name="arrow-right"
                  size={14}
                  className="hidden sm:block absolute -right-4 top-[-9px] text-border-strong"
                />
              )}
            </Reveal>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <span className="text-sm text-secondary">
            Governança transparente com entregáveis claros em cada sprint.
          </span>
          <Link
            href="/process"
            className="link-underline group inline-flex items-center gap-2 text-sm font-medium text-brand-text hover:text-brand-hover transition-colors"
          >
            <span>Conhecer Metodologia Detalhada</span>
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

import React from "react";
import { Reveal } from "@/components/motion/Reveal";

const principles = [
  { num: "01", title: "Architecture", desc: "Sistemas com fronteiras bem definidas, desacoplamento de camadas e responsabilidade única." },
  { num: "02", title: "Scalability", desc: "Software e infraestrutura concebidos para suportar aumento de demanda preservando latência previsível." },
  { num: "03", title: "Security", desc: "Princípios de Zero Trust, isolamento de privilégios e criptografia em repouso e em trânsito." },
  { num: "04", title: "Quality", desc: "Testes automatizados unitários, de integração e ponta a ponta em cada pipeline de build e deploy." },
  { num: "05", title: "Performance", desc: "Otimização de queries, estratégias de cache e redução de sobrecarga de rede." },
  { num: "06", title: "Automation", desc: "Infraestrutura como código e esteiras de entrega contínua sem intervenção manual." },
  { num: "07", title: "Observability", desc: "Logs estruturados, métricas distribuídas e tracing de execuções com OpenTelemetry." },
  { num: "08", title: "Reliability", desc: "Circuit breakers, filas com backoff exponencial e recuperação automática de falhas." },
];

export function EngineeringPrinciplesSection() {
  return (
    <section id="principles" aria-label="Princípios de Engenharia ByteIQ" className="py-24 sm:py-32 bg-bg-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal variant="up-sm" className="max-w-2xl mb-16">
          <span className="text-overline text-muted">Princípios de Engenharia</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-primary text-balance">
            Critérios que não negociamos.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-border">
          {principles.map((item) => (
            <div key={item.num} className="border-r border-b border-border p-6 sm:p-8 hover:bg-bg transition-colors">
              <div className="flex items-baseline gap-3">
                <span className="text-sm text-muted">{item.num}</span>
                <h3 className="text-lg sm:text-xl font-semibold text-primary tracking-tight">{item.title}</h3>
              </div>
              <p className="mt-3 text-sm text-secondary leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

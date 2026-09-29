import React from "react";
import { Reveal } from "@/components/motion/Reveal";

const principles = [
  {
    num: "01",
    title: "Negócio antes de tecnologia",
    desc: "Tecnologia é meio, não objetivo. Toda decisão técnica parte de um problema de negócio real.",
  },
  {
    num: "02",
    title: "Sistemas, não funcionalidades",
    desc: "Desenhamos para o ecossistema inteiro, não para telas isoladas.",
  },
  {
    num: "03",
    title: "Engenharia com intenção",
    desc: "Decisões de arquitetura existem para sustentar resultados de negócio, não para demonstrar sofisticação técnica.",
  },
  {
    num: "04",
    title: "Construído para evoluir",
    desc: "Produtos são desenhados para se adaptar — a requisitos, escala e mudanças que ainda não aconteceram.",
  },
];

export function EngineeringPrinciplesSection() {
  return (
    <section id="how-we-think" aria-label="Como a ByteIQ pensa" className="py-24 sm:py-32 bg-bg-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal variant="up-sm" className="max-w-2xl mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-primary text-balance">
            Como pensamos
          </h2>
        </Reveal>

        <div className="max-w-3xl">
          {principles.map((item, index) => (
            <Reveal key={item.num} variant="up-sm" delay={index * 80} className="pt-8 pb-8 border-t border-border">
              <div className="sm:flex sm:items-baseline sm:gap-8">
                <span className="text-sm text-muted shrink-0">{item.num}</span>
                <div className="mt-2 sm:mt-0">
                  <h3 className="text-xl sm:text-2xl font-semibold text-primary tracking-tight">{item.title}</h3>
                  <p className="mt-2 text-base text-secondary leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

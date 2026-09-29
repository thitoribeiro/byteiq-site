import React from "react";
import { Reveal } from "@/components/motion/Reveal";

export function PositioningTree() {
  return (
    <section id="positioning" aria-label="Posicionamento ByteIQ" className="py-24 sm:py-32 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <Reveal variant="up" className="lg:col-span-7">
            <span className="text-overline text-muted">Posicionamento</span>
            <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-primary leading-[1.08] text-balance">
              Construímos software em torno da forma como as empresas realmente operam.
            </h2>
          </Reveal>

          <Reveal variant="up" delay={120} className="lg:col-span-5 lg:pt-24">
            <p className="text-lg sm:text-xl text-secondary leading-relaxed max-w-md">
              A ByteIQ combina pensamento de produto, engenharia de software e tecnologias
              inteligentes para transformar desafios operacionais complexos em sistemas digitais
              escaláveis.
            </p>
            <p className="mt-5 text-lg sm:text-xl font-medium text-primary">
              Menos ruído. Mais inteligência.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

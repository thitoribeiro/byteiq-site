import React from "react";
import Link from "next/link";
import { Icon } from "@/components/brand/Icon";
import { Reveal } from "@/components/motion/Reveal";

export function FinalCtaSection() {
  return (
    <section aria-label="Iniciar Projeto com a ByteIQ" className="py-28 sm:py-40 bg-bg">
      <Reveal variant="up" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-overline text-muted">Iniciar Projeto</span>

        <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-primary leading-[1.08] text-balance">
          Vamos construir o que vem a seguir.
        </h2>

        <p className="mt-6 text-lg sm:text-xl text-secondary max-w-2xl mx-auto leading-relaxed">
          Da arquitetura de agentes autônomos à engenharia de plataformas corporativas de alta
          disponibilidade. Converse diretamente com nossos engenheiros.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 h-12 px-7 bg-brand text-white font-medium text-base rounded-md transition-all duration-200 ease-out hover:bg-brand-hover hover:-translate-y-0.5 active:translate-y-0 motion-reduce:hover:translate-y-0"
          >
            <span>Iniciar um Projeto</span>
            <Icon
              name="arrow-right"
              size={18}
              className="transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:group-hover:translate-x-0"
            />
          </Link>

          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 h-12 px-7 text-primary border border-border-strong font-medium text-base rounded-md transition-all duration-200 ease-out hover:bg-bg-subtle hover:-translate-y-0.5 active:translate-y-0 motion-reduce:hover:translate-y-0"
          >
            <span>Conhecer Todas as Soluções</span>
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

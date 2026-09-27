import React from "react";
import Link from "next/link";
import { Icon } from "@/components/brand/Icon";
import { HeroSymbol } from "@/components/home/HeroSymbol";

export function Hero() {
  return (
    <section
      aria-label="Apresentação ByteIQ"
      className="relative overflow-hidden pt-44 pb-24 sm:pt-52 sm:pb-32"
    >
      {/* Faint architectural construction lines — official brand pattern, restrained to a background texture. */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.05]"
        style={{
          backgroundImage: "url(/brand/blueprint-light.svg)",
          backgroundSize: "1400px",
          backgroundPosition: "top right",
          backgroundRepeat: "no-repeat",
        }}
        aria-hidden="true"
      />

      {/*
        Brand symbol — the Hero's architectural anchor on desktop, a quiet
        background presence below lg where there's no room beside the text
        without crowding it (an intentional mobile composition, not a
        proportional shrink of the desktop one).
      */}
      <div
        className="absolute -z-10 pointer-events-none top-0 -right-16 w-[300px] opacity-[0.1]
          sm:-right-14 sm:w-[360px] sm:opacity-[0.12]
          md:top-[8%] md:-right-10 md:w-[420px] md:opacity-[0.18]
          lg:top-1/2 lg:-translate-y-1/2 lg:right-[2%] lg:w-[460px] lg:opacity-100
          xl:right-[4%] xl:w-[560px]"
        aria-hidden="true"
      >
        <HeroSymbol />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="hero-reveal block text-overline text-muted">ByteIQ Tecnologia</span>

          <h1
            className="hero-reveal mt-5 text-[2.75rem] leading-[1.05] sm:text-6xl sm:leading-[1.05] lg:text-7xl lg:leading-[1.03] font-bold tracking-tight text-primary text-balance"
            style={{ animationDelay: "80ms" }}
          >
            AI Engineering{" "}
            <span className="text-brand">&amp; Software Development.</span>
          </h1>

          <p
            className="hero-reveal mt-8 text-lg sm:text-xl text-secondary max-w-xl leading-relaxed"
            style={{ animationDelay: "160ms" }}
          >
            Projetamos e construímos software inteligente, sistemas de automação e plataformas
            digitais de alta confiabilidade para empresas com demandas técnicas complexas.
          </p>

          <div
            className="hero-reveal mt-10 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "240ms" }}
          >
            <Link
              href="/contact"
              className="hero-cta group inline-flex items-center gap-2 h-12 px-6 bg-brand text-white text-sm font-medium rounded-md transition-all duration-200 hover:bg-brand-hover hover:-translate-y-0.5"
            >
              <span>Iniciar um Projeto</span>
              <Icon name="arrow-right" size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>

            <Link
              href="/portfolio"
              className="hero-cta inline-flex items-center gap-2 h-12 px-6 bg-surface border border-border-strong text-primary text-sm font-medium rounded-md transition-all duration-200 hover:bg-bg-subtle hover:-translate-y-0.5"
            >
              <span>Explorar Nosso Trabalho</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

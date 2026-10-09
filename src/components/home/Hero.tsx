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
      {/* Official ByteIQ structural grid pattern — anchored bottom-left to
          balance the symbol's bled-right weight below. */}
      <div
        className="hero-structure-fade hidden lg:block absolute inset-x-0 bottom-0 -z-10 h-[65%] opacity-[0.08]"
        style={{
          backgroundImage: "url(/brand/grid-modules-light.svg)",
          backgroundSize: "900px",
          backgroundPosition: "bottom left",
          backgroundRepeat: "no-repeat",
        }}
        aria-hidden="true"
      />

      {/* Faint architectural construction lines — official brand pattern, kept as a smaller secondary accent. */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage: "url(/brand/blueprint-light.svg)",
          backgroundSize: "1400px",
          backgroundPosition: "top right",
          backgroundRepeat: "no-repeat",
        }}
        aria-hidden="true"
      />

      {/*
        Brand symbol — same asset, same scroll-driven rotateY (HeroSymbol.tsx,
        untouched); only this container's size/position changed, from a
        polite mid-right float to a deliberate edge-bleed anchor (desktop) —
        an editorial-bleed composition, not a redesign of the mark itself.
        Below lg it stays the existing quiet background watermark.
      */}
      <div
        className="absolute -z-10 pointer-events-none top-40 -right-16 w-[300px] opacity-[0.1]
          sm:-right-14 sm:w-[360px] sm:opacity-[0.12]
          md:-right-10 md:w-[420px] md:opacity-[0.18]
          lg:top-[calc(50%+4rem)] lg:-translate-y-1/2 lg:right-0 lg:w-[560px] lg:opacity-100
          xl:-right-[4%] xl:w-[680px]"
        aria-hidden="true"
      >
        <HeroSymbol />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Vertical margin rule — the one explicitly structural addition: a
            drafting-sheet trim mark at the editorial column boundary, not a
            diagram. */}
        <div
          aria-hidden="true"
          className="hero-structure-fade hidden xl:block absolute inset-y-0 left-[60%] w-px bg-border-strong"
        />
        <span
          aria-hidden="true"
          className="hero-structure-fade hidden xl:block absolute bottom-0 right-[42%] text-right text-overline text-muted"
        >
          FIG. B—01
        </span>

        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="max-w-3xl lg:max-w-none lg:col-span-7">
            <span className="hero-reveal block text-overline text-muted">
              ByteIQ — Estúdio de Tecnologia &amp; Engenharia de Software
            </span>

            <h1
              className="hero-reveal mt-5 text-[2.75rem] leading-[1.05] sm:text-6xl sm:leading-[1.05] lg:text-7xl lg:leading-[1.03] font-bold tracking-tight text-primary text-balance"
              style={{ animationDelay: "80ms" }}
            >
              <span className="lg:block">Tecnologia, projetada</span>{" "}
              <span className="text-brand lg:block">com intenção e inteligência.</span>
            </h1>

            <p
              className="hero-reveal mt-8 text-lg sm:text-xl text-secondary max-w-xl leading-relaxed"
              style={{ animationDelay: "160ms" }}
            >
              Combinamos estratégia, produto e engenharia de software para transformar problemas de
              negócio complexos em sistemas digitais que funcionam — e continuam funcionando.
            </p>

            <div
              className="hero-reveal mt-10 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "240ms" }}
            >
              <Link
                href="/contact"
                className="hero-cta group inline-flex items-center gap-2 h-12 px-6 bg-brand text-white text-sm font-medium rounded-md transition-all duration-200 hover:bg-brand-hover hover:-translate-y-0.5"
              >
                <span>Iniciar uma Conversa</span>
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
      </div>
    </section>
  );
}

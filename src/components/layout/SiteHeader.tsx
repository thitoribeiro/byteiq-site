"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ByteIQLogo } from "@/components/brand/ByteIQLogo";
import { Icon } from "@/components/brand/Icon";
import type { IconName } from "@/components/brand/Icon";
import { cn } from "@/lib/utils";

const solutions: { title: string; description: string; href: string; icon: IconName }[] = [
  {
    title: "AI Agents & Autonomous Systems",
    description: "Sistemas multiagentes, automação determinística e pipelines RAG híbridos.",
    href: "/solutions/ai-agents",
    icon: "ai-spark",
  },
  {
    title: "Software Engineering",
    description: "Aplicações web escaláveis, sistemas SaaS e backends de alta performance.",
    href: "/solutions/software-engineering",
    icon: "code",
  },
  {
    title: "Intelligent Automation",
    description: "Orquestração de processos de ponta a ponta e integração avançada de APIs.",
    href: "/solutions/automation",
    icon: "workflow",
  },
  {
    title: "Quality Engineering",
    description: "Testes automatizados, observabilidade contínua e validação de LLMs.",
    href: "/solutions/quality-engineering",
    icon: "shield",
  },
  {
    title: "Technology Consulting",
    description: "Arquitetura estratégica de sistemas, diagnóstico e viabilidade técnica.",
    href: "/solutions/technology-consulting",
    icon: "target",
  },
];

const navLinks = [
  { href: "/technologies", label: "Tecnologias" },
  { href: "/portfolio", label: "Portfólio" },
  { href: "/process", label: "Processo" },
  { href: "/about", label: "Sobre" },
];

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenus = useCallback(() => {
    setMobileMenuOpen(false);
    setSolutionsOpen(false);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-bg/95 backdrop-blur-sm transition-shadow duration-200",
        isScrolled ? "shadow-[0_1px_0_0_var(--color-border)]" : "border-b border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28 sm:h-32">
          <ByteIQLogo imgClassName="h-14 sm:h-20" />

          <nav className="hidden md:flex items-center gap-1" aria-label="Navegação Principal">
            <div
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button
                type="button"
                onClick={() => setSolutionsOpen((v) => !v)}
                aria-expanded={solutionsOpen}
                className={cn(
                  "link-underline flex items-center gap-1 px-3 py-2 text-sm rounded-sm transition-colors active:scale-95",
                  pathname.startsWith("/solutions")
                    ? "text-primary font-medium"
                    : "text-secondary hover:text-primary"
                )}
              >
                <span>Soluções</span>
                <Icon
                  name="chevron-down"
                  size={14}
                  className={cn("opacity-60 transition-transform duration-200", solutionsOpen && "rotate-180")}
                />
              </button>

              {solutionsOpen && (
                <div className="absolute top-full left-0 pt-2 w-[380px]">
                  <div className="p-2 bg-surface border border-border rounded-lg shadow-e3">
                    <div className="px-3 py-2 flex items-center justify-between">
                      <span className="text-overline text-muted">Soluções de Engenharia</span>
                      <Link
                        href="/solutions"
                        onClick={closeMenus}
                        className="link-underline group text-xs font-medium text-brand-text hover:text-brand-hover flex items-center gap-1 transition-colors"
                      >
                        Ver todas
                        <Icon
                          name="arrow-right"
                          size={12}
                          className="transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:group-hover:translate-x-0"
                        />
                      </Link>
                    </div>
                    <div className="space-y-0.5">
                      {solutions.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={closeMenus}
                          className="group flex items-start gap-3 p-2.5 rounded-md hover:bg-bg-subtle transition-colors"
                        >
                          <Icon name={item.icon} size={18} className="text-muted group-hover:text-brand mt-0.5" />
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium text-primary">{item.title}</div>
                            <p className="text-xs text-muted line-clamp-1 mt-0.5">{item.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenus}
                className={cn(
                  "link-underline px-3 py-2 text-sm rounded-sm transition-colors",
                  pathname === link.href ? "text-primary font-medium" : "text-secondary hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              onClick={closeMenus}
              className="hidden sm:inline-flex items-center gap-2 h-10 px-4 text-sm font-medium text-white bg-brand rounded-md transition-all duration-200 ease-out hover:bg-brand-hover hover:-translate-y-0.5 active:translate-y-0 motion-reduce:hover:translate-y-0"
            >
              Iniciar Projeto
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="md:hidden p-2 -mr-2 rounded-sm text-secondary hover:text-primary transition-colors active:scale-95"
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu de navegação"}
            >
              <Icon name={mobileMenuOpen ? "close" : "menu"} size={22} />
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-bg border-t border-border px-4 pt-4 pb-6 space-y-1">
          <div className="pl-3 border-l border-border space-y-2 py-2 mb-1">
            <div className="text-overline text-muted">Soluções</div>
            {solutions.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenus}
                className="flex items-center gap-2.5 py-1 text-sm text-secondary hover:text-primary"
              >
                <Icon name={item.icon} size={16} className="text-muted" />
                <span>{item.title}</span>
              </Link>
            ))}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenus}
              className={cn(
                "block px-1 py-2.5 text-base rounded-sm",
                pathname === link.href ? "text-primary font-medium" : "text-secondary"
              )}
            >
              {link.label}
            </Link>
          ))}

          <div className="pt-3">
            <Link
              href="/contact"
              onClick={closeMenus}
              className="flex items-center justify-center w-full h-11 px-4 font-medium text-sm text-white bg-brand rounded-md"
            >
              Iniciar Projeto
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

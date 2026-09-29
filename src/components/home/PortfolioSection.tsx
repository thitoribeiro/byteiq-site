import React from "react";
import Link from "next/link";
import { Icon } from "@/components/brand/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

const selectedWorks = [
  {
    category: "AI Agents & Knowledge Systems",
    title: "Sistema Autônomo de Diagnóstico Técnico",
    desc: "Rede multiagente com busca vetorial híbrida em documentação técnica complexa e execução determinística de comandos de diagnóstico via APIs.",
    problem: "Alto volume de consultas técnicas operacionais exigindo cruzamento manual de manuais de engenharia e endpoints legados.",
    architecture: "Orquestração em grafos com LangGraph, chunking semântico em banco vetorial e guardrails de citação estrita anti-alucinação.",
    technologies: ["LangGraph", "Claude / OpenAI", "Pinecone", "Python FastAPI", "TypeScript"],
    outcome: "Resolução de chamados técnicos com referência auditável a parágrafos de documentação, sem intervenção manual de busca.",
  },
  {
    category: "SaaS & Cloud Platforms",
    title: "Plataforma SaaS Multi-Tenant de Inteligência Operacional",
    desc: "Plataforma web distribuída para agregação de telemetria em tempo real com isolamento rigoroso de bancos de dados por cliente corporativo.",
    problem: "Necessidade de alta escala analítica com isolamento estrito de esquemas para atender clientes sob regulação de dados.",
    architecture: "Next.js com Server-Side Streaming, particionamento de banco PostgreSQL por tenant e cache distribuído em Redis.",
    technologies: ["Next.js", "PostgreSQL", "Redis", "Docker", "AWS ECS", "Terraform"],
    outcome: "Painéis analíticos com latência previsível e isolamento de dados verificável por tenant.",
  },
  {
    category: "Intelligent Automation",
    title: "Esteira de Ingestão & Processamento de Documentos",
    desc: "Pipeline assíncrono para extração, validação de schema e conciliação de pedidos heterogêneos diretamente com ERP central.",
    problem: "Gargalo no processamento manual de pedidos recebidos em múltiplos formatos (PDFs, e-mails, planilhas).",
    architecture: "Esteira orientada a eventos com filas RabbitMQ, mecanismo de retry automático e validação estrita de JSON Schema.",
    technologies: ["Python", "FastAPI", "RabbitMQ", "PostgreSQL", "Docker"],
    outcome: "Processamento contínuo de pedidos com eliminação de erros manuais de conciliação.",
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" aria-label="Trabalho Selecionado ByteIQ" className="py-24 sm:py-32 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal variant="up" className="max-w-2xl mb-16 sm:mb-20">
          <span className="text-overline text-muted">Trabalho Selecionado</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-primary text-balance">
            O que construímos.
          </h2>
        </Reveal>

        <div className="space-y-20 sm:space-y-28">
          {selectedWorks.map((work, idx) => {
            const reversed = idx % 2 === 1;
            return (
              <Reveal
                key={work.title}
                variant="up"
                delay={idx * 80}
                className="border-t border-border pt-10"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                  <div className={cn("lg:col-span-7", reversed && "lg:order-2")}>
                    <span className="text-sm font-medium text-brand-text">
                      {String(idx + 1).padStart(2, "0")} — {work.category}
                    </span>
                    <h3 className="mt-3 text-3xl sm:text-4xl font-semibold text-primary tracking-tight text-balance">
                      {work.title}
                    </h3>
                    <p className="mt-4 text-base sm:text-lg text-secondary leading-relaxed max-w-xl">
                      {work.desc}
                    </p>
                    <div className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1.5 text-sm text-muted">
                      {work.technologies.map((tech, techIndex) => (
                        <React.Fragment key={tech}>
                          {techIndex > 0 && <span aria-hidden="true">·</span>}
                          <span>{tech}</span>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  <div className={cn("lg:col-span-5 space-y-6", reversed && "lg:order-1")}>
                    <div>
                      <div className="text-sm font-medium text-muted mb-1.5">Desafio</div>
                      <p className="text-sm text-secondary leading-relaxed">{work.problem}</p>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted mb-1.5">Arquitetura</div>
                      <p className="text-sm text-secondary leading-relaxed">{work.architecture}</p>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted mb-1.5">Resultado</div>
                      <p className="text-sm text-secondary leading-relaxed">{work.outcome}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <Link
            href="/portfolio"
            className="link-underline group inline-flex items-center gap-2 text-sm font-medium text-brand-text hover:text-brand-hover transition-colors"
          >
            <span>Ver Catálogo Completo</span>
            <Icon
              name="arrow-right"
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:group-hover:translate-x-0"
            />
          </Link>
          <Link href="/cases" className="link-underline text-sm text-secondary hover:text-primary transition-colors">
            Estudos de caso detalhados →
          </Link>
        </div>
      </div>
    </section>
  );
}

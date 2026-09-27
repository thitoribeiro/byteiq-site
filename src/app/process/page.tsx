import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Metodologia & Processo de Engenharia",
  description:
    "Conheça o ciclo estruturado de 5 fases da ByteIQ: Discover, Architect, Build, Validate e Evolve.",
  alternates: {
    canonical: absoluteUrl("/process"),
  },
};

const fullProcessSteps = [
  {
    phase: "01",
    title: "Discover",
    headline: "Imersão Técnica & Mapeamento de Requisitos",
    objective: "Compreender a fundo os desafios operacionais, regras de negócio, infraestrutura existente e restrições de conformidade.",
    activities: [
      "Entrevistas técnicas com stakeholders e lideranças de engenharia",
      "Mapeamento de fontes de dados, bancos legados e integrações de API",
      "Definição de métricas de sucesso técnicas (latência, acurácia, throughput)",
      "Avaliação de viabilidade de IA e modelagem de riscos",
    ],
    artifacts: "Documento de Visão Técnica · Matriz de Dependências · Escopo Arquitetural",
  },
  {
    phase: "02",
    title: "Architect",
    headline: "Design de Sistema, Esquemas & Contratos de Interface",
    objective: "Desenhar a arquitetura técnica antes de escrever código, garantindo escalabilidade e modularidade.",
    activities: [
      "Desenho de diagramas arquiteturais (C4 Model)",
      "Especificação de contratos de API (OpenAPI / gRPC Protobuf)",
      "Modelagem de esquemas de banco de dados e políticas de particionamento",
      "Arquitetura de grafos de agentes de IA e estratégias de RAG híbrido",
    ],
    artifacts: "Especificação Arquitetural · Contratos de Interfaces · Topologia de Nuvem",
  },
  {
    phase: "03",
    title: "Build",
    headline: "Desenvolvimento Modular & Integração Contínua",
    objective: "Construir software com código estritamente tipado, revisões rigorosas por pares e automação contínua de compilação.",
    activities: [
      "Desenvolvimento iterativo em sprints curtas de 1 a 2 semanas",
      "Pipelines de CI automatizados executando testes em cada Pull Request",
      "Implementação de lógica com tipagem estrita (TypeScript / Python / Go)",
      "Ambientes de Staging automatizados para validação contínua",
    ],
    artifacts: "Código-Fonte Versionado · Testes Unitários · Ambientes de Homologação",
  },
  {
    phase: "04",
    title: "Validate",
    headline: "Garantia de Qualidade, Evals de IA & Testes de Carga",
    objective: "Validar a resiliência do sistema sob estresse e certificar a acurácia de modelos de IA contra alucinações.",
    activities: [
      "Execução de suítes de testes ponta a ponta (E2E) com Playwright",
      "Testes de carga e estresse simulando picos de tráfego",
      "Avaliação determinística de respostas de LLMs com datasets de benchmark",
      "Varreduras estáticas de segurança e auditoria de vulnerabilidades",
    ],
    artifacts: "Relatório de Qualidade · Benchmarks de IA · Certificado de Estabilidade",
  },
  {
    phase: "05",
    title: "Evolve",
    headline: "Deploy em Produção, Observabilidade & Telemetria",
    objective: "Garantir uma operação contínua com monitoramento proativo de latência, custos e comportamento do usuário real.",
    activities: [
      "Deploy progressivo com zero-downtime e failover automático",
      "Instrumentação de observabilidade com OpenTelemetry, Prometheus e Grafana",
      "Configuração de alertas inteligentes para desvios de métricas operacionais",
      "Acompanhamento contínuo e evolução orientada a telemetria",
    ],
    artifacts: "Dashboards de Telemetria · Alertas em Tempo Real · Roadmap de Evolução",
  },
];

export default function ProcessPage() {
  return (
    <div className="pt-48 pb-24 sm:pt-56 sm:pb-32 bg-bg min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-sm text-muted mb-4">
          <Link href="/" className="link-underline hover:text-primary transition-colors">ByteIQ</Link>
          <span>/</span>
          <span className="text-secondary">Processo</span>
        </div>

        <div className="pb-12 border-b border-border mb-16">
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-primary text-balance">
            Metodologia de Engenharia em 5 Fases.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-secondary leading-relaxed max-w-2xl">
            Nosso método de trabalho combina rigor arquitetural com velocidade de entrega, garantindo
            transparência total e previsibilidade em cada etapa.
          </p>
        </div>

        <div className="space-y-16">
          {fullProcessSteps.map((step) => (
            <div key={step.phase} className="border-t border-border pt-8 space-y-5">
              <div className="flex items-baseline gap-4">
                <span className="text-sm text-muted">Fase {step.phase}</span>
                <h2 className="text-xl sm:text-2xl font-semibold text-primary tracking-tight">
                  {step.title} — {step.headline}
                </h2>
              </div>

              <p className="text-sm sm:text-base text-secondary leading-relaxed">
                <strong className="text-primary font-medium">Objetivo:</strong> {step.objective}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-2">
                <div className="md:col-span-7 space-y-2">
                  <div className="text-sm font-medium text-muted">Atividades de Engenharia</div>
                  <ul className="space-y-1.5">
                    {step.activities.map((act) => (
                      <li key={act} className="flex items-start gap-2.5 text-sm text-secondary">
                        <span className="w-1 h-1 rounded-full bg-muted mt-2 shrink-0" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:col-span-5">
                  <div className="text-sm font-medium text-muted mb-1.5">Artefatos Entregues</div>
                  <p className="text-sm text-secondary leading-relaxed">{step.artifacts}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 sm:p-10 rounded-xl bg-bg-subtle flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-semibold text-primary">
              Pronto para iniciar a Fase 01 (Discover) do seu projeto?
            </h3>
            <p className="mt-1 text-sm text-secondary">Converse diretamente com um líder técnico da ByteIQ.</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center h-11 px-6 bg-brand text-white font-medium text-sm rounded-md transition-all duration-200 ease-out hover:bg-brand-hover hover:-translate-y-0.5 active:translate-y-0 motion-reduce:hover:translate-y-0 shrink-0"
          >
            Iniciar Discover
          </Link>
        </div>
      </div>
    </div>
  );
}

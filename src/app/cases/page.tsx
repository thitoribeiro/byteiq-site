import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/brand/Icon";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Estudos de Casos de Engenharia",
  description:
    "Análises de desafios de engenharia, arquiteturas de sistemas implementadas e resultados técnicos alcançados pela ByteIQ.",
  alternates: {
    canonical: absoluteUrl("/cases"),
  },
};

const caseStudies = [
  {
    code: "01",
    tag: "AI & Multi-Agent",
    title: "Orquestração de Agentes para Análise Técnica de Documentos Complexos",
    problem: "Uma operação com centenas de relatórios regulatórios e especificações de engenharia enfrentava lentidão extrema na busca cruzada de normas e cruzamento com ordens de serviço.",
    architecture: "Desenvolvimento de uma rede multiagente com LangGraph: um agente indexador cria embeddings hierárquicos com chunking semântico; um agente validador executa checagens cruzadas de conformidade; e um agente sintetizador gera relatórios determinísticos com citação direta de parágrafos e normas.",
    techStack: ["LangGraph", "Anthropic Claude", "Pinecone", "Python FastAPI", "Docker"],
    results: [
      "Substituição de buscas manuais por recuperação semântica em tempo real",
      "Redução de alucinações através de guardrails de grounding e citação estrita",
      "Rastreamento de custos e latência por consulta com OpenTelemetry",
    ],
  },
  {
    code: "02",
    tag: "SaaS & Cloud Platforms",
    title: "Modernização de Plataforma SaaS para Alta Escala e Isolamento Multi-Tenant",
    problem: "SaaS corporativo em crescimento enfrentava lentidão nas consultas analíticas em horários de pico e necessitava de garantias estritas de isolamento de dados para atender clientes regulados.",
    architecture: "Reestruturação arquitetural adotando Clean Architecture, migração de frontend para Next.js com streaming SSR, particionamento de banco PostgreSQL por tenant e camada de cache em Redis com invalidação orientada a eventos.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "Terraform", "AWS ECS"],
    results: [
      "Isolamento de dados por cliente com segurança em nível de schema",
      "Redução do tempo de renderização de dashboards e relatórios",
      "Infraestrutura provisionada como código com ambientes reprodutíveis",
    ],
  },
  {
    code: "03",
    tag: "Intelligent Automation",
    title: "Esteira de Automação de Pedidos e Conciliação com ERP Legado",
    problem: "Volume elevado de pedidos recebidos via canais heterogêneos exigia digitação manual, gerando erros operacionais de conciliação e atrasos nos despachos.",
    architecture: "Construção de uma esteira assíncrona orientada a eventos: ingestão com validação estrita de JSON Schema, fila de mensageria RabbitMQ com controle de idempotência e conectores resilientes para comunicação com o ERP via webhooks e APIs.",
    techStack: ["Python", "FastAPI", "RabbitMQ", "PostgreSQL", "Docker"],
    results: [
      "Processamento contínuo de pedidos sem intervenção humana",
      "Tolerância a indisponibilidades temporárias do ERP via fila de retry",
      "Auditoria transparente com logs de todas as transações executadas",
    ],
  },
];

export default function CasesPage() {
  return (
    <div className="pt-48 pb-24 sm:pt-56 sm:pb-32 bg-bg min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-sm text-muted mb-4">
          <Link href="/" className="link-underline hover:text-primary transition-colors">ByteIQ</Link>
          <span>/</span>
          <span className="text-secondary">Estudos de Casos</span>
        </div>

        <div className="pb-12 border-b border-border mb-16">
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-primary text-balance">
            Estudos de Casos de Engenharia.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-secondary leading-relaxed max-w-2xl">
            Exemplos representativos de como a ByteIQ analisa desafios operacionais complexos e projeta
            arquiteturas técnicas robustas para resolvê-los.
          </p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((item) => (
            <div key={item.code} className="border-t border-border pt-10">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-sm font-medium text-brand-text">{item.tag}</span>
                <span className="text-sm text-muted">Caso {item.code}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-semibold text-primary tracking-tight mb-6">
                {item.title}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="text-sm font-medium text-muted mb-1.5">Desafio de Engenharia</div>
                  <p className="text-sm text-secondary leading-relaxed">{item.problem}</p>
                </div>
                <div>
                  <div className="text-sm font-medium text-muted mb-1.5">Arquitetura da Solução</div>
                  <p className="text-sm text-secondary leading-relaxed">{item.architecture}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-border">
                <div>
                  <div className="text-sm font-medium text-muted mb-2">Resultados Técnicos</div>
                  <ul className="space-y-1.5">
                    {item.results.map((res) => (
                      <li key={res} className="flex items-start gap-2 text-sm text-secondary">
                        <Icon name="check" size={16} className="text-brand shrink-0 mt-0.5" />
                        <span>{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="text-sm font-medium text-muted mb-2">Stack Aplicada</div>
                  <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-sm text-secondary">
                    {item.techStack.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 sm:p-10 rounded-xl bg-bg-subtle flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-semibold text-primary mb-1">
              Deseja discutir um desafio similar para sua infraestrutura?
            </h3>
            <p className="text-sm text-secondary">
              Nossos arquitetos conduzem uma análise técnica inicial da sua demanda.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center h-11 px-6 bg-brand text-white font-medium text-sm rounded-md transition-all duration-200 ease-out hover:bg-brand-hover hover:-translate-y-0.5 active:translate-y-0 motion-reduce:hover:translate-y-0 shrink-0"
          >
            Iniciar Avaliação Técnica
          </Link>
        </div>
      </div>
    </div>
  );
}

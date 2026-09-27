import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/brand/Icon";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Portfólio de Sistemas & Produtos",
  description:
    "Estrutura e catálogo de sistemas de software, produtos de inteligência artificial, plataformas SaaS e soluções de automação projetadas pela ByteIQ.",
  alternates: {
    canonical: absoluteUrl("/portfolio"),
  },
};

const portfolioProjects = [
  {
    id: "01",
    tag: "AI & Multi-Agent",
    title: "Sistema Autônomo de Diagnóstico Técnico & Suporte",
    scope: "Arquitetura multiagente com tool calling determinístico, busca vetorial em manuais de engenharia e integração a APIs de telemetria.",
    stack: ["LangGraph", "Claude / OpenAI", "Pinecone", "FastAPI", "TypeScript"],
    capabilities: [
      "Processamento de consultas técnicas em linguagem natural",
      "Execução de verificações ativas de status via endpoints de API",
      "Geração de respostas estruturadas com referências a documentações",
      "Auditoria completa com rastreamento de tokens e latência",
    ],
  },
  {
    id: "02",
    tag: "SaaS & Cloud Platforms",
    title: "Plataforma SaaS Multi-Tenant de Inteligência Operacional",
    scope: "Plataforma web distribuída com isolamento estrito de tenants em banco relacional, dashboards de baixa latência e autenticação corporativa.",
    stack: ["Next.js (App Router)", "PostgreSQL", "Tailwind CSS", "Redis", "Docker", "AWS"],
    capabilities: [
      "Isolamento de dados por esquema de banco de dados",
      "Mecanismo de relatórios e exportação assíncrona",
      "Gestão de permissões baseada em papéis (RBAC)",
      "Streaming de dados em tempo real com Server-Sent Events",
    ],
  },
  {
    id: "03",
    tag: "Intelligent Automation",
    title: "Esteira de Ingestão & Processamento de Documentos",
    scope: "Pipeline de automação de ponta a ponta que extrai, valida contratos de dados e conecta entradas heterogêneas a sistemas ERPs centrais.",
    stack: ["Python", "FastAPI", "PostgreSQL", "RabbitMQ", "Tesseract / Vision"],
    capabilities: [
      "Extração multimodal de dados a partir de PDFs e planilhas",
      "Validação determinística de regras tributárias e de negócio",
      "Fila assíncrona com mecanismo de retry e dead-letter queue",
      "Notificações automáticas de divergências para times de auditoria",
    ],
  },
  {
    id: "04",
    tag: "Mobile & Field Operations",
    title: "Aplicativo Móvel Offline-First para Vistorias Técnicas",
    scope: "Aplicativo corporativo para equipes em campo com banco local criptografado e sincronização bidirecional em segundo plano.",
    stack: ["React Native", "TypeScript", "SQLite", "Node.js", "GCP"],
    capabilities: [
      "Operação contínua em locais sem cobertura celular",
      "Armazenamento local criptografado com SQLite",
      "Compressão inteligente de imagens e metadados geográficos",
      "Sincronização delta eficiente ao restabelecer conectividade",
    ],
  },
];

export default function PortfolioPage() {
  return (
    <div className="pt-48 pb-24 sm:pt-56 sm:pb-32 bg-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-sm text-muted mb-4">
          <Link href="/" className="link-underline hover:text-primary transition-colors">ByteIQ</Link>
          <span>/</span>
          <span className="text-secondary">Portfólio</span>
        </div>

        <div className="pb-12 border-b border-border mb-16">
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-primary text-balance">
            O que construímos.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-secondary max-w-2xl leading-relaxed">
            Catálogo estrutural, representativo do tipo de produtos digitais, plataformas distribuídas,
            agentes autônomos e sistemas de automação que a ByteIQ projeta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-14">
          {portfolioProjects.map((proj) => (
            <div key={proj.id} className="border-t border-border pt-8 flex flex-col">
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-sm font-medium text-brand-text">{proj.tag}</span>
                <span className="text-sm text-muted">{proj.id}</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-semibold text-primary tracking-tight mb-3">
                {proj.title}
              </h2>

              <p className="text-sm sm:text-base text-secondary leading-relaxed mb-6">{proj.scope}</p>

              <div className="space-y-2.5 mb-6">
                <div className="text-sm font-medium text-muted">Capacidades do Sistema</div>
                <ul className="space-y-1.5">
                  {proj.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-2 text-sm text-secondary">
                      <span className="w-1 h-1 rounded-full bg-muted mt-2 shrink-0" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-5 border-t border-border">
                <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-sm text-muted">
                  {proj.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 sm:p-10 rounded-xl bg-bg-subtle flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-semibold text-primary mb-1">
              Quer ver como resolvemos desafios de engenharia passo a passo?
            </h3>
            <p className="text-sm text-secondary">
              Acesse a documentação de estudos de casos técnicos da ByteIQ.
            </p>
          </div>
          <Link
            href="/cases"
            className="group inline-flex items-center gap-2 h-11 px-6 bg-brand text-white font-medium text-sm rounded-md transition-all duration-200 ease-out hover:bg-brand-hover hover:-translate-y-0.5 active:translate-y-0 motion-reduce:hover:translate-y-0 shrink-0"
          >
            <span>Ver Estudos de Casos</span>
            <Icon
              name="arrow-right"
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:group-hover:translate-x-0"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

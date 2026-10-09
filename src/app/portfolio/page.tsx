import React from "react";
import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";
import { OG_IMAGE } from "@/app/layout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { CTABanner } from "@/components/layout/CTABanner";
import { cn } from "@/lib/utils";

const romanNumerals = ["I", "II", "III", "IV", "V", "VI"];

const TITLE = "Portfólio de Sistemas & Produtos";
const DESCRIPTION =
  "Estrutura e catálogo de sistemas de software, produtos de inteligência artificial, plataformas SaaS e soluções de automação projetadas pela ByteIQ.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: absoluteUrl("/portfolio"),
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: absoluteUrl("/portfolio"),
    images: [OG_IMAGE],
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "ByteIQ", href: "/" }, { label: "Portfólio" }]} className="mb-4" />

        <div className="pb-12 border-b border-border mb-16">
          <span className="text-overline text-muted">Trabalho Selecionado</span>
          <h1 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight text-primary text-balance">
            O que construímos.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-secondary max-w-2xl leading-relaxed">
            Catálogo estrutural, representativo do tipo de produtos digitais, plataformas distribuídas,
            agentes autônomos e sistemas de automação que a ByteIQ projeta.
          </p>
        </div>

        <div>
          {portfolioProjects.map((proj, idx) => {
            const reversed = idx % 2 === 1;
            return (
              <div key={proj.id} className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 py-12 border-t border-border first:border-t-0">
                <div className="lg:col-span-2">
                  <span className="text-3xl font-semibold tracking-tight text-brand-text">{proj.id}</span>
                </div>

                <div className="lg:col-span-10">
                  <span className="text-sm font-medium text-muted">{proj.tag}</span>
                  <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-primary tracking-tight text-balance">
                    {proj.title}
                  </h2>
                  <p className="mt-4 text-base text-secondary leading-relaxed max-w-2xl">{proj.scope}</p>

                  <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
                    <div className={cn("lg:col-span-7", reversed && "lg:order-2")}>
                      <div className="space-y-3 border-l-2 border-border pl-5">
                        {proj.capabilities.map((cap, capIndex) => (
                          <div key={cap} className="flex items-baseline gap-2.5">
                            <span className="text-xs font-semibold text-brand-text shrink-0" aria-hidden="true">
                              {romanNumerals[capIndex]}
                            </span>
                            <span className="text-sm text-secondary leading-relaxed">{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className={cn("lg:col-span-5", reversed && "lg:order-1")}>
                      <div className="text-sm font-medium text-muted mb-2">Componentes</div>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                        {proj.stack.map((tech) => (
                          <div key={tech} className="flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-brand shrink-0" aria-hidden="true" />
                            <span className="text-sm text-secondary">{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <CTABanner
          title="Quer ver como resolvemos desafios de engenharia passo a passo?"
          subtitle="Acesse a documentação de estudos de casos técnicos da ByteIQ."
          ctaLabel="Ver Estudos de Casos"
          ctaHref="/cases"
          showIcon
        />
      </div>
    </div>
  );
}

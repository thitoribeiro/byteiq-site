import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Stack de Tecnologias & Engenharia",
  description:
    "Matriz tecnológica de produção da ByteIQ: frameworks, linguagens, bancos de dados, infraestrutura em nuvem e orquestração de IA.",
  alternates: {
    canonical: absoluteUrl("/technologies"),
  },
};

const fullTechMatrix = [
  {
    category: "AI & Model Orchestration",
    code: "01",
    description: "Ferramentas para construção de agentes autônomos, pipelines RAG e integração determinística de LLMs.",
    items: [
      { name: "LangChain / LangGraph", spec: "Grafos de estados, orquestração multiagentes e fluxos determinísticos com tool calling." },
      { name: "OpenAI API / Claude / Gemini", spec: "Modelos fundacionais para raciocínio, codificação e análise contextual." },
      { name: "Pinecone / pgvector / Qdrant", spec: "Bancos de dados vetoriais para indexação semântica e busca híbrida." },
      { name: "LlamaIndex", spec: "Estruturas de dados para ingestão, chunking e indexação hierárquica de documentos." },
      { name: "Ollama / vLLM", spec: "Ambientes de inferência privada para modelos open-weight." },
    ],
  },
  {
    category: "Backend & Systems Architecture",
    code: "02",
    description: "Linguagens e runtimes de alta performance para microsserviços, APIs e sistemas orientados a eventos.",
    items: [
      { name: "Node.js / TypeScript", spec: "Ecossistema tipado de ponta a ponta com performance assíncrona." },
      { name: "Python / FastAPI", spec: "APIs assíncronas de alta velocidade para serviços de IA e processamento numérico." },
      { name: "Go (Golang)", spec: "Serviços concorrentes de baixo consumo de memória e ferramentas de infraestrutura." },
      { name: "PostgreSQL", spec: "Banco relacional primário com suporte a transações ACID e particionamento." },
      { name: "Redis & BullMQ", spec: "Cache distribuído, pub/sub e filas de tarefas resilientes." },
    ],
  },
  {
    category: "Frontend, Mobile & Interfaces",
    code: "03",
    description: "Tecnologias modernas para interfaces web responsivas e aplicativos móveis.",
    items: [
      { name: "Next.js (App Router)", spec: "Framework full-stack React com Server Components e streaming SSR." },
      { name: "React 19 / TypeScript", spec: "Interfaces declarativas com controle de estado previsível." },
      { name: "Tailwind CSS", spec: "Design systems baseados em tokens e layouts fluidos." },
      { name: "React Native / Flutter", spec: "Aplicativos móveis nativos com sincronização offline-first." },
    ],
  },
  {
    category: "Cloud, Infrastructure & DevOps",
    code: "04",
    description: "Provisionamento seguro de ambientes em nuvem, conteinerização e entrega contínua.",
    items: [
      { name: "Amazon Web Services (AWS)", spec: "Infraestrutura global com ECS/EKS, Lambda, S3 e RDS." },
      { name: "Google Cloud Platform (GCP)", spec: "Computação escalável, Vertex AI e infraestrutura nativa para dados." },
      { name: "Docker & Kubernetes", spec: "Isolamento de dependências e orquestração de microsserviços." },
      { name: "Terraform", spec: "Infraestrutura como Código para ambientes reprodutíveis e auditáveis." },
      { name: "Cloudflare", spec: "Segurança de borda, proteção DDoS e computação serverless via Workers." },
    ],
  },
  {
    category: "Quality, Observability & Security",
    code: "05",
    description: "Instrumentação para prevenção de regressões, monitoramento de latência e proteção de dados.",
    items: [
      { name: "OpenTelemetry", spec: "Padrão aberto para coleta de traces, métricas e logs distribuídos." },
      { name: "Playwright & Jest", spec: "Testes ponta a ponta, de integração e unitários em CI/CD." },
      { name: "Prometheus & Grafana", spec: "Séries temporais e dashboards de telemetria para SLOs." },
      { name: "GitHub Actions", spec: "Pipelines de CI/CD com linting estrito e quality gates." },
    ],
  },
];

export default function TechnologiesPage() {
  return (
    <div className="pt-48 pb-24 sm:pt-56 sm:pb-32 bg-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-sm text-muted mb-4">
          <Link href="/" className="link-underline hover:text-primary transition-colors">ByteIQ</Link>
          <span>/</span>
          <span className="text-secondary">Tecnologias</span>
        </div>

        <div className="pb-12 border-b border-border mb-16">
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-primary text-balance">
            Stack Tecnológico &amp; Critérios de Engenharia.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-secondary max-w-2xl leading-relaxed">
            Não adotamos tecnologias por modismos temporários. Cada componente da nossa stack é
            selecionado por estabilidade comprovada, maturidade operacional e eficiência computacional.
          </p>
        </div>

        <div className="space-y-16">
          {fullTechMatrix.map((matrix) => (
            <div key={matrix.code} className="border-t border-border pt-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
                <div>
                  <span className="text-sm text-muted">{matrix.code}</span>
                  <h2 className="mt-1 text-xl sm:text-2xl font-semibold text-primary tracking-tight">
                    {matrix.category}
                  </h2>
                </div>
                <p className="text-sm text-secondary max-w-md">{matrix.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5">
                {matrix.items.map((item) => (
                  <div key={item.name} className="space-y-1">
                    <div className="text-sm font-semibold text-primary">{item.name}</div>
                    <p className="text-sm text-secondary leading-relaxed">{item.spec}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 sm:p-10 rounded-xl bg-bg-subtle flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-semibold text-primary">
              Sua empresa possui requisitos específicos de tecnologia ou nuvem?
            </h3>
            <p className="mt-1 text-sm text-secondary">
              Adaptamos nossa arquitetura para integrar-se ao seu ecossistema existente.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center h-11 px-6 bg-brand text-white font-medium text-sm rounded-md transition-all duration-200 ease-out hover:bg-brand-hover hover:-translate-y-0.5 active:translate-y-0 motion-reduce:hover:translate-y-0 shrink-0"
          >
            Conversar sobre Stack
          </Link>
        </div>
      </div>
    </div>
  );
}

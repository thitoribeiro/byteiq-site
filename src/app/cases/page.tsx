import React from "react";
import type { Metadata } from "next";
import { Icon } from "@/components/brand/Icon";
import { absoluteUrl } from "@/lib/site";
import { OG_IMAGE } from "@/app/layout";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { CTABanner } from "@/components/layout/CTABanner";

const TITLE = "Estudos de Casos de Engenharia";
const DESCRIPTION =
  "Análises de desafios de engenharia, arquiteturas de sistemas implementadas e resultados técnicos alcançados pela ByteIQ.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: absoluteUrl("/cases"),
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: absoluteUrl("/cases"),
    images: [OG_IMAGE],
  },
};

const caseStudies = [
  {
    code: "01",
    tag: "AI & Multi-Agent",
    title: "Orquestração de Agentes para Análise Técnica de Documentos Complexos",
    context:
      "Operação técnica que lida com centenas de relatórios regulatórios e especificações de engenharia, onde consultas cruzadas entre normas e ordens de serviço fazem parte da rotina operacional.",
    challenge:
      "Uma operação com centenas de relatórios regulatórios e especificações de engenharia enfrentava lentidão extrema na busca cruzada de normas e cruzamento com ordens de serviço.",
    decisions:
      "Adoção de uma rede multiagente com LangGraph em vez de um pipeline único de busca, com responsabilidades separadas entre indexação, validação e síntese — e citação direta de parágrafos e normas como guardrail obrigatório contra alucinação.",
    solution:
      "Um agente indexador cria embeddings hierárquicos com chunking semântico; um agente validador executa checagens cruzadas de conformidade; e um agente sintetizador gera relatórios determinísticos com citação direta de parágrafos e normas.",
    techStack: ["LangGraph", "Anthropic Claude", "Pinecone", "Python FastAPI", "Docker"],
    results: [
      "Substituição de buscas manuais por recuperação semântica em tempo real",
      "Redução de alucinações através de guardrails de grounding e citação estrita",
      "Rastreamento de custos e latência por consulta com OpenTelemetry",
    ],
    principle:
      "Este trabalho reforça um princípio central da ByteIQ: sistemas de IA exigem arquiteturas determinísticas e guardrails rigorosos — não apenas modelos capazes.",
  },
  {
    code: "02",
    tag: "SaaS & Cloud Platforms",
    title: "Modernização de Plataforma SaaS para Alta Escala e Isolamento Multi-Tenant",
    context:
      "SaaS corporativo em crescimento, atendendo clientes sob regulação de dados que exigem garantias estritas de isolamento entre tenants.",
    challenge:
      "SaaS corporativo em crescimento enfrentava lentidão nas consultas analíticas em horários de pico e necessitava de garantias estritas de isolamento de dados para atender clientes regulados.",
    decisions:
      "Reestruturação arquitetural adotando Clean Architecture como base de separação de responsabilidades, particionamento de banco por tenant como mecanismo de isolamento, e cache com invalidação orientada a eventos em vez de expiração por tempo fixo.",
    solution:
      "Migração de frontend para Next.js com streaming SSR, particionamento de banco PostgreSQL por tenant e camada de cache em Redis com invalidação orientada a eventos.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "Terraform", "AWS ECS"],
    results: [
      "Isolamento de dados por cliente com segurança em nível de schema",
      "Redução do tempo de renderização de dashboards e relatórios",
      "Infraestrutura provisionada como código com ambientes reprodutíveis",
    ],
    principle:
      "Princípio reforçado: sistemas são desenhados para o ecossistema inteiro — dados, cache e infraestrutura como um todo — não para telas isoladas.",
  },
  {
    code: "03",
    tag: "Intelligent Automation",
    title: "Esteira de Automação de Pedidos e Conciliação com ERP Legado",
    context:
      "Operação que recebe pedidos por canais heterogêneos e precisa conciliá-los com um ERP central, historicamente dependente de digitação manual.",
    challenge:
      "Volume elevado de pedidos recebidos via canais heterogêneos exigia digitação manual, gerando erros operacionais de conciliação e atrasos nos despachos.",
    decisions:
      "Arquitetura orientada a eventos em vez de processamento síncrono, com validação estrita de schema na entrada e controle de idempotência para tolerar reprocessamento — decisões guiadas pela necessidade de continuidade operacional, não por preferência técnica.",
    solution:
      "Ingestão com validação estrita de JSON Schema, fila de mensageria RabbitMQ com controle de idempotência e conectores resilientes para comunicação com o ERP via webhooks e APIs.",
    techStack: ["Python", "FastAPI", "RabbitMQ", "PostgreSQL", "Docker"],
    results: [
      "Processamento contínuo de pedidos sem intervenção humana",
      "Tolerância a indisponibilidades temporárias do ERP via fila de retry",
      "Auditoria transparente com logs de todas as transações executadas",
    ],
    principle:
      "Princípio reforçado: decisões de arquitetura existem para sustentar resultados de negócio — continuidade operacional — não para demonstrar sofisticação técnica.",
  },
];

export default function CasesPage() {
  return (
    <div className="pt-48 pb-24 sm:pt-56 sm:pb-32 bg-bg min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "ByteIQ", href: "/" }, { label: "Estudos de Casos" }]} className="mb-4" />

        <div className="pb-12 border-b border-border mb-16">
          <span className="text-overline text-muted">Como Pensamos e Resolvemos</span>
          <h1 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight text-primary text-balance">
            Estudos de Casos de Engenharia.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-secondary leading-relaxed max-w-2xl">
            Exemplos representativos de como a ByteIQ analisa desafios operacionais complexos, decide
            entre alternativas de arquitetura e projeta sistemas técnicos robustos para resolvê-los.
          </p>
        </div>

        <div className="space-y-20">
          {caseStudies.map((item) => (
            <div key={item.code} className="border-t border-border pt-10">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-sm font-medium text-brand-text">{item.tag}</span>
                <span className="text-sm text-muted">Caso {item.code}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-semibold text-primary tracking-tight mb-8">
                {item.title}
              </h2>

              <div className="space-y-8">
                <div>
                  <div className="text-sm font-medium text-muted mb-1.5">01 — Contexto</div>
                  <p className="text-sm sm:text-base text-secondary leading-relaxed max-w-2xl">{item.context}</p>
                </div>
                <div>
                  <div className="text-sm font-medium text-muted mb-1.5">02 — Desafio</div>
                  <p className="text-sm sm:text-base text-secondary leading-relaxed max-w-2xl">{item.challenge}</p>
                </div>
                <div>
                  <div className="text-sm font-medium text-muted mb-1.5">03 — Decisões</div>
                  <p className="text-sm sm:text-base text-secondary leading-relaxed max-w-2xl">{item.decisions}</p>
                </div>
                <div>
                  <div className="text-sm font-medium text-muted mb-1.5">04 — Solução &amp; Engenharia</div>
                  <p className="text-sm sm:text-base text-secondary leading-relaxed max-w-2xl">{item.solution}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1.5 text-sm text-muted">
                    {item.techStack.map((tech, techIndex) => (
                      <React.Fragment key={tech}>
                        {techIndex > 0 && <span aria-hidden="true">·</span>}
                        <span>{tech}</span>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-muted mb-2">05 — Resultado</div>
                  <ul className="space-y-1.5">
                    {item.results.map((res) => (
                      <li key={res} className="flex items-start gap-2 text-sm sm:text-base text-secondary">
                        <Icon name="check" size={16} className="text-brand shrink-0 mt-0.5" />
                        <span>{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6 border-t border-border">
                  <div className="text-sm font-medium text-muted mb-1.5">06 — O que este trabalho reforça</div>
                  <p className="text-sm sm:text-base text-secondary leading-relaxed max-w-2xl">{item.principle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <CTABanner
          title="Deseja discutir um desafio similar para sua infraestrutura?"
          subtitle="Nossos arquitetos conduzem uma análise técnica inicial da sua demanda."
          ctaLabel="Iniciar Avaliação Técnica"
          ctaHref="/contact"
        />
      </div>
    </div>
  );
}

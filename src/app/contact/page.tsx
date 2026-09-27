import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/brand/Icon";
import { absoluteUrl, CONTACT } from "@/lib/site";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Inicie um projeto de engenharia com a ByteIQ. Compartilhe o sistema, software ou desafio de inteligência artificial que sua empresa deseja construir.",
  alternates: {
    canonical: absoluteUrl("/contact"),
  },
};

export default function ContactPage() {
  return (
    <div className="pt-48 pb-24 sm:pt-56 sm:pb-32 bg-bg min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-sm text-muted mb-4">
          <Link href="/" className="hover:text-primary transition-colors">ByteIQ</Link>
          <span>/</span>
          <span className="text-secondary">Contato</span>
        </div>

        <div className="pb-12 mb-16 border-b border-border">
          <span className="text-overline text-muted">Início de Projeto</span>
          <h1 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight text-primary text-balance">
            Iniciar um Projeto de Engenharia.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-secondary max-w-2xl leading-relaxed">
            Compartilhe detalhes sobre o sistema, software ou desafio de inteligência artificial que
            sua empresa deseja construir. Nossa equipe de engenheiros retornará com uma análise técnica
            preliminar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-xl border border-border bg-bg-subtle">
              <ContactForm />
            </div>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-overline text-muted">Avaliação Técnica Direta</span>
              <h3 className="text-lg font-semibold text-primary tracking-tight">
                O que esperar do contato
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                Ao enviar seu briefing, ele é analisado diretamente pela liderança de engenharia da
                ByteIQ para avaliação precisa de escopo e viabilidade.
              </p>

              <div className="space-y-3 pt-3 border-t border-border">
                {[
                  "Retorno técnico em até 24h úteis",
                  "Disponibilidade para assinatura prévia de NDA",
                  "Sessão de diagnóstico e arquitetura sem compromisso",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-secondary">
                    <Icon name="check" size={16} className="text-brand shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-border space-y-1.5 text-sm text-secondary">
              <div className="font-medium text-primary">ByteIQ Tecnologia</div>
              <div>AI Engineering &amp; Software Development</div>
              <div>São Paulo, Brasil — Atendimento Global</div>
              <div>www.byteiq.com.br</div>
              {CONTACT.email && (
                <div>
                  <a href={`mailto:${CONTACT.email}`} className="hover:text-primary transition-colors">
                    {CONTACT.email}
                  </a>
                </div>
              )}
              {CONTACT.phone && <div>{CONTACT.phone}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

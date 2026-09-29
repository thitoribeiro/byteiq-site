import React from "react";
import Link from "next/link";
import { Icon } from "@/components/brand/Icon";
import { CONTACT } from "@/lib/site";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-navy-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-navy-700">
          <div className="lg:col-span-5 space-y-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/logos/logo-completa-footer.svg" alt="ByteIQ" className="h-20 w-auto" />
            <p className="text-sm text-navy-300 leading-relaxed max-w-sm pt-1">
              A ByteIQ projeta e constrói sistemas de software inteligentes, soluções de automação e
              infraestruturas digitais de alta confiabilidade.
            </p>
            <div className="pt-2 text-sm text-navy-400 space-y-1">
              <div>São Paulo, Brasil — Atendimento Global</div>
              <div>www.byteiq.tech</div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <div className="text-sm font-semibold text-white">Capacidades</div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/solutions/ai-agents" className="text-navy-300 hover:text-white transition-colors">
                  AI Agents &amp; Autonomous Systems
                </Link>
              </li>
              <li>
                <Link href="/solutions/software-engineering" className="text-navy-300 hover:text-white transition-colors">
                  Software &amp; Web Applications
                </Link>
              </li>
              <li>
                <Link href="/solutions/automation" className="text-navy-300 hover:text-white transition-colors">
                  Intelligent Automation
                </Link>
              </li>
              <li>
                <Link href="/solutions/quality-engineering" className="text-navy-300 hover:text-white transition-colors">
                  Quality Engineering
                </Link>
              </li>
              <li>
                <Link href="/solutions/technology-consulting" className="text-navy-300 hover:text-white transition-colors">
                  Technology Consulting
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <div className="text-sm font-semibold text-white">Institucional</div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/technologies" className="text-navy-300 hover:text-white transition-colors">
                  Tecnologias
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-navy-300 hover:text-white transition-colors">
                  Trabalho
                </Link>
              </li>
              <li>
                <Link href="/cases" className="text-navy-300 hover:text-white transition-colors">
                  Estudos de Caso
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-navy-300 hover:text-white transition-colors">
                  Abordagem
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-navy-300 hover:text-white transition-colors">
                  Sobre
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <div className="text-sm font-semibold text-white">Contato</div>
            <p className="text-sm text-navy-300 leading-relaxed">
              Avalie seu próximo projeto de engenharia com nossa liderança técnica.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-white hover:text-blue-300 transition-colors pt-1"
            >
              <span>Falar com a ByteIQ</span>
              <Icon name="arrow-right" size={14} />
            </Link>
            {CONTACT.email && (
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-1.5 text-sm text-navy-300 hover:text-white transition-colors"
              >
                <Icon name="mail" size={14} />
                <span>{CONTACT.email}</span>
              </a>
            )}
            {CONTACT.whatsapp && (
              <a
                href={`https://wa.me/${CONTACT.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-navy-300 hover:text-white transition-colors"
              >
                <Icon name="message" size={14} />
                <span>WhatsApp</span>
              </a>
            )}
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-navy-400">
          <div>&copy; {currentYear} ByteIQ Tecnologia. Todos os direitos reservados.</div>
          <div>Tecnologia &amp; Engenharia de Software</div>
        </div>
      </div>
    </footer>
  );
}

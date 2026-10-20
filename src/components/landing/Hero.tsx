"use client";

import { ArrowRight, Play, CheckCircle2 } from "lucide-react";
import { ProductPreview } from "./ProductPreview";

interface HeroProps {
  onOpenDemo: () => void;
}

export function Hero({ onOpenDemo }: HeroProps) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-radial-[at_top_center] from-indigo-50/50 via-white to-white">
      {/* Background Subtle Tech Grid Accent */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#4f46e5 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Center Block */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Subtle Pill */}
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50/80 px-3.5 py-1.5 text-xs font-medium text-indigo-700 border border-indigo-200/80 shadow-xs mb-6">
            <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-pulse" />
            <span>Configure sua operação sem precisar montar uma infraestrutura complexa</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.12]">
            Atendimento inteligente sem transformar seu{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
              WhatsApp em caos
            </span>
            .
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Centralize conversas, automatize tarefas e deixe agentes de IA cuidarem do trabalho repetitivo enquanto sua equipe foca no que realmente precisa de atenção humana.
          </p>

          {/* CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenDemo()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-base font-semibold text-white shadow-md shadow-indigo-600/20 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all active:scale-[0.98]"
            >
              <span>Começar agora</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <a
              href="#como-funciona"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-slate-100/90 border border-slate-200 px-6 py-3.5 text-base font-semibold text-slate-700 hover:bg-slate-200/80 hover:text-slate-900 transition-all"
            >
              <Play className="h-4 w-4 fill-current text-slate-500" />
              <span>Ver como funciona</span>
            </a>
          </div>

          {/* Micro Trust Points */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-500">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              <span>WhatsApp Oficial integrado</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              <span>Transição humana com 1 clique</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              <span>Configuração assistida</span>
            </div>
          </div>
        </div>

        {/* Embedded High-Fidelity Product Mockup */}
        <div className="mt-12 sm:mt-16 relative">
          {/* Subtle Glow behind the mockup */}
          <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-blue-500/10 rounded-3xl blur-xl -z-10" />
          <ProductPreview />
        </div>
      </div>
    </section>
  );
}

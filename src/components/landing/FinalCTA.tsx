"use client";

import { ArrowRight, Sparkles, ShieldCheck, MessageSquare, Headphones } from "lucide-react";

interface FinalCTAProps {
  onOpenDemo: () => void;
}

export function FinalCTA({ onOpenDemo }: FinalCTAProps) {
  return (
    <section className="py-20 sm:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background radial gradient accent */}
      <div className="absolute inset-0 bg-radial-[at_top_right] from-indigo-500/15 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full bg-indigo-950 px-3.5 py-1 text-xs font-semibold text-indigo-400 border border-indigo-800 mb-6">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Pronto para dar o próximo passo?</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight max-w-3xl mx-auto">
          Seu atendimento pode crescer sem ficar mais complicado.
        </h2>

        <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Automatize o trabalho repetitivo e mantenha sua equipe focada nas conversas que realmente precisam dela.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onOpenDemo()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-7 py-4 text-base font-semibold text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all active:scale-[0.98]"
          >
            <span>Começar agora</span>
            <ArrowRight className="h-4 w-4" />
          </button>

          <button
            onClick={() => onOpenDemo()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-slate-800 border border-slate-700 px-7 py-4 text-base font-semibold text-slate-200 hover:bg-slate-700 hover:text-white transition-all"
          >
            <Headphones className="h-4 w-4 text-indigo-400" />
            <span>Solicitar demonstração</span>
          </button>
        </div>

        {/* Badges */}
        <div className="mt-10 pt-8 border-t border-slate-800 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span>Sem fidelidade obrigatória</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MessageSquare className="h-4 w-4 text-emerald-400" />
            <span>Compatível com WhatsApp Web & API</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Sparkles className="h-4 w-4 text-emerald-400" />
            <span>Onboarding guiado pela equipe</span>
          </div>
        </div>
      </div>
    </section>
  );
}

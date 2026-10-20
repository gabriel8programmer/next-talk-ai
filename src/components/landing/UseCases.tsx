"use client";

import { useState } from "react";
import {
  MessageSquare,
  TrendingUp,
  LifeBuoy,
  CreditCard,
  CheckCircle2,
  Bot,
  UserCheck,
} from "lucide-react";
import { USE_CASES } from "@/data/landing";

const USE_CASE_ICONS: Record<string, React.ElementType> = {
  atendimento: MessageSquare,
  comercial: TrendingUp,
  suporte: LifeBuoy,
  cobranca: CreditCard,
};

export function UseCases() {
  const [activeTabId, setActiveTabId] = useState(USE_CASES[0].id);

  const activeCase =
    USE_CASES.find((c) => c.id === activeTabId) || USE_CASES[0];

  return (
    <section id="solucoes" className="py-20 sm:py-28 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 border border-indigo-200/80 mb-4">
            Casos de Uso
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Projetado para diferentes setores da sua empresa
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Seja para qualificar leads quentes, triar chamados técnicos ou agilizar respostas frequentes, a plataforma se molda à rotina da sua equipe.
          </p>
        </div>

        {/* Accessible Tab Navigation */}
        <div
          role="tablist"
          aria-label="Casos de uso da NexTalk AI"
          className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-white border border-slate-200 max-w-2xl mx-auto mb-10 shadow-xs"
        >
          {USE_CASES.map((uc) => {
            const Icon = USE_CASE_ICONS[uc.id] || MessageSquare;
            const isSelected = uc.id === activeCase.id;
            return (
              <button
                key={uc.id}
                role="tab"
                id={`tab-${uc.id}`}
                aria-selected={isSelected}
                aria-controls={`panel-${uc.id}`}
                onClick={() => setActiveTabId(uc.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isSelected
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{uc.title}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Panel Content Card */}
        <div
          role="tabpanel"
          id={`panel-${activeCase.id}`}
          aria-labelledby={`tab-${activeCase.id}`}
          className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          {/* Left Details */}
          <div className="lg:col-span-6 space-y-5">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-200/60">
              {activeCase.badge}
            </span>

            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
              {activeCase.title}
            </h3>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {activeCase.description}
            </p>

            <div className="pt-2 space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Ganhos imediatos para a operação:
              </h4>
              {activeCase.benefits.map((benefit, bIdx) => (
                <div key={bIdx} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Live Simulation Box */}
          <div className="lg:col-span-6 rounded-2xl bg-slate-50 border border-slate-200 p-5 sm:p-6 space-y-3.5 text-xs sm:text-sm">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs">
              <span className="font-semibold text-slate-700">Fluxo na Prática</span>
              <span className="text-indigo-600 font-mono text-[11px]">Canal WhatsApp</span>
            </div>

            {/* Customer Message */}
            <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
              <span className="text-[11px] font-bold text-slate-400 block mb-1">
                Mensagem do Cliente
              </span>
              <p className="text-slate-800 font-medium">
                &ldquo;{activeCase.scenario.customerMessage}&rdquo;
              </p>
            </div>

            {/* AI Action */}
            <div className="p-3.5 rounded-xl bg-indigo-50/80 border border-indigo-200 text-indigo-950 shadow-xs">
              <span className="text-[11px] font-bold text-indigo-700 block mb-1 flex items-center gap-1">
                <Bot className="h-3.5 w-3.5" /> Ação Imediata da IA
              </span>
              <p className="text-slate-700 leading-relaxed">
                {activeCase.scenario.aiAction}
              </p>
            </div>

            {/* Human Team Outcome */}
            <div className="p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-200 text-emerald-950 shadow-xs">
              <span className="text-[11px] font-bold text-emerald-700 block mb-1 flex items-center gap-1">
                <UserCheck className="h-3.5 w-3.5" /> Resultado para a Equipe
              </span>
              <p className="text-slate-700 leading-relaxed">
                {activeCase.scenario.humanOutcome}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

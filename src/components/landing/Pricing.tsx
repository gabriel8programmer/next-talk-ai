"use client";

import { Check, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { PRICING_PLANS } from "@/data/landing";

// Preços fictícios para projeto de portfólio.
// Não representam cobrança comercial real.

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

export function Pricing({ onSelectPlan }: PricingProps) {
  return (
    <section id="precos" className="py-20 sm:py-28 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 border border-indigo-200/80 mb-4">
            Planos & Investimento
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Transparência para acompanhar o crescimento da sua empresa
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Escolha o plano ideal para o tamanho da sua equipe. Sem contratos de fidelidade forçada.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isPopular = plan.isPopular;
            return (
              <div
                key={plan.name}
                className={`relative flex flex-col justify-between rounded-3xl p-7 sm:p-9 transition-all ${
                  isPopular
                    ? "bg-slate-900 text-white shadow-2xl ring-2 ring-indigo-600 lg:-translate-y-2"
                    : "bg-white text-slate-900 border border-slate-200 shadow-xs hover:border-slate-300"
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-md flex items-center gap-1.5">
                    <Sparkles className="h-3 w-3" />
                    <span>Mais popular</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">{plan.name}</h3>
                  </div>

                  <p
                    className={`text-sm leading-relaxed mb-6 ${
                      isPopular ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1.5 pb-6 border-b border-slate-100/20">
                    <span className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                      {plan.price}
                    </span>
                    <span
                      className={`text-sm font-medium ${
                        isPopular ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      {plan.period}
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="mt-6 space-y-3">
                    <span
                      className={`text-xs font-bold uppercase tracking-wider block ${
                        isPopular ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      O que está incluso:
                    </span>
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <Check
                          className={`h-4 w-4 shrink-0 mt-0.5 ${
                            isPopular ? "text-indigo-400" : "text-indigo-600"
                          }`}
                        />
                        <span
                          className={isPopular ? "text-slate-200" : "text-slate-700"}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="mt-8 pt-6 border-t border-slate-100/20">
                  <button
                    onClick={() => onSelectPlan(plan.name)}
                    className={`w-full inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold transition-all active:scale-[0.98] ${
                      isPopular
                        ? "bg-indigo-600 text-white hover:bg-indigo-500 shadow-md shadow-indigo-600/30"
                        : "bg-slate-900 text-white hover:bg-slate-800"
                    }`}
                  >
                    <span>Começar agora</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  <p
                    className={`mt-3 text-center text-xs flex items-center justify-center gap-1 ${
                      isPopular ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    <ShieldCheck className="h-3.5 w-3.5" />
                    Valores demonstrativos para portfólio
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import {
  BarChart3,
  TrendingUp,
  Info,
} from "lucide-react";
import { ANALYTICS_METRICS } from "@/data/landing";

// NOTA OBRIGATÓRIA:
// Valores explicitamente fictícios e demonstrativos para fins de apresentação de portfólio.
// Não representam dados estatísticos de clientes reais.

export function Analytics() {
  return (
    <section className="py-20 sm:py-28 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 mb-4">
              <BarChart3 className="h-3.5 w-3.5 text-indigo-600" />
              <span>Visibilidade Operacional</span>
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              Métricas claras para acompanhar a evolução do atendimento
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Monitore volume de conversas, velocidade de resposta e o percentual de demandas resolvidas sem intervenção manual.
            </p>
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs text-slate-500 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg">
            <Info className="h-3.5 w-3.5 text-slate-400" />
            <span>Dados demonstrativos fictícios para portfólio</span>
          </div>
        </div>

        {/* 4 Primary Demonstrative Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ANALYTICS_METRICS.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-slate-200/90 bg-slate-50/50 p-6 shadow-xs hover:border-slate-300 transition-all hover:bg-slate-50 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  {metric.label}
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  {metric.value}
                </div>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  {metric.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center gap-1 text-xs font-medium text-indigo-700">
                <TrendingUp className="h-3.5 w-3.5" />
                <span>{metric.trend}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Fictional Visual Analytics Preview Box */}
        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-3">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Distribuição da Operação • Período Atual (Demonstrativo)
              </h3>
              <p className="text-xs text-slate-500">
                Comparativo entre resolução pela IA vs. transferências para equipe humana
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <span className="flex items-center gap-1.5 font-medium text-slate-700">
                <span className="h-2.5 w-2.5 rounded-full bg-indigo-600 inline-block" />
                67% Resolvidos por IA (860 conversas)
              </span>
              <span className="flex items-center gap-1.5 font-medium text-slate-700">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 inline-block" />
                33% Atendimento Humano (424 conversas)
              </span>
            </div>
          </div>

          {/* Ratio bar */}
          <div className="mt-6">
            <div className="h-4 w-full rounded-full bg-slate-100 overflow-hidden flex">
              <div
                className="h-full bg-indigo-600 transition-all"
                style={{ width: "67%" }}
                title="67% Automatizadas por IA"
              />
              <div
                className="h-full bg-emerald-500 transition-all"
                style={{ width: "33%" }}
                title="33% Atendimentos Humanos"
              />
            </div>
          </div>

          {/* Quick breakdown insights */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs">
              <span className="text-slate-500 block mb-1">Horário de Pico</span>
              <strong className="text-slate-900">10h00 às 12h30 & 14h00 às 17h00</strong>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs">
              <span className="text-slate-500 block mb-1">Fora do Expediente</span>
              <strong className="text-slate-900">28% das conversas recebidas à noite ou fins de semana</strong>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs">
              <span className="text-slate-500 block mb-1">Economia Operacional Estimada</span>
              <strong className="text-slate-900">~140 horas mensais poupadas</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

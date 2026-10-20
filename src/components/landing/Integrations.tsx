import {
  MessageSquare,
  Webhook,
  Code2,
  Database,
  Building2,
  Layers,
  CheckCircle2,
  Terminal,
} from "lucide-react";
import { INTEGRATION_CATEGORIES } from "@/data/landing";

const CATEGORY_ICONS = [
  MessageSquare,
  Webhook,
  Code2,
  Building2,
  Layers,
  Database,
];

export function Integrations() {
  return (
    <section id="integracoes" className="py-20 sm:py-28 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 border border-indigo-200/80 mb-4">
            Ecossistema & Conectividade
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Conecte a NexTalk ao que sua empresa já utiliza.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Use APIs e webhooks para conectar a NexTalk a sistemas externos e criar fluxos personalizados.
          </p>
        </div>

        {/* Categories Grid + Interactive Code Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* 6 Category Cards in 2 columns on lg */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {INTEGRATION_CATEGORIES.map((cat, idx) => {
              const Icon = CATEGORY_ICONS[idx] || Code2;
              return (
                <div
                  key={cat.category}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-200/60">
                        {cat.badge}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900">
                      {cat.category}
                    </h4>
                    <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1 text-[11px] font-medium text-emerald-700">
                    <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                    <span>Conexão simplificada</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Webhook JSON Preview Box */}
          <div className="lg:col-span-5 rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-7 text-white flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <Terminal className="h-4 w-4 text-indigo-400" />
                  <span>POST /webhook/nex-talk</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                  200 OK
                </span>
              </div>

              <p className="text-xs text-slate-400 mb-3">
                Exemplo de payload em tempo real disparado quando a IA qualifica um lead e aciona o time:
              </p>

              <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-[11px] sm:text-xs font-mono text-indigo-300 overflow-x-auto leading-relaxed">
{`{
  "event": "conversation.transferred",
  "timestamp": "2026-10-20T10:15:30Z",
  "data": {
    "contact": {
      "name": "Camila Ramos",
      "company": "Lumina Imóveis",
      "phone": "+5511999998888",
      "channel": "whatsapp"
    },
    "agent_summary": "Lead interessado em 15 licenças com integração CRM imobiliário.",
    "qualification_score": 94,
    "assigned_to": {
      "user_id": "usr_rodrigo_costa",
      "department": "Vendas Enterprise"
    }
  }
}`}
              </pre>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>Documentação Swagger / OpenAPI 3.0</span>
              <span className="text-indigo-400 font-mono">SDK Node & Python</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

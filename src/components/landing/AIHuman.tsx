import {
  Bot,
  UserCheck,
  Sparkles,
  Zap,
  Clock,
  HeartHandshake,
} from "lucide-react";

export function AIHuman() {
  return (
    <section className="py-20 sm:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Subtle Ambient Lighting */}
      <div className="absolute top-0 right-1/4 -z-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 -z-0 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Concept & Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-950 px-3.5 py-1 text-xs font-semibold text-indigo-400 border border-indigo-800">
              <Sparkles className="h-3.5 w-3.5" />
              <span>O Modelo Híbrido Definitivo</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              IA quando faz sentido.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-300">
                Pessoas quando fazem diferença.
              </span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Robôs não devem tentar fingir que são humanos, e humanos não devem perder horas respondendo o mesmo horário de funcionamento 50 vezes por dia.
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Com a NexTalk AI, a inteligência artificial cuida da recepção imediata, responde dúvidas simples 24 horas por dia e qualifica a necessidade do cliente. Quando surge uma negociação estratégica, dúvida sensível ou solicitação complexa, o atendimento é passado de forma limpa para sua equipe.
            </p>

            {/* Feature comparison points */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80">
                <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm mb-1.5">
                  <Bot className="h-4 w-4" />
                  <span>O papel da IA</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Primeira resposta em menos de 15s, triagem de assunto, respostas a dúvidas frequentes e coleta prévia de dados.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm mb-1.5">
                  <UserCheck className="h-4 w-4" />
                  <span>O papel do Humano</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Negociação consultiva, empatia em momentos delicados, fechamento comercial e suporte especializado.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Conversation Demo */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-slate-700 bg-slate-950 p-6 sm:p-8 shadow-2xl relative">
              {/* Box Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-indigo-600/30 border border-indigo-500/50 flex items-center justify-center text-indigo-300 font-bold text-xs">
                    CR
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Camila Ramos</h4>
                    <span className="text-xs text-slate-400">Canal: WhatsApp Corporativo</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 text-[11px] font-mono border border-slate-700">
                  Simulação de Atendimento
                </span>
              </div>

              {/* Chat Progression */}
              <div className="space-y-4 text-xs sm:text-sm">
                {/* 1. Customer initial inquiry */}
                <div className="flex flex-col items-start">
                  <span className="text-[11px] text-slate-500 mb-1">Cliente • 14:02</span>
                  <div className="rounded-2xl rounded-tl-sm bg-slate-800 text-slate-100 p-3.5 max-w-[85%] border border-slate-700">
                    <p>Olá, gostaria de saber os valores dos planos.</p>
                  </div>
                </div>

                {/* 2. AI contextual qualifying response */}
                <div className="flex flex-col items-end">
                  <span className="text-[11px] text-indigo-400 mb-1 flex items-center gap-1 font-medium">
                    <Bot className="h-3 w-3" /> NexTalk AI • 14:02
                  </span>
                  <div className="rounded-2xl rounded-tr-sm bg-indigo-600 text-white p-3.5 max-w-[85%] shadow-sm">
                    <p>
                      Claro! Posso te apresentar as opções disponíveis. Antes, quantas pessoas fazem parte da sua equipe?
                    </p>
                  </div>
                </div>

                {/* 3. Customer response */}
                <div className="flex flex-col items-start">
                  <span className="text-[11px] text-slate-500 mb-1">Cliente • 14:03</span>
                  <div className="rounded-2xl rounded-tl-sm bg-slate-800 text-slate-100 p-3.5 max-w-[85%] border border-slate-700">
                    <p>Somos 15 consultores e precisamos integrar com nosso sistema de vendas.</p>
                  </div>
                </div>

                {/* 4. VISUAL HANDOFF EVENT (Mandatory key element) */}
                <div className="my-6 p-4 rounded-2xl bg-gradient-to-r from-emerald-950/80 via-slate-900 to-indigo-950/80 border border-emerald-500/30 text-center animate-in fade-in">
                  <div className="flex items-center justify-center gap-2 text-emerald-400 font-semibold text-xs sm:text-sm mb-1">
                    <Zap className="h-4 w-4" />
                    <span>Transferido para atendimento humano</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-300">
                    Perfil comercial qualificado • Histórico enviado para <strong>Rodrigo Costa (Equipe Comercial)</strong>
                  </p>
                </div>

                {/* 5. Human takes over with full context */}
                <div className="flex flex-col items-end">
                  <span className="text-[11px] text-emerald-400 mb-1 flex items-center gap-1 font-medium">
                    <UserCheck className="h-3 w-3" /> Rodrigo Costa (Humano) • 14:04
                  </span>
                  <div className="rounded-2xl rounded-tr-sm bg-slate-100 text-slate-900 p-3.5 max-w-[85%] shadow-sm font-medium">
                    <p>
                      Olá, Camila! Sou o Rodrigo. Vi que vocês têm 15 consultores. O plano Scale atende perfeitamente sua estrutura com as integrações prontas. Posso te ligar em 5 minutos para demonstrar?
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom reassurance */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-indigo-400" />
                  Transição em 1 clique
                </span>
                <span className="flex items-center gap-1.5">
                  <HeartHandshake className="h-3.5 w-3.5 text-emerald-400" />
                  Cliente nunca repete dados
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

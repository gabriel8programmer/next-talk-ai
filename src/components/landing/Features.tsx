import {
  Bot,
  UserCheck,
  MessageSquare,
  GitBranch,
  History,
  Webhook,
  Sparkles,
  Sliders,
  CheckCircle2,
} from "lucide-react";

export function Features() {
  return (
    <section id="funcionalidades" className="py-20 sm:py-28 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 border border-indigo-200/80 mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Recursos da Plataforma</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Tudo o que sua empresa precisa para atender melhor e escalar sem atrito.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Desenvolvido para operações reais que valorizam agilidade, controle e uma experiência impecável para o cliente.
          </p>
        </div>

        {/* Varied Editorial Layout: 2 Large Featured + 4 Compact Distinct Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* FEATURE 1 (LARGE): Agentes de IA */}
          <div className="lg:col-span-7 rounded-3xl border border-slate-200 bg-white p-7 sm:p-9 shadow-xs flex flex-col justify-between overflow-hidden relative group">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-700 border border-indigo-200/70">
                  <Bot className="h-4 w-4" />
                  Agentes de IA
                </span>
                <span className="text-xs font-mono text-slate-600 font-medium">01 // AUTOMAÇÃO COGNITIVA</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Respostas precisas baseadas nas regras do seu negócio
              </h3>
              <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
                Automatizam respostas e tarefas operacionais respeitando diretrizes rígidas configuradas pela empresa. Sem alucinações ou respostas fora de tom.
              </p>
            </div>

            {/* Visual Demo Box */}
            <div className="mt-8 rounded-2xl bg-slate-50 border border-slate-200/90 p-4 sm:p-5 text-xs">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-3">
                <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                  <Sliders className="h-3.5 w-3.5 text-indigo-600" />
                  Diretrizes do Agente Comercial
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-mono text-[10px] border border-emerald-200">
                  Status: Ativo
                </span>
              </div>
              <div className="space-y-2 text-slate-600">
                <div className="flex items-start gap-2 bg-white p-2.5 rounded-lg border border-slate-200/60">
                  <CheckCircle2 className="h-4 w-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span><strong>Identificar perfil:</strong> Perguntar número de usuários e sistema atual antes de orçar.</span>
                </div>
                <div className="flex items-start gap-2 bg-white p-2.5 rounded-lg border border-slate-200/60">
                  <CheckCircle2 className="h-4 w-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span><strong>Gatilho de transição:</strong> Transferir para corretor imediatamente quando solicitado horário presencial.</span>
                </div>
              </div>
            </div>
          </div>

          {/* FEATURE 2 (LARGE): Atendimento Humano */}
          <div className="lg:col-span-5 rounded-3xl border border-slate-200 bg-white p-7 sm:p-9 shadow-xs flex flex-col justify-between overflow-hidden relative">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 border border-emerald-200/70">
                  <UserCheck className="h-4 w-4" />
                  Atendimento Humano
                </span>
                <span className="text-xs font-mono text-slate-600 font-medium">02 // TRANSIÇÃO</span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                Assuma o controle a qualquer momento com um clique
              </h3>
              <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                Permite transferir facilmente qualquer conversa da IA para um atendente. O operador assume com todo o histórico visível e notas internas anexadas.
              </p>
            </div>

            {/* Visual Demo Box */}
            <div className="mt-8 rounded-2xl bg-indigo-900 text-white p-5 shadow-inner">
              <div className="flex items-center justify-between text-xs mb-3">
                <span className="text-indigo-200 font-medium">Fila de Transição</span>
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              </div>
              <div className="p-3 rounded-xl bg-indigo-950/80 border border-indigo-800/80 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-xs text-white">Camila Ramos</div>
                  <div className="text-[11px] text-indigo-300">Aguardando atendente de Vendas</div>
                </div>
                <span className="px-2.5 py-1 rounded-lg bg-indigo-600 text-white font-semibold text-[11px]">
                  Assumir
                </span>
              </div>
              <p className="mt-3 text-[11px] text-indigo-300">
                ✓ Cliente não precisa repetir dados já informados.
              </p>
            </div>
          </div>

          {/* FEATURE 3: WhatsApp Integrado */}
          <div className="lg:col-span-3 rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 mb-5">
                <MessageSquare className="h-5 w-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                WhatsApp Integrado
              </h4>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Centralização das conversas dentro da plataforma. Toda a equipe atende pelo mesmo número oficial com controle de acessos.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-700">
              Múltiplos operadores sem celular físico
            </div>
          </div>

          {/* FEATURE 4: Automação */}
          <div className="lg:col-span-3 rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 border border-indigo-100 mb-5">
                <GitBranch className="h-5 w-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                Automação de Fluxos
              </h4>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Criação de fluxos para mensagens fora do horário comercial, distribuição entre filas, aplicação de tags e lembretes automáticos.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-700">
              Roteamento por assunto e horário
            </div>
          </div>

          {/* FEATURE 5: Histórico Centralizado */}
          <div className="lg:col-span-3 rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-50 text-violet-600 border border-violet-100 mb-5">
                <History className="h-5 w-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                Histórico Centralizado
              </h4>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Registro perene das interações realizadas com cada contato. Linha do tempo completa para consultas, auditorias e gestão.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-700">
              Busca rápida por nome, telefone ou tag
            </div>
          </div>

          {/* FEATURE 6: Integrações */}
          <div className="lg:col-span-3 rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 mb-5">
                <Webhook className="h-5 w-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                Integrações Abertas
              </h4>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Conexão com sistemas externos através de APIs REST e webhooks para sincronizar cadastros, vendas e notificações em tempo real.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-700">
              Compatível com CRMs e ERPs de mercado
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

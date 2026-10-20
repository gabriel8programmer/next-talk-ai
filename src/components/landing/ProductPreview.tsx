"use client";

import { useState } from "react";
import {
  MessageSquare,
  Bot,
  UserCheck,
  Search,
  CheckCheck,
  Zap,
  BarChart3,
  Users,
  Settings,
  Sparkles,
} from "lucide-react";

interface ConversationItem {
  id: string;
  name: string;
  company: string;
  avatar: string;
  lastMessage: string;
  time: string;
  tag: string;
  tagColor: string;
  isAiHandling: boolean;
  unreadCount?: number;
  messages: Array<{
    sender: "customer" | "ai" | "human" | "system";
    text: string;
    time: string;
    authorName?: string;
  }>;
}

const SAMPLE_CONVERSATIONS: ConversationItem[] = [
  {
    id: "conv-1",
    name: "Camila Ramos",
    company: "Lumina Imóveis",
    avatar: "CR",
    lastMessage: "Perfeito! Conseguem fazer uma demonstração guiada hoje?",
    time: "10:15",
    tag: "Lead Qualificado",
    tagColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    isAiHandling: true,
    unreadCount: 1,
    messages: [
      {
        sender: "customer",
        text: "Olá! Gostaria de entender como funciona a integração com nosso CRM imobiliário e os planos para 15 corretores.",
        time: "10:14",
      },
      {
        sender: "ai",
        text: "Olá, Camila! Temos integração nativa via Webhook e API REST com os principais CRMs do mercado imobiliário. Para 15 corretores, nosso plano Scale oferece números múltiplos, roteamento inteligente de leads e relatórios em tempo real.",
        time: "10:14",
        authorName: "NexTalk AI (Agente Comercial)",
      },
      {
        sender: "customer",
        text: "Perfeito! Vocês conseguem fazer uma demonstração guiada hoje à tarde?",
        time: "10:15",
      },
      {
        sender: "system",
        text: "⚡ IA identificou alta intenção comercial e equipe com 15 consultores. Contexto pronto para negociação.",
        time: "10:15",
      },
    ],
  },
  {
    id: "conv-2",
    name: "Dr. Marcelo Guimarães",
    company: "Clínica Vita",
    avatar: "MG",
    lastMessage: "Horário confirmado para quinta-feira às 14h30.",
    time: "10:11",
    tag: "Agendamento",
    tagColor: "bg-blue-50 text-blue-700 border-blue-200",
    isAiHandling: true,
    messages: [
      {
        sender: "customer",
        text: "Gostaria de reagendar a consulta da próxima semana.",
        time: "10:09",
      },
      {
        sender: "ai",
        text: "Olá, Dr. Marcelo! Temos horários disponíveis na quinta-feira às 14h30 ou sexta às 10h. Qual prefere?",
        time: "10:10",
        authorName: "NexTalk AI (Agente Recepção)",
      },
      {
        sender: "customer",
        text: "Quinta às 14h30 fica excelente, obrigado!",
        time: "10:11",
      },
      {
        sender: "ai",
        text: "Horário confirmado para quinta-feira às 14h30. Já atualizei seu cadastro no sistema da clínica.",
        time: "10:11",
        authorName: "NexTalk AI (Agente Recepção)",
      },
    ],
  },
  {
    id: "conv-3",
    name: "Carlos Eduardo",
    company: "NovaHaus Arquitetura",
    avatar: "CE",
    lastMessage: "Transferido para o atendimento financeiro.",
    time: "09:58",
    tag: "Financeiro",
    tagColor: "bg-amber-50 text-amber-700 border-amber-200",
    isAiHandling: false,
    messages: [
      {
        sender: "customer",
        text: "Preciso da 2ª via da nota fiscal do contrato de reforma.",
        time: "09:55",
      },
      {
        sender: "ai",
        text: "Identifiquei seu contrato #8492. Vou transferir para nosso analista financeiro emitir a nota com os dados atualizados.",
        time: "09:56",
        authorName: "NexTalk AI",
      },
      {
        sender: "human",
        text: "Bom dia, Carlos! Rodrigo aqui do financeiro. Acabei de emitir a 2ª via atualizada com vencimento prorrogado.",
        time: "09:58",
        authorName: "Rodrigo Costa (Financeiro)",
      },
    ],
  },
];

export function ProductPreview() {
  const [activeConvId, setActiveConvId] = useState("conv-1");
  const [conversations, setConversations] = useState(SAMPLE_CONVERSATIONS);
  const [filter, setFilter] = useState<"all" | "ai" | "human">("all");

  const activeConv =
    conversations.find((c) => c.id === activeConvId) || conversations[0];

  const handleTakeOver = () => {
    setConversations((prev) =>
      prev.map((c) => {
        if (c.id === activeConvId) {
          const newMessages = [
            ...c.messages,
            {
              sender: "human" as const,
              text: "Olá Camila! Rodrigo Costa aqui da equipe comercial. Posso apresentar a plataforma às 16h hoje. Esse horário fica bom para você?",
              time: "10:16",
              authorName: "Rodrigo Costa (Vendas)",
            },
          ];
          return {
            ...c,
            isAiHandling: false,
            messages: newMessages,
          };
        }
        return c;
      })
    );
  };

  const filteredConversations = conversations.filter((c) => {
    if (filter === "ai") return c.isAiHandling;
    if (filter === "human") return !c.isAiHandling;
    return true;
  });

  return (
    <div className="w-full rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white shadow-2xl shadow-slate-200/50 overflow-hidden">
      {/* Top OS Window Bar */}
      <div className="bg-slate-900 px-4 py-3 sm:px-6 flex items-center justify-between border-b border-slate-800 text-slate-300">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="h-3 w-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="hidden sm:inline-block ml-3 text-xs font-mono text-slate-400">
            app.nextalk.ai/inbox
          </span>
        </div>

        <div className="flex items-center gap-3 text-xs">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/70 text-emerald-400 border border-emerald-800/80">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium">WhatsApp Conectado</span>
          </div>
          <span className="hidden md:inline-block text-slate-400">
            Fila Ativa: 14 conversas
          </span>
        </div>
      </div>

      {/* Main Workspace Mockup */}
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[520px] bg-slate-50">
        {/* Compact App Sidebar (Visible on md+) */}
        <aside className="hidden lg:flex lg:col-span-1 bg-slate-900 border-r border-slate-800 flex-col items-center py-5 justify-between">
          <div className="flex flex-col items-center gap-6">
            <div className="h-9 w-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-sm font-bold text-sm">
              N
            </div>
            <nav className="flex flex-col gap-3">
              <button
                className="p-2.5 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30"
                title="Caixa de Entrada"
              >
                <MessageSquare className="h-5 w-5" />
              </button>
              <button
                className="p-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                title="Agentes de IA"
              >
                <Bot className="h-5 w-5" />
              </button>
              <button
                className="p-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                title="Automações"
              >
                <Zap className="h-5 w-5" />
              </button>
              <button
                className="p-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                title="Métricas"
              >
                <BarChart3 className="h-5 w-5" />
              </button>
              <button
                className="p-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                title="Contatos"
              >
                <Users className="h-5 w-5" />
              </button>
            </nav>
          </div>

          <button
            className="p-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title="Configurações"
          >
            <Settings className="h-5 w-5" />
          </button>
        </aside>

        {/* Conversations List Panel */}
        <div className="col-span-12 md:col-span-5 lg:col-span-4 bg-white border-r border-slate-200 flex flex-col">
          {/* Search & Filters */}
          <div className="p-3.5 border-b border-slate-100">
            <div className="relative mb-2.5">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
              <input
                type="text"
                readOnly
                value="Buscar contato ou tag..."
                className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-8 pr-3 py-1.5 text-xs text-slate-600 focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setFilter("all")}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                  filter === "all"
                    ? "bg-slate-900 text-white"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                Todas (14)
              </button>
              <button
                onClick={() => setFilter("ai")}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                  filter === "ai"
                    ? "bg-indigo-600 text-white"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                IA Ativa (9)
              </button>
              <button
                onClick={() => setFilter("human")}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                  filter === "human"
                    ? "bg-slate-900 text-white"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                Com Humano (5)
              </button>
            </div>
          </div>

          {/* Conversation List */}
          <div className="divide-y divide-slate-100 overflow-y-auto max-h-[380px] md:max-h-[500px]">
            {filteredConversations.map((conv) => {
              const isSelected = conv.id === activeConv.id;
              return (
                <div
                  key={conv.id}
                  onClick={() => setActiveConvId(conv.id)}
                  className={`p-3.5 cursor-pointer transition-colors text-left ${
                    isSelected
                      ? "bg-indigo-50/70 border-l-4 border-indigo-600"
                      : "hover:bg-slate-50/80"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className="relative">
                        <div className="h-8 w-8 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-xs">
                          {conv.avatar}
                        </div>
                        {conv.isAiHandling ? (
                          <span
                            className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full bg-indigo-600 border-2 border-white flex items-center justify-center text-[8px] text-white"
                            title="Atendido por IA"
                          >
                            ⚡
                          </span>
                        ) : (
                          <span
                            className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-[8px] text-white"
                            title="Atendido por Humano"
                          >
                            ✓
                          </span>
                        )}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-semibold text-xs text-slate-900">
                            {conv.name}
                          </span>
                        </div>
                        <span className="text-[11px] text-slate-600 block">
                          {conv.company}
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] text-slate-600 whitespace-nowrap">
                      {conv.time}
                    </span>
                  </div>

                  <p className="mt-2 text-xs text-slate-600 line-clamp-1">
                    {conv.lastMessage}
                  </p>

                  <div className="mt-2 flex items-center justify-between">
                    <span
                      className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${conv.tagColor}`}
                    >
                      {conv.tag}
                    </span>
                    {conv.isAiHandling ? (
                      <span className="text-[10px] font-medium text-indigo-700 flex items-center gap-1">
                        <Bot className="h-3 w-3" /> IA respondendo
                      </span>
                    ) : (
                      <span className="text-[10px] font-medium text-emerald-700 flex items-center gap-1">
                        <UserCheck className="h-3 w-3" /> Rodrigo (Humano)
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Conversation Main Chat Pane */}
        <div className="col-span-12 md:col-span-7 lg:col-span-7 flex flex-col justify-between bg-slate-50">
          {/* Chat Header */}
          <div className="p-3.5 sm:px-5 bg-white border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs">
                {activeConv.avatar}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold text-sm text-slate-900">
                    {activeConv.name}
                  </h4>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-mono">
                    WhatsApp
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span>{activeConv.company}</span>
                  <span>•</span>
                  {activeConv.isAiHandling ? (
                    <span className="inline-flex items-center gap-1 text-indigo-600 font-medium">
                      <Sparkles className="h-3 w-3" /> Agente Comercial IA
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-emerald-600 font-medium">
                      <UserCheck className="h-3 w-3" /> Com Atendente Humano
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Action: Assume conversation */}
            {activeConv.isAiHandling ? (
              <button
                onClick={handleTakeOver}
                className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700 border border-indigo-200 hover:bg-indigo-100 transition-colors active:scale-95 shadow-xs"
              >
                <UserCheck className="h-3.5 w-3.5" />
                <span>Assumir conversa</span>
              </button>
            ) : (
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                <CheckCheck className="h-3.5 w-3.5" />
                Você está atendendo
              </span>
            )}
          </div>

          {/* Chat Message History */}
          <div className="p-4 sm:p-5 space-y-3.5 overflow-y-auto max-h-[380px]">
            {activeConv.messages.map((msg, idx) => {
              if (msg.sender === "system") {
                return (
                  <div
                    key={idx}
                    className="mx-auto max-w-md p-2.5 rounded-xl bg-amber-50/90 border border-amber-200 text-amber-900 text-xs text-center flex items-center justify-center gap-2 shadow-xs"
                  >
                    <span>{msg.text}</span>
                  </div>
                );
              }

              const isCustomer = msg.sender === "customer";
              const isAi = msg.sender === "ai";

              return (
                <div
                  key={idx}
                  className={`flex flex-col ${
                    isCustomer ? "items-start" : "items-end"
                  }`}
                >
                  <div className="flex items-center gap-1.5 mb-1 text-[11px] text-slate-600">
                    {isCustomer ? (
                      <span>{activeConv.name}</span>
                    ) : (
                      <span className="font-medium text-indigo-700 flex items-center gap-1">
                        {isAi && <Bot className="h-3 w-3" />}
                        {msg.authorName || "NexTalk"}
                      </span>
                    )}
                    <span>• {msg.time}</span>
                  </div>

                  <div
                    className={`max-w-[85%] sm:max-w-[75%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm leading-relaxed shadow-xs ${
                      isCustomer
                        ? "bg-white text-slate-800 border border-slate-200/90 rounded-tl-sm"
                        : isAi
                        ? "bg-indigo-600 text-white rounded-tr-sm"
                        : "bg-slate-900 text-white rounded-tr-sm"
                    }`}
                  >
                    <p>{msg.text}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Chat Input Placeholder Bar */}
          <div className="p-3 bg-white border-t border-slate-200">
            <div className="flex items-center gap-2 rounded-xl bg-slate-50 border border-slate-200 px-3 py-2 text-xs text-slate-600">
              <span className="text-slate-400">
                {activeConv.isAiHandling
                  ? "IA gerenciando o diálogo. Clique em 'Assumir conversa' para digitar manualmente."
                  : "Digite sua resposta como Rodrigo Costa..."}
              </span>
              <button
                disabled
                className="ml-auto px-3 py-1 rounded-lg bg-indigo-600/30 text-white font-medium cursor-not-allowed"
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Live Metrics Bar (Mockup Context) */}
      <div className="bg-slate-900 border-t border-slate-800 px-4 py-3 sm:px-6 text-slate-300 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
        <div>
          <span className="text-slate-400 block text-[10px] uppercase tracking-wider">
            Tempo 1ª Resposta
          </span>
          <span className="font-semibold text-white text-sm">⚡ 8 segundos</span>
        </div>
        <div>
          <span className="text-slate-400 block text-[10px] uppercase tracking-wider">
            Taxa de Automação
          </span>
          <span className="font-semibold text-indigo-400 text-sm">74% das conversas</span>
        </div>
        <div>
          <span className="text-slate-400 block text-[10px] uppercase tracking-wider">
            Modo Operacional
          </span>
          <span className="font-semibold text-emerald-400 text-sm">Híbrido (IA + Humano)</span>
        </div>
        <div>
          <span className="text-slate-400 block text-[10px] uppercase tracking-wider">
            Canal Principal
          </span>
          <span className="font-semibold text-white text-sm">WhatsApp Cloud API</span>
        </div>
      </div>
    </div>
  );
}

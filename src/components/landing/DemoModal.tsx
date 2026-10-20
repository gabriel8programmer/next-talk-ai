"use client";

import { useEffect, useState } from "react";
import { X, CheckCircle2, MessageSquare, ArrowRight, ShieldCheck } from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlan?: string;
}

export function DemoModal({ isOpen, onClose, defaultPlan }: DemoModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [userSelectedPlan, setUserSelectedPlan] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    teamSize: "1-5",
  });

  const activePlan = userSelectedPlan ?? defaultPlan ?? "Growth";

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setUserSelectedPlan(null);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-200 transition-all max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Fechar modal"
          className="absolute top-4 right-4 rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-semibold text-indigo-700 border border-indigo-200">
                <MessageSquare className="h-3 w-3" />
                Demonstração Guiada
              </span>
            </div>

            <h3 id="modal-title" className="text-2xl font-bold tracking-tight text-slate-900">
              Começar com a NexTalk AI
            </h3>
            <p className="mt-1.5 text-sm text-slate-600">
              Veja como nossa plataforma centraliza seu WhatsApp e automatiza seu atendimento sem complicação.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="Ex: Carlos Silva"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                    E-mail Corporativo *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="carlos@empresa.com.br"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                    WhatsApp de Contato *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    placeholder="(11) 99999-8888"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                    Nome da Empresa *
                  </label>
                  <input
                    type="text"
                    id="company"
                    required
                    placeholder="Sua Empresa Ltda"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600"
                  />
                </div>
                <div>
                  <label htmlFor="teamSize" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                    Tamanho da Equipe
                  </label>
                  <select
                    id="teamSize"
                    value={formData.teamSize}
                    onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                    className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600 bg-white"
                  >
                    <option value="1-3">1 a 3 atendentes</option>
                    <option value="4-10">4 a 10 atendentes</option>
                    <option value="11-25">11 a 25 atendentes</option>
                    <option value="25+">Mais de 25 atendentes</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="plan" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                  Plano de Interesse
                </label>
                <select
                  id="plan"
                  value={activePlan}
                  onChange={(e) => setUserSelectedPlan(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600 bg-white"
                >
                  <option value="Starter">Starter (R$ 290/mês)</option>
                  <option value="Growth">Growth (R$ 690/mês - Recomendado)</option>
                  <option value="Scale">Scale (R$ 1.490/mês)</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
                >
                  Começar agora
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              <p className="flex items-center justify-center gap-1.5 text-xs text-slate-500 pt-1">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                Sem cobrança imediata • Configuração assistida
              </p>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-4">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Solicitação recebida com sucesso!
            </h3>
            <p className="mt-2 text-sm text-slate-600 max-w-sm mx-auto">
              Obrigado, <strong className="text-slate-900">{formData.name}</strong>. Esta é uma landing page demonstrativa para portfólio. Em um ambiente de produção real, nosso time enviaria o acesso ao WhatsApp da{" "}
              <strong className="text-slate-900">{formData.company}</strong> em até 15 minutos.
            </p>

            <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs text-slate-600 space-y-1">
              <p><strong>Plano selecionado:</strong> {activePlan}</p>
              <p><strong>E-mail:</strong> {formData.email}</p>
              <p><strong>Equipe:</strong> {formData.teamSize} atendentes</p>
            </div>

            <button
              onClick={handleReset}
              className="mt-6 inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 transition-colors"
            >
              Concluir e voltar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

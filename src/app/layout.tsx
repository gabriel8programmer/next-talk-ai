import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nextalk-ai.vercel.app"),
  title: "NexTalk AI | Atendimento e Automação com Inteligência Artificial",
  description:
    "Centralize conversas, automatize tarefas e conecte agentes de IA ao atendimento da sua empresa. Atendimento inteligente sem transformar seu WhatsApp em caos.",
  keywords: [
    "NexTalk AI",
    "Atendimento WhatsApp",
    "Agentes de IA",
    "Automação de atendimento",
    "SaaS B2B",
    "Chatbot inteligente",
    "Atendimento híbrido",
    "Central de mensagens",
  ],
  authors: [{ name: "NexTalk AI" }],
  creator: "NexTalk AI",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://nextalk-ai.vercel.app",
    title: "NexTalk AI | Atendimento e Automação com Inteligência Artificial",
    description:
      "Centralize conversas, automatize tarefas e conecte agentes de IA ao atendimento da sua empresa.",
    siteName: "NexTalk AI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NexTalk AI - Plataforma de Atendimento Inteligente para WhatsApp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NexTalk AI | Atendimento e Automação com Inteligência Artificial",
    description:
      "Centralize conversas, automatize tarefas e conecte agentes de IA ao atendimento da sua empresa.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#4f46e5",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${plusJakartaSans.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen bg-white font-sans text-slate-900 selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}

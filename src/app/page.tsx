"use client";

import { useState } from "react";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { TrustBar } from "@/components/landing/TrustBar";
import { Problems } from "@/components/landing/Problems";
import { Features } from "@/components/landing/Features";
import { AIHuman } from "@/components/landing/AIHuman";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Integrations } from "@/components/landing/Integrations";
import { Analytics } from "@/components/landing/Analytics";
import { UseCases } from "@/components/landing/UseCases";
import { Pricing } from "@/components/landing/Pricing";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { DemoModal } from "@/components/landing/DemoModal";

export default function Home() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>("Growth");

  const handleOpenDemo = (plan?: string) => {
    if (plan) setSelectedPlan(plan);
    setIsDemoModalOpen(true);
  };

  const handleCloseDemo = () => {
    setIsDemoModalOpen(false);
  };

  return (
    <div id="top" className="min-h-screen flex flex-col bg-white">
      {/* Navigation Header */}
      <Header onOpenDemo={() => handleOpenDemo()} />

      <main className="flex-1">
        {/* 1. Hero Section with Product Mockup */}
        <Hero onOpenDemo={() => handleOpenDemo()} />

        {/* 2. Trust Bar (Fictional Company Logos) */}
        <TrustBar />

        {/* 3. Problem -> Solution Section */}
        <Problems />

        {/* 4. Core Features Bento Grid */}
        <Features />

        {/* 5. Deep-dive: AI + Human Hybrid Synergy */}
        <AIHuman />

        {/* 6. Step-by-step: How it Works */}
        <HowItWorks />

        {/* 7. Integrations (WhatsApp, APIs, Webhooks, CRMs) */}
        <Integrations />

        {/* 8. Fictional Analytics Metrics */}
        <Analytics />

        {/* 9. Interactive Practical Use Cases */}
        <UseCases />

        {/* 10. Pricing Plans */}
        <Pricing onSelectPlan={(plan) => handleOpenDemo(plan)} />

        {/* 11. Testimonials */}
        <Testimonials />

        {/* 12. FAQ Accordion */}
        <FAQ />

        {/* 13. Final CTA Banner */}
        <FinalCTA onOpenDemo={() => handleOpenDemo()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Demonstration & Lead Capture Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={handleCloseDemo}
        defaultPlan={selectedPlan}
      />
    </div>
  );
}

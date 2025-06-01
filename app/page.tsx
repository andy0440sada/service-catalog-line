import { HeroSection } from "@/components/hero-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { FlowSection } from "@/components/flow-section"
import { ComparisonSection } from "@/components/comparison-section"
import { FaqSection } from "@/components/faq-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { TemplateSelection } from "@/components/template-selection"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <TemplateSelection />
        <CaseStudiesSection />
        <FlowSection />
        <ComparisonSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}

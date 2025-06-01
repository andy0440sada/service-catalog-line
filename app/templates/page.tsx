import { TemplateSelection } from "@/components/template-selection"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TemplatesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <TemplateSelection />
      </main>
      <Footer />
    </div>
  )
}

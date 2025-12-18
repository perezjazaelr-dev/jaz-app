import { AllSection } from "@/sections/all-section"
import ScrollToSection from "@/components/scroll-to-section"

export default function ExperiencePage() {
  return (
    <main className="min-h-screen pt-16 bg-muted/30">
      <AllSection />
      <ScrollToSection id="experience" />
    </main>
  )
}

import { Navigation } from "@/components/navigation"
import { AllSection } from "@/sections/all-section"
import { Footer } from "@/components/footer"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation is included here to allow jumping between sections */}
      <Navigation />
      <div className="pt-20"> {/* Add padding-top to account for fixed navbar */}
        <AllSection />
      </div>
      <Footer />
    </main>
  )
}
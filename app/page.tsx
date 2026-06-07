import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/sections/hero-section"
import { AboutSection } from "@/sections/about-section"
import { TechStackSection } from "@/sections/tech-stack-section"
import { ProjectsSection } from "@/sections/projects-section"
import { ExperienceSection } from "@/sections/experience-section"
import { GitHubSection } from "@/sections/github-section"
import { ContactSection } from "@/sections/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* The Navigation needs to find these sections on the page.
        By rendering them all here, the ID lookups (e.g. #about) will succeed.
      */}
      <Navigation />
      
      {/* Sections stacked vertically */}
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <ProjectsSection />
      <ExperienceSection />
      <GitHubSection />
      <ContactSection />
      
      <Footer />
    </main>
  )
}
"use client"

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
    <main className="min-h-screen">
      <Navigation />
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

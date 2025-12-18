"use client"

import { AboutSection } from "./about-section"
import { TechStackSection } from "./tech-stack-section"
import { ProjectsSection } from "./projects-section"
import { ExperienceSection } from "./experience-section"
import { GitHubSection } from "./github-section"
import { ContactSection } from "./contact-section"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export function AllSection() {
  return (
    <div className="flex flex-col w-full">
      <Navigation />
      {/* Sections are stacked without gaps to allow backgrounds to merge seamlessly */}
      <AboutSection />
      <TechStackSection />
      <ProjectsSection />
      <ExperienceSection />
      <GitHubSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
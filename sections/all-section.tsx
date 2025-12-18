"use client"

import { AboutSection } from "./about-section"
import { TechStackSection } from "./tech-stack-section"
import { ProjectsSection } from "./projects-section"
import { ExperienceSection } from "./experience-section"
import { GitHubSection } from "./github-section"
import { ContactSection } from "./contact-section"

export function AllSection() {
  return (
    <div className="space-y-12">
      <AboutSection />
      <TechStackSection />
      <ProjectsSection />
      <ExperienceSection />
      <GitHubSection />
      <ContactSection />
    </div>
  )
}

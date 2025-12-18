"use client"

import { Download, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { personalInfo } from "@/data/portfolio-data"

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-6">
          <div className="inline-block animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-linear-to-br from-primary to-accent flex items-center justify-center text-6xl font-bold text-primary-foreground">
              {personalInfo.name.charAt(0)}
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-foreground animate-fade-in animation-delay-200 text-balance">
            {personalInfo.name}
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in animation-delay-400">
            {personalInfo.title}
          </p>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in animation-delay-600 text-pretty">
            {personalInfo.summary}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 animate-fade-in animation-delay-800">
            <Button size="lg" onClick={scrollToContact} className="gap-2">
              <Mail className="h-4 w-4" />
              Get in Touch
            </Button>

            <Button size="lg" variant="outline" asChild className="gap-2 bg-transparent">
              <a href={personalInfo.resumeUrl} download>
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 pt-4 animate-fade-in animation-delay-1000">
            <Button variant="ghost" size="icon" asChild className="rounded-full">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>

            <Button variant="ghost" size="icon" asChild className="rounded-full">
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>

            <Button variant="ghost" size="icon" asChild className="rounded-full">
              <a href={`mailto:${personalInfo.email}`} aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Card, CardContent } from "@/components/ui/card"
import { techStack } from "@/data/portfolio-data"
import Reveal from "@/components/reveal"

const categories = [
  { title: "Frontend", items: techStack.frontend },
  { title: "Backend", items: techStack.backend },
  { title: "Databases", items: techStack.databases },
  { title: "Tools", items: techStack.tools },
]

export function TechStackSection() {
  return (
    <section id="tech-stack" className="py-24 px-4 scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Tech Stack</h2>
            <p className="text-muted-foreground">Technologies I work with</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category) => (
              <Reveal key={category.title} direction="up" stagger={0.06}>
                <Card className="border-2 h-full hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-6">{category.title}</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {category.items.map((tech) => (
                        <div
                          key={tech.name}
                          className="flex items-center gap-3 bg-muted/50 rounded-lg px-4 py-3 transition-all hover:bg-primary/10 hover:text-primary hover:scale-105"
                        >
                          <span className="text-2xl shrink-0" aria-hidden="true">
                            {tech.icon}
                          </span>
                          <span className="text-sm font-medium truncate">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
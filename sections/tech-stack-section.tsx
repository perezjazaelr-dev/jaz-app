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
    <section id="tech-stack" className="py-20 px-4 scroll-mt-20 md:scroll-mt-24">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Tech Stack</h2>
            <p className="text-muted-foreground">Technologies I work with</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {categories.map((category) => (
              <Reveal key={category.title} direction="up" stagger={0.06}>
                <Card className="border-2">
                  <CardContent className="p-6 h-75">
                    <h3 className="text-xl font-semibold text-foreground mb-4">{category.title}</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-2 gap-3">
                      {category.items.map((tech) => (
                        <div
                          key={tech.name}
                          className="flex items-center gap-3 bg-muted rounded-lg px-4 py-3 transition-all hover:bg-accent hover:text-accent-foreground"
                        >
                          <span className="text-2xl" aria-hidden="true">
                            {tech.icon}
                          </span>
                          <span className="text-sm font-medium">{tech.name}</span>
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

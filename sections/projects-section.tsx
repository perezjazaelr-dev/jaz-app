"use client"

import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { projects } from "@/data/portfolio-data"
import Image from "next/image"
import Reveal from "@/components/reveal"

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 bg-muted/30 scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">My Projects</h2>
            <p className="text-muted-foreground">Featured work and personal projects</p>
          </div>

          <Reveal stagger={0.08}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div key={project.id} className="w-full h-full">
                  <Card className="border-2 flex flex-col h-full overflow-hidden group hover:border-primary/50 transition-colors">
                    <div className="relative h-48 bg-muted overflow-hidden">
                      <Image
                        src={project.imageUrl || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    <CardHeader>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription className="leading-relaxed line-clamp-3">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="flex-1 flex flex-col gap-4">
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3 pt-4">
                        <Button variant="outline" size="sm" asChild className="flex-1 bg-transparent hover:bg-muted">
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                        <Button variant="default" size="sm" asChild className="flex-1">
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Demo
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
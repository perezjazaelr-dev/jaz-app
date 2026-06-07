"use client";

import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/portfolio-data";
import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { motion } from "framer-motion";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative py-24 px-4 bg-muted/20 scroll-mt-20 overflow-hidden"
    >
      {/* Background glow blob */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-primary/5 dark:bg-primary/10 glow-blob rounded-full" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="space-y-12">
          
          {/* Section Header */}
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
              My Projects
            </h2>
            <p className="text-muted-foreground text-sm uppercase tracking-widest font-semibold">
              Featured work and personal projects
            </p>
            <div className="w-12 h-1 bg-primary mx-auto rounded-full mt-2" />
          </div>

          <Reveal direction="up" stagger={0.08} duration={0.6}>
            {/* Grid centered and optimized for project count */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {projects.map((project) => (
                <div key={project.id} className="w-full h-full">
                  <Card className="glass-card flex flex-col h-full overflow-hidden group">
                    
                    {/* Project Image Panel */}
                    <div className="relative h-52 bg-muted overflow-hidden border-b border-border/40">
                      <Image
                        src={project.imageUrl || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-[0.9]"
                        sizes="(max-width: 768px) 100vw, 450px"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <CardHeader className="space-y-2 pb-4">
                      <CardTitle className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="leading-relaxed text-sm text-muted-foreground line-clamp-3 min-h-[4.5rem]">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="flex-1 flex flex-col gap-5 pt-0">
                      {/* Tech Stack Badges */}
                      <div className="flex flex-wrap gap-1.5 mt-auto">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="bg-primary/5 text-primary border border-primary/10 text-[11px] font-bold px-2.5 py-0.5 rounded-full select-none"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="flex gap-3 pt-2">
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="flex-1 bg-transparent border-border hover:bg-primary/5 hover:text-primary hover:border-primary/20 transition-all font-semibold"
                        >
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                        <Button
                          variant="default"
                          size="sm"
                          asChild
                          className="flex-1 font-semibold shadow-md shadow-primary/5"
                        >
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
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
  );
}
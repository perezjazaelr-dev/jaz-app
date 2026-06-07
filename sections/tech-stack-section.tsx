"use client";

import { Card, CardContent } from "@/components/ui/card";
import { techStack } from "@/data/portfolio-data";
import { Reveal } from "@/components/reveal";
import { motion } from "framer-motion";

const categories = [
  { title: "Frontend", items: techStack.frontend },
  { title: "Backend", items: techStack.backend },
  { title: "Databases", items: techStack.databases },
  { title: "Tools", items: techStack.tools },
];

export function TechStackSection() {
  return (
    <section
      id="tech-stack"
      className="relative py-24 px-4 scroll-mt-20 overflow-hidden"
    >
      {/* Background glow blob */}
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/5 dark:bg-primary/10 glow-blob rounded-full" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="space-y-12">
          
          {/* Section Header */}
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
              Tech Stack
            </h2>
            <p className="text-muted-foreground text-sm uppercase tracking-widest font-semibold">
              Technologies I work with
            </p>
            <div className="w-12 h-1 bg-primary mx-auto rounded-full mt-2" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category) => (
              <Reveal key={category.title} direction="up" stagger={0.05} duration={0.5}>
                <Card className="glass-card h-full flex flex-col justify-between">
                  <CardContent className="p-6 sm:p-8">
                    <h3 className="text-xl font-bold text-foreground mb-6 border-b border-border/50 pb-2 tracking-wide uppercase">
                      {category.title}
                    </h3>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {category.items.map((tech) => (
                        <motion.div
                          key={tech.name}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          className="flex items-center gap-3 bg-muted/40 border border-border/30 rounded-xl px-4 py-3 cursor-default select-none shadow-xs hover:bg-primary/5 hover:border-primary/20 hover:text-primary transition-all duration-300"
                        >
                          <span className="text-xl shrink-0" aria-hidden="true">
                            {tech.icon}
                          </span>
                          <span className="text-sm font-semibold truncate">
                            {tech.name}
                          </span>
                        </motion.div>
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
  );
}
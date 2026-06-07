"use client";

import { Card, CardContent } from "@/components/ui/card";
import { aboutMe } from "@/data/portfolio-data";
import { Reveal } from "@/components/reveal";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 px-4 bg-muted/20 scroll-mt-20 overflow-hidden"
    >
      {/* Background glow blob */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] h-[300px] bg-primary/5 dark:bg-primary/10 glow-blob rounded-full" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="space-y-12">
          
          {/* Section Header */}
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
              About Me
            </h2>
            <p className="text-muted-foreground text-sm uppercase tracking-widest font-semibold">
              Get to know me better
            </p>
            <div className="w-12 h-1 bg-primary mx-auto rounded-full mt-2" />
          </div>

          <Reveal direction="up" duration={0.6}>
            <Card className="glass-card overflow-hidden">
              <CardContent className="p-8 md:p-10">
                <div className="space-y-8">
                  {/* Bio Description */}
                  <div className="text-muted-foreground leading-relaxed text-base sm:text-lg space-y-4">
                    {aboutMe.description.split("\n\n").map((paragraph, index) => (
                      <p key={index} className="text-pretty">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Core Values Section */}
                  <div className="pt-6 border-t border-border/65">
                    <h3 className="text-lg font-bold text-foreground mb-4 tracking-wide uppercase text-center md:text-left">
                      Core Values
                    </h3>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {aboutMe.values.map((value, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ y: -4, scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 300, damping: 15 }}
                          className="flex items-center justify-center bg-primary/5 border border-primary/10 text-foreground dark:text-primary-foreground/90 rounded-xl px-4 py-4 text-center text-sm font-semibold shadow-sm hover:bg-primary/10 hover:border-primary/20 transition-all cursor-default"
                        >
                          {value}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                </div>
              </CardContent>
            </Card>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
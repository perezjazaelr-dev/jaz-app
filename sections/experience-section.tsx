"use client";

import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { experience } from "@/data/portfolio-data";
import { Reveal } from "@/components/reveal";
import { motion } from "framer-motion";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative py-24 px-4 scroll-mt-20 overflow-hidden"
    >
      {/* Background glow blob */}
      <div className="absolute top-1/2 right-1/4 translate-x-1/2 w-[350px] h-[350px] bg-indigo-500/5 dark:bg-indigo-500/10 glow-blob rounded-full" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="space-y-12">
          
          {/* Section Header */}
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
              Experience & Education
            </h2>
            <p className="text-muted-foreground text-sm uppercase tracking-widest font-semibold">
              My professional journey
            </p>
            <div className="w-12 h-1 bg-primary mx-auto rounded-full mt-2" />
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Elegant vertical timeline line on the left */}
            <div className="absolute left-6 md:left-8 top-2 bottom-2 w-0.5 bg-border/60" />

            <div className="space-y-8">
              {experience.map((item, index) => {
                const isWork = item.type === "work";

                return (
                  <Reveal key={item.id} direction="up" delay={index * 0.05} duration={0.55}>
                    <div className="relative flex items-start pl-16 md:pl-20">
                      
                      {/* Timeline dot circle on top of line */}
                      <div className="absolute left-0.5 md:left-2.5 w-11 h-11 rounded-full border border-border bg-background shadow-md flex items-center justify-center z-10">
                        <div
                          className={`w-9 h-9 rounded-full flex items-center justify-center ${
                            isWork
                              ? "bg-primary/10 text-primary"
                              : "bg-indigo-500/10 text-indigo-500"
                          }`}
                        >
                          {isWork ? (
                            <Briefcase className="h-4.5 w-4.5" />
                          ) : (
                            <GraduationCap className="h-4.5 w-4.5" />
                          )}
                        </div>
                      </div>

                      {/* Content Card on the right */}
                      <Card className="glass-card w-full">
                        <CardContent className="p-5 sm:p-6">
                          <div className="space-y-3">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5">
                              <div>
                                <h3 className="text-lg font-bold text-foreground">
                                  {item.title}
                                </h3>
                                <p className="text-sm font-semibold text-primary/90">
                                  {item.organization}
                                </p>
                              </div>

                              <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium bg-muted/50 border border-border/20 px-2.5 py-1 rounded-full h-fit w-fit">
                                <Calendar className="h-3 w-3" />
                                {item.startDate} - {item.endDate}
                              </div>
                            </div>

                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <MapPin className="h-3.5 w-3.5 text-muted-foreground/80" />
                              {item.location}
                            </div>

                            <p className="text-sm text-muted-foreground leading-relaxed border-t border-border/30 pt-3 text-pretty">
                              {item.description}
                            </p>
                          </div>
                        </CardContent>
                      </Card>

                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
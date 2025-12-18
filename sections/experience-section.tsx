"use client"

import { Briefcase, GraduationCap, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { experience } from "@/data/portfolio-data"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Experience & Education</h2>
            <p className="text-muted-foreground">My professional journey</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-ml-px" />

            <div className="space-y-12">
              {experience.map((item, index) => {
                const isWork = item.type === "work"
                const isLeft = index % 2 === 0

                return (
                  <div
                    key={item.id}
                    className={`relative flex items-start md:items-center ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline dot */}
                    <div
                      className={`absolute left-8 md:left-1/2 w-4 h-4 rounded-full border-4 border-background z-10 md:-ml-2 ${
                        isWork ? "bg-primary" : "bg-accent"
                      }`}
                    />

                    {/* Content card */}
                    <div className={`flex-1 ml-20 md:ml-0 ${isLeft ? "md:pr-12" : "md:pl-12"}`}>
                      <Card className="border-2">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div
                              className={`rounded-lg p-3 ${
                                isWork ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"
                              }`}
                            >
                              {isWork ? <Briefcase className="h-5 w-5" /> : <GraduationCap className="h-5 w-5" />}
                            </div>

                            <div className="flex-1 space-y-3">
                              <div>
                                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                                <p className="text-sm font-medium text-primary">{item.organization}</p>
                              </div>

                              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <MapPin className="h-3.5 w-3.5" />
                                  {item.location}
                                </span>
                                <span className="font-medium">
                                  {item.startDate} - {item.endDate}
                                </span>
                              </div>

                              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Spacer for desktop alternating layout */}
                    <div className="hidden md:block flex-1" />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

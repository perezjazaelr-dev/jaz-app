"use client"

import { Card, CardContent } from "@/components/ui/card"
import { aboutMe } from "@/data/portfolio-data"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">About Me</h2>
            <p className="text-muted-foreground">Get to know me better</p>
          </div>

          <Card className="border-2">
            <CardContent className="p-6 md:p-8">
              <div className="space-y-6">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  {aboutMe.description.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="pt-4 border-t border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Core Values</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {aboutMe.values.map((value, index) => (
                      <div
                        key={index}
                        className="bg-primary/10 text-primary rounded-lg px-4 py-3 text-center text-sm font-medium"
                      >
                        {value}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

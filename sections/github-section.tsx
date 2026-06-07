"use client";

import { Github, Star, GitFork, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useGitHubStats } from "@/hooks/use-github-stats";
import { personalInfo } from "@/data/portfolio-data";
import { GitHubCalendar } from "react-github-calendar";
import { Reveal } from "@/components/reveal";
import { motion } from "framer-motion";

export function GitHubSection() {
  const username = personalInfo.github.split("/").pop() || "";
  const stats = useGitHubStats(username);

  return (
    <section
      id="github"
      className="relative py-24 px-4 bg-muted/20 scroll-mt-20 overflow-hidden"
    >
      {/* Background glow blob */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] bg-primary/5 dark:bg-primary/10 glow-blob rounded-full" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="space-y-12">
          
          {/* Section Header */}
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
              GitHub Activity
            </h2>
            <p className="text-muted-foreground text-sm uppercase tracking-widest font-semibold">
              Open source contributions and public work
            </p>
            <div className="w-12 h-1 bg-primary mx-auto rounded-full mt-2" />
          </div>

          {/* GitHub Calendar Card */}
          <Reveal direction="up" duration={0.6}>
            <Card className="glass-card overflow-hidden">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col items-center justify-center space-y-6">
                  <h3 className="text-lg font-bold text-foreground flex items-center gap-2 uppercase tracking-wider">
                    <Github className="h-5 w-5 text-primary" />
                    Contribution Calendar
                  </h3>
                  
                  <div className="w-full flex justify-center overflow-hidden py-2">
                    <div className="calendar-fit w-full max-w-full flex justify-center">
                      <GitHubCalendar
                        username={username}
                        blockSize={12}
                        blockMargin={4}
                        fontSize={14}
                        theme={{
                          light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
                          dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
                        }}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Reveal>

          {/* Github Stats Cards */}
          {stats.loading ? (
            <Card className="glass-card">
              <CardContent className="p-12">
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
                </div>
              </CardContent>
            </Card>
          ) : stats.error ? (
            <Card className="glass-card">
              <CardContent className="p-12">
                <div className="text-center text-muted-foreground font-semibold">
                  {stats.error}
                </div>
              </CardContent>
            </Card>
          ) : (
            <Reveal direction="up" stagger={0.06} duration={0.55}>
              <div className="grid md:grid-cols-3 gap-6">
                
                {/* Repos Card */}
                <Card className="glass-card hover:-translate-y-1 transition-all">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-12 h-12 mx-auto bg-primary/10 text-primary rounded-xl flex items-center justify-center shadow-inner">
                      <BookOpen className="h-6 w-6" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-3xl font-extrabold text-foreground tracking-tight">
                        {stats.totalRepos}
                      </div>
                      <div className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">
                        Public Repositories
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Stars Card */}
                <Card className="glass-card hover:-translate-y-1 transition-all">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-12 h-12 mx-auto bg-amber-500/10 text-amber-500 rounded-xl flex items-center justify-center shadow-inner">
                      <Star className="h-6 w-6" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-3xl font-extrabold text-foreground tracking-tight">
                        {stats.totalStars}
                      </div>
                      <div className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">
                        Total Stars
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Forks Card */}
                <Card className="glass-card hover:-translate-y-1 transition-all">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-12 h-12 mx-auto bg-indigo-500/10 text-indigo-500 rounded-xl flex items-center justify-center shadow-inner">
                      <GitFork className="h-6 w-6" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-3xl font-extrabold text-foreground tracking-tight">
                        {stats.totalForks}
                      </div>
                      <div className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">
                        Total Forks
                      </div>
                    </div>
                  </CardContent>
                </Card>

              </div>
            </Reveal>
          )}

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center pt-4"
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-bold hover:underline transition-all"
            >
              <Github className="h-5 w-5" />
              View Full GitHub Profile
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
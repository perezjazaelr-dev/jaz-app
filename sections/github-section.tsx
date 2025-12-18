"use client"

import { Github, Star, GitFork, BookOpen } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useGitHubStats } from "@/hooks/use-github-stats"
import { personalInfo } from "@/data/portfolio-data"
import { GitHubCalendar } from "react-github-calendar"

export function GitHubSection() {
  const username = personalInfo.github.split("/").pop() || ""
  const stats = useGitHubStats(username)

  return (
    <section id="github" className="py-24 px-4 bg-muted/30 scroll-mt-20">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">GitHub Activity</h2>
            <p className="text-muted-foreground">Open source contributions and public work</p>
          </div>

          <Card className="border-2 overflow-hidden bg-background">
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col items-center justify-center space-y-6">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Github className="h-5 w-5" />
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
                        light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
                        dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                      }}
                    />
                  </div>
                </div> 
              </div>
            </CardContent>
          </Card>

          {stats.loading ? (
            <Card className="border-2 bg-background">
              <CardContent className="p-12">
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
                </div>
              </CardContent>
            </Card>
          ) : stats.error ? (
            <Card className="border-2 bg-background">
              <CardContent className="p-12">
                <div className="text-center text-muted-foreground">{stats.error}</div>
              </CardContent>
            </Card>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-2 bg-background hover:border-primary/40 transition-colors">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 mx-auto bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-foreground">{stats.totalRepos}</div>
                    <div className="text-sm text-muted-foreground">Public Repositories</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 bg-background hover:border-accent/40 transition-colors">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 mx-auto bg-accent/10 text-accent rounded-lg flex items-center justify-center">
                    <Star className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-foreground">{stats.totalStars}</div>
                    <div className="text-sm text-muted-foreground">Total Stars</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 bg-background hover:border-primary/40 transition-colors">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 mx-auto bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                    <GitFork className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-foreground">{stats.totalForks}</div>
                    <div className="text-sm text-muted-foreground">Total Forks</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          <div className="text-center">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium hover:text-primary/80 transition-colors"
            >
              <Github className="h-5 w-5" />
              View Full GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
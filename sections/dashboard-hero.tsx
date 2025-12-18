"use client";

import type React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useGitHubStats } from "@/hooks/use-github-stats";
import {
  personalInfo,
  aboutMe,
  techStack,
  projects,
  experience,
} from "@/data/portfolio-data";
import {
  Mail,
  Github,
  Linkedin,
  Download,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Star,
  GitFork,
  FolderGit2,
  ArrowRight,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { GitHubCalendar } from "react-github-calendar";

export function DashboardHero() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const githubUsername = personalInfo.github.split("/").pop() || "";
  const githubStats = useGitHubStats(githubUsername);

  // Show only the last 4 months in the Dashboard contribution calendar
  const fourMonthsAgo = new Date();
  fourMonthsAgo.setMonth(fourMonthsAgo.getMonth() - 4);
  fourMonthsAgo.setHours(0, 0, 0, 0);

  // Responsive calendar block size (smaller blocks on narrow screens)
  const [calendarBlockSize, setCalendarBlockSize] = useState(12);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 420) setCalendarBlockSize(6);
      else if (w < 640) setCalendarBlockSize(8);
      else setCalendarBlockSize(12);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-muted/30 pt-16">
      <div className="max-w-300 mx-auto px-4 py-6 space-y-4">
        {/* Main Profile Card */}
        <Card className="overflow-hidden relative">
          {/* Profile Content placed FIRST to be behind */}
<div className="pt-20 md:pt-48 px-6 pb-6"> 
    {/* pt-20 on small screens, pt-48 on larger to match banner height - reduced so header can overlap */}

            {/* Mobile compact header (LinkedIn-like) - visible only on small screens */}
            <div className="md:hidden bg-card/80 rounded-lg p-3 mt-10 mb-4 relative z-20">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-full border-2 border-background bg-blue-500 flex items-center justify-center text-2xl font-bold text-primary-foreground">
                  {personalInfo.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h1 className="text-lg font-semibold truncate">{personalInfo.name}</h1>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-dashed text-xs text-primary">
                      <ShieldCheck className="w-3 h-3" />
                      <span className="hidden sm:inline">Add verification badge</span>
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground truncate">{personalInfo.title}</p>
                  {personalInfo.education && (
                    <p className="text-sm text-muted-foreground mt-1 truncate">{personalInfo.education}</p>
                  )}
                  <p className="text-xs text-muted-foreground mt-1">Mandaluyong City, Metromanila <a href={`mailto:${personalInfo.email}`} className="underline">Contact info</a></p>
                </div>
              </div>

            </div>

            {/* Desktop / tablet header - hidden on mobile */}
            <div className="hidden md:flex items-end gap-6 mt-10 md:-mt-20 mb-4 relative z-10">
              <div className="w-28 h-28 mt-10 md:w-40 md:h-40 rounded-full border-2 md:border-4 border-background bg-blue-500 flex items-center justify-center text-4xl md:text-6xl font-bold text-primary-foreground shadow-xl">
                {personalInfo.name.charAt(0)}
              </div>
              <div className="mb-4 flex-1">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                  {personalInfo.name}
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground">
                  {personalInfo.title}
                </p>
                <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                  <MapPin className="w-4 h-4" />
                  Mandaluyong City, Metromanila
                </p>
              </div>
              <div className="mb-4 flex flex-col sm:flex-row sm:items-center gap-2">
                <Button asChild className="w-full sm:w-auto">
                  <a href={`mailto:${personalInfo.email}`}>
                    <Mail className="w-4 h-4 mr-2" />
                    Contact
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full sm:w-auto">
                  <a href={personalInfo.resumeUrl} download>
                    <Download className="w-4 h-4 mr-2" />
                    Resume
                  </a>
                </Button>
              </div>
            </div>

            {/* Bio and Social Links */}
            <div className="space-y-4">
              <p className="text-base max-w-3xl">{personalInfo.summary}</p>
              <div className="flex gap-2">
                <Button asChild variant="ghost" size="sm">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button asChild variant="ghost" size="sm">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Banner placed LAST with absolute positioning to sit ON TOP of the background part of the content */}
          <div className="h-48 absolute top-0 left-0 right-0 z-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('/bg-banner.jpg')` }}
              role="img"
              aria-label="Profile banner"
            />
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Main Content Column */}
          <div className="md:col-span-8 col-span-1 space-y-4">
            {/* About Section */}
            <Card className="p-6 space-y-4">
              <h2 className="text-xl font-bold">About</h2>
              <div className="space-y-3 text-sm leading-relaxed">
                {aboutMe.description.split("\n\n").map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
              <div className="pt-4 border-t">
                <h3 className="text-sm font-semibold mb-3">Core Values</h3>
                <div className="flex flex-wrap gap-2">
                  {aboutMe.values.map((value) => (
                    <Badge key={value} variant="secondary">
                      {value}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>

            {/* Projects Section */}
            <Card className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Featured Projects</h2>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/projects">
                    See all projects <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
              <div className="space-y-4">
                {projects.map((project) => (
                  <Card
                    key={project.id}
                    className="p-4 hover:shadow-lg transition-shadow overflow-hidden"
                  >
                    <div className="flex flex-col md:flex-row gap-4 items-start">
                      <div className="w-full md:w-32 h-48 md:h-32 shrink-0 relative">
                        <img
                          src={project.imageUrl || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>

                      <div className="flex-1 space-y-2 min-w-0">
                        <h3 className="font-bold text-lg">{project.title}</h3>
                        <p className="text-sm text-muted-foreground truncate">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {project.techStack.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex gap-2 pt-2">
                          <Button asChild size="sm" variant="outline">
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="w-4 h-4 mr-2" />
                              Code
                            </a>
                          </Button>
                          <Button asChild size="sm">
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>

            {/* Experience Section */}
            <Card className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Experience</h2>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/experience">
                    See all <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
              <div className="space-y-4">
                {experience.slice(0, 3).map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div
                      className={`p-3 rounded-lg h-fit ${
                        item.type === "work"
                          ? "bg-primary/10"
                          : "bg-secondary/10"
                      }`}
                    >
                      {item.type === "work" ? (
                        <Briefcase className="w-6 h-6 text-primary" />
                      ) : (
                        <GraduationCap className="w-6 h-6 text-secondary-foreground" />
                      )}
                    </div>
                    <div className="flex-1 pb-4 border-b last:border-0">
                      <h3 className="font-bold text-base">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {item.organization}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {item.startDate} - {item.endDate}
                      </p>
                      <p className="text-sm mt-2">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar Column */}
          <div className="md:col-span-4 col-span-1 space-y-4">
            {/* GitHub Stats */}
            <Card className="p-5 space-y-4">
              <div className="flex items-center gap-2">
                <Github className="w-5 h-5 text-primary" />
                <h2 className="text-base font-bold">GitHub Stats</h2>
              </div>
              {/* heats calendar */}
              <Card className="border-2 overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center justify-center space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <Github className="h-5 w-5" />
                      Contribution Calendar
                    </h3>
                    <div className="w-full flex justify-center overflow-hidden py-2">
                      <div className="calendar-fit w-full max-w-full">
                        <GitHubCalendar
                          username={githubUsername}
                          blockSize={calendarBlockSize}
                          blockMargin={4}
                          fontSize={14}
                          transformData={(data: any[]) =>
                            data.filter(
                              (d) => new Date(d.date) >= fourMonthsAgo
                            )
                          }
                          theme={{
                            light: [
                              "#ebedf0",
                              "#9be9a8",
                              "#40c463",
                              "#30a14e",
                              "#216e39",
                            ],
                            dark: [
                              "#161b22",
                              "#0e4429",
                              "#006d32",
                              "#26a641",
                              "#39d353",
                            ],
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              {githubStats.loading ? (
                <div className="flex items-center justify-center h-24">
                  <p className="text-sm text-muted-foreground">Loading...</p>
                </div>
              ) : githubStats.error ? (
                <div className="flex items-center justify-center h-24">
                  <p className="text-sm text-muted-foreground">
                    {githubStats.error}
                  </p>
                </div>
              ) : (
                <>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <FolderGit2 className="w-5 h-5 text-primary" />
                        <span className="text-sm">Repositories</span>
                      </div>
                      <span className="text-xl font-bold">
                        {githubStats.totalRepos}
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Star className="w-5 h-5 text-primary" />
                        <span className="text-sm">Stars</span>
                      </div>
                      <span className="text-xl font-bold">
                        {githubStats.totalStars}
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <GitFork className="w-5 h-5 text-primary" />
                        <span className="text-sm">Forks</span>
                      </div>
                      <span className="text-xl font-bold">
                        {githubStats.totalForks}
                      </span>
                    </div>
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full bg-transparent"
                  >
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View GitHub Profile
                    </a>
                  </Button>
                </>
              )}
            </Card>

            {/* Tech Stack */}
            <Card className="p-5 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-base font-bold">Skills</h2>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/skills">
                    See all <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </div>
              <div className="space-y-3 text-sm">
                <div>
                  <h3 className="text-xs font-semibold text-muted-foreground mb-2">
                    FRONTEND
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    {techStack.frontend.slice(0, 4).map((tech) => (
                      <Badge
                        key={tech.name}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tech.icon} {tech.name}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-muted-foreground mb-2">
                    BACKEND
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    {techStack.backend.slice(0, 4).map((tech) => (
                      <Badge
                        key={tech.name}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tech.icon} {tech.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            {/* Contact Form */}
            <Card className="p-5 space-y-4">
              <h2 className="text-base font-bold">Get In Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-sm">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-sm">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-sm">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={4}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

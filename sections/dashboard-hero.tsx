"use client";

import type React from "react";
import Link from "next/link";
import { useState } from "react";
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
  <div className="pt-48 px-6 pb-6"> 
    {/* pt-48 matches the banner height to push text down, but the div itself starts at the top */}
    
    {/* Avatar overlapping banner */}
    <div className="flex items-end gap-6 -mt-10 mb-4 relative z-10">
      <div className="w-40 h-40 rounded-full border-4 border-background bg-blue-500 flex items-center justify-center text-6xl font-bold text-primary-foreground shadow-xl">
        {personalInfo.name.charAt(0)}
      </div>
      <div className="mb-4 flex-1">
        <h1 className="text-3xl font-bold">{personalInfo.name}</h1>
        <p className="text-xl text-muted-foreground">
          {personalInfo.title}
        </p>
        <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
          <MapPin className="w-4 h-4" />
          San Francisco, CA
        </p>
      </div>
      <div className="mb-4 flex gap-2">
        <Button asChild>
          <a href={`mailto:${personalInfo.email}`}>
            <Mail className="w-4 h-4 mr-2" />
            Contact
          </a>
        </Button>
        <Button asChild variant="outline">
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

        <div className="grid grid-cols-12 gap-4">
          {/* Main Content Column */}
          <div className="col-span-8 space-y-4">
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
                    className="p-4 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex gap-4">
                      <img
                        src={project.imageUrl || "/placeholder.svg"}
                        alt={project.title}
                        className="w-32 h-32 object-cover rounded-lg shrink-0"
                      />
                      <div className="flex-1 space-y-2">
                        <h3 className="font-bold text-lg">{project.title}</h3>
                        <p className="text-sm text-muted-foreground">
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
          <div className="col-span-4 space-y-4">
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
                          blockSize={12}
                          blockMargin={4}
                          fontSize={14}
                          transformData={(data: any[]) => data.filter(d => new Date(d.date) >= fourMonthsAgo)}
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

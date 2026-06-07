"use client";

import type React from "react";
import { useState } from "react";
import { Send, Mail, Linkedin, Github, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { personalInfo } from "@/data/portfolio-data";
import { Reveal } from "@/components/reveal";
import { motion } from "framer-motion";

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-4 scroll-mt-20 md:scroll-mt-24 overflow-hidden"
    >
      {/* Background glow blob */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-primary/5 dark:bg-primary/10 glow-blob rounded-full" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="space-y-12">
          
          {/* Section Header */}
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
              Get in Touch
            </h2>
            <p className="text-muted-foreground text-sm uppercase tracking-widest font-semibold">
              Let&apos;s work together on your next project
            </p>
            <div className="w-12 h-1 bg-primary mx-auto rounded-full mt-2" />
          </div>

          <Reveal direction="up" duration={0.6}>
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Contact Form Card */}
              <Card className="glass-card">
                <CardContent className="p-6 sm:p-8">
                  <form suppressHydrationWarning onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="rounded-xl border-border/50 bg-background/50 focus-visible:ring-primary/45"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="rounded-xl border-border/50 bg-background/50 focus-visible:ring-primary/45"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project..."
                        rows={5}
                        className="rounded-xl border-border/50 bg-background/50 focus-visible:ring-primary/45 resize-none"
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full rounded-xl font-bold shadow-lg shadow-primary/10" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Info Sidebar */}
              <div className="space-y-6">
                
                {/* Information Card */}
                <Card className="glass-card">
                  <CardContent className="p-6 sm:p-8 space-y-6">
                    <h3 className="text-lg font-bold tracking-wide text-foreground uppercase border-b border-border/40 pb-2">
                      Contact Information
                    </h3>

                    <div className="space-y-4">
                      {/* Email Link */}
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="flex items-center gap-4 text-muted-foreground hover:text-primary hover:translate-x-1 transition-all group"
                      >
                        <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform shadow-inner">
                          <Mail className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-xs font-bold uppercase tracking-widest text-foreground">Email</div>
                          <div className="text-sm font-semibold truncate max-w-[200px] sm:max-w-xs">{personalInfo.email}</div>
                        </div>
                      </a>

                      {/* LinkedIn Link */}
                      <a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 text-muted-foreground hover:text-primary hover:translate-x-1 transition-all group"
                      >
                        <div className="w-10 h-10 bg-indigo-500/10 text-indigo-500 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform shadow-inner">
                          <Linkedin className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-xs font-bold uppercase tracking-widest text-foreground">LinkedIn</div>
                          <div className="text-sm font-semibold">Connect with me</div>
                        </div>
                      </a>

                      {/* GitHub Link */}
                      <a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 text-muted-foreground hover:text-primary hover:translate-x-1 transition-all group"
                      >
                        <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform shadow-inner">
                          <Github className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-xs font-bold uppercase tracking-widest text-foreground">GitHub</div>
                          <div className="text-sm font-semibold">View my work</div>
                        </div>
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* Resume Download Box */}
                <Card className="glass-card bg-primary/5 dark:bg-primary/10 border-primary/20 hover:border-primary/40 transition-colors">
                  <CardContent className="p-6 sm:p-8 text-center space-y-4">
                    <h3 className="text-lg font-bold text-foreground">Download My Resume</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                      Get a comprehensive overview of my technical expertise, projects, and work history.
                    </p>
                    <Button asChild variant="secondary" className="w-full rounded-xl font-bold shadow-md">
                      <a href={personalInfo.resumeUrl} download>
                        <Download className="h-4 w-4 mr-2" />
                        Download Resume
                      </a>
                    </Button>
                  </CardContent>
                </Card>

              </div>

            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}

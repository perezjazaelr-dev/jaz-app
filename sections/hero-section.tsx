"use client";

import { Download, Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolio-data";
import { useTheme } from "@/context/theme-context";
import Image from "next/image";
import { motion } from "framer-motion";

export function HeroSection() {
  const { theme } = useTheme();
  const avatarSrc =
    theme === "dark"
      ? personalInfo.avatarDark ?? personalInfo.avatar
      : personalInfo.avatarLight ?? personalInfo.avatar;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-24 pb-12 bg-background"
    >
      {/* Premium Background Ambient Glow Blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-primary/10 dark:bg-primary/20 glow-blob rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] bg-indigo-500/10 dark:bg-indigo-500/15 glow-blob rounded-full" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold tracking-wider uppercase"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Available for Freelance & Full-time Roles
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">{personalInfo.name}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl sm:text-3xl font-bold text-muted-foreground"
            >
              {personalInfo.title}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed text-pretty"
            >
              {personalInfo.summary}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <Button size="lg" onClick={() => scrollToSection("contact")} className="gap-2 shadow-lg shadow-primary/10">
                <Mail className="h-4 w-4" />
                Get in Touch
              </Button>

              <Button size="lg" variant="outline" asChild className="gap-2 bg-transparent">
                <a href={personalInfo.resumeUrl} download>
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-3 pt-6"
            >
              <Button variant="ghost" size="icon" asChild className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>

              <Button variant="ghost" size="icon" asChild className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>

              <Button variant="ghost" size="icon" asChild className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
                <a href={`mailto:${personalInfo.email}`} aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Avatar Representation */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 aspect-square flex items-center justify-center"
            >
              {/* Outer decorative glowing ring */}
              <div className="absolute inset-0 rounded-full border border-primary/20 bg-linear-to-tr from-primary/10 to-indigo-500/10 animate-float opacity-70" />
              
              {/* Inner container */}
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background shadow-2xl glass-card flex items-center justify-center p-1">
                {avatarSrc ? (
                  <Image
                    src={avatarSrc}
                    alt={`${personalInfo.name} Portrait`}
                    fill
                    className="object-cover rounded-full"
                    priority
                  />
                ) : (
                  <div className="w-full h-full rounded-full bg-linear-to-br from-primary to-indigo-600 flex items-center justify-center text-7xl font-bold text-primary-foreground">
                    {personalInfo.name.charAt(0)}
                  </div>
                )}
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer"
        onClick={() => scrollToSection("about")}
      >
        <span className="text-xs tracking-widest text-muted-foreground font-medium uppercase">Scroll</span>
        <ArrowDown className="h-4 w-4 text-muted-foreground animate-bounce" />
      </motion.div>
    </section>
  );
}

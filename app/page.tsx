"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/sections/hero-section"
import { AllSection } from "@/sections/all-section"
import { Footer } from "@/components/footer"
import { DashboardHero } from "@/sections/dashboard-hero"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <DashboardHero />
      <Footer />
    </main>
  )
}

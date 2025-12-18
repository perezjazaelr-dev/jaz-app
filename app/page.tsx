"use client"

import { Navigation } from "@/components/navigation" // Optional: Keep if you want nav on dashboard too
import { DashboardHero } from "@/sections/dashboard-hero"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <DashboardHero />
      <Footer />
    </main>
  )
}
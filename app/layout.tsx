import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/context/theme-context"
// Import the Provider and the Toaster manager
import { ToastProvider } from "@/components/ui/toast"
import { Toast } from "@/components/ui/toast"
import HydrationLoading from "@/components/hydration-loading"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jaz's Portfolio",
  description:
    "Portfolio showcasing my work as a full-stack developer specializing in React, Next.js, and modern web technologies.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider>
          {/* Wrap everything in ToastProvider */}
          <ToastProvider>
            <HydrationLoading />
            {children}
            {/* Toaster renders the actual popups */}
            <Toast />
          </ToastProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
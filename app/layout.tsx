import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/context/theme-context"
// Import the Provider and the Toaster manager
import { ToastProvider } from "@/components/ui/toast"
import { Toast } from "@/components/ui/toast"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Professional Portfolio | Full Stack Developer",
  description:
    "Portfolio showcasing my work as a full-stack developer specializing in React, Next.js, and modern web technologies.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
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
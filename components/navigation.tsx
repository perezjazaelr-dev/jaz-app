"use client"

import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { ThemeToggle } from "./theme-toggle"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const router = useRouter()
  const pathname = usePathname()

  const scrollToSection = (href: string) => {
    try {
      const selector = href.startsWith("#") ? href : `#${href.replace(/^\//, "")}`
      const id = selector.replace("#", "")
      const element = document.getElementById(id) || document.querySelector(selector)

      if (element && element instanceof HTMLElement) {
        // If the element is inside a scrollable container (not the document), scroll that container.
        let ancestor: HTMLElement | null = element.parentElement
        while (ancestor) {
          const style = getComputedStyle(ancestor)
          if (/(auto|scroll)/.test(style.overflowY)) break
          ancestor = ancestor.parentElement
        }

        if (ancestor && ancestor !== document.documentElement && ancestor !== document.body) {
          const rect = element.getBoundingClientRect()
          const ancestorRect = ancestor.getBoundingClientRect()
          const top = rect.top - ancestorRect.top + ancestor.scrollTop
          ancestor.scrollTo({ top, behavior: "smooth" })
        } else {
          element.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      } else {
        console.warn("Navigation: no element found for", href)
      }
    } catch (err) {
      console.error("Navigation scroll error:", err)
    }
  }

  const navigateToSection = (href: string) => {
    const selector = href.startsWith("#") ? href : `#${href.replace(/^\//, "")}`

    // If we're not on the home page, navigate to it with hash, then attempt to scroll after navigation.
    if (pathname !== "/") {
      // Use replace to avoid history spam when clicking multiple nav items repeatedly
      router.push(`/${selector}`)
      // Small delay to allow navigation + hydration; if it fails, scrollToSection will warn
      setTimeout(() => scrollToSection(selector), 300)
    } else {
      scrollToSection(selector)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigateToSection("#hero")}
            className="text-xl font-bold text-foreground hover:text-primary transition-colors"
          >
            Portfolio
          </button>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => navigateToSection(item.href)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}

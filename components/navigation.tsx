"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
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

  // Define the path where the sections live
  const SECTIONS_PATH = "/portfolio"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
  }, [mobileOpen])

  const router = useRouter()
  const pathname = usePathname()

  const scrollToSection = (href: string) => {
    try {
      const selector = href.startsWith("#") ? href : `#${href.replace(/^\//, "")}`
      const id = selector.replace("#", "")
      const element = document.getElementById(id) || document.querySelector(selector)

      if (element && element instanceof HTMLElement) {
        // Offset for fixed header
        const headerOffset = 80
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.scrollY - headerOffset
  
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        })
      }
    } catch (err) {
      console.error("Navigation scroll error:", err)
    }
  }

  const navigateToSection = (href: string) => {
    const selector = href.startsWith("#") ? href : `#${href.replace(/^\//, "")}`

    // If we are NOT on the portfolio page, go there first
    if (pathname !== SECTIONS_PATH) {
      router.push(`${SECTIONS_PATH}/${selector}`)
      // logic to scroll after navigation is handled by browser behavior on hash change
    } else {
      // If we are already on the portfolio page, just scroll
      scrollToSection(selector)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-5 md:py-6">
        <div className="grid grid-cols-3 items-center">
          {/* Left: Brand */}
          <div className="flex items-center">
            <button
              onClick={() => navigateToSection("#hero")}
              className="text-xl md:text-2xl font-bold text-foreground hover:text-primary transition-colors"
            >
              Jaz's
            </button>
          </div>

          {/* Center: Nav items (centered) */}
          <div className="flex justify-center">
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => navigateToSection(item.href)}
                  className="w-30 text-sm md:text-base font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Controls */}
          <div className="flex items-center justify-end gap-4">
            <ThemeToggle />

            {/* Mobile menu button (right-aligned) */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                className="p-2 rounded-md hover:bg-muted/40"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

          {/* Mobile overlay menu */}
          <div
            aria-hidden={!mobileOpen}
            className={`fixed inset-0 z-40 md:hidden ${mobileOpen ? "pointer-events-auto" : "pointer-events-none"}`}
          >
            <div
              className={`absolute inset-0 bg-background/80 backdrop-blur-sm transition-opacity ${
                mobileOpen ? "opacity-100" : "opacity-0"
              }`}
              onClick={() => setMobileOpen(false)}
            />

            <div
              className={`relative z-50 flex flex-col items-center justify-center h-full transition-opacity ${
                mobileOpen ? "opacity-100" : "opacity-0"
              }`}
            >
              <button
                aria-label="Close menu"
                className="absolute top-6 right-6 p-2 rounded-md hover:bg-muted/40"
                onClick={() => setMobileOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>

              <nav className="space-y-6 text-center flex justify-center items-center flex-col" >
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => {
                      setMobileOpen(false)
                      // small delay to allow overlay to close before scrolling
                      setTimeout(() => navigateToSection(item.href), 120)
                    }}
                    className=" gap-4 text-2xl font-regular text-foreground text-center"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>
      </div>
    </nav>
  )
}
"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import { ThemeToggle } from "./theme-toggle"

const navItems = [
  { label: "About", href: "/about" },
  { label: "Tech Stack", href: "/tech-stack" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const router = useRouter()
  const pathname = usePathname()

  // Ensure this matches your main page path. usually "/"
  const SECTIONS_PATH = "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
  }, [mobileOpen])

  // Helper function to handle the actual scrolling calculation
  const smoothScrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const headerOffset = 80 // Height of your fixed navbar
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    } else {
      console.warn(`Element with id "${id}" not found. Check your page sections!`)
    }
  }

  const navigateToSection = async (href: string) => {
    setMobileOpen(false) // Close mobile menu if open

    // Normalize dashboard/home clicks
    if (href === "/" || href === "#" || href === "#dashboard") {
      if (pathname !== SECTIONS_PATH) {
        try {
          await router.push(SECTIONS_PATH)
        } catch (err) {
          console.error("Navigation push error:", err)
        }
      }
      // Wait a bit then scroll to top or dashboard
      setTimeout(() => {
        if (href === "#dashboard") smoothScrollTo("dashboard")
        else window.scrollTo({ top: 0, behavior: "smooth" })
      }, 120)
      return
    }

    // If the href is a full route (starts with /), just navigate there
    if (href.startsWith("/")) {
      const dest = href
      const id = dest.replace(/^\/+/, "").split("/")[0] // derive a section id from the route

      // If we're already on the exact route — scroll to the id or top
      if (pathname === dest) {
        if (id) {
          setTimeout(() => smoothScrollTo(id), 80)
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" })
        }
      } else if (pathname === SECTIONS_PATH) {
        // Special case: we're on the home AllSection page — update the URL without triggering a route transition
        try {
          window.history.pushState({}, "", dest)
        } catch (e) {
          console.debug("history.pushState failed, falling back to router.push", e)
          await router.push(dest)
        }

        // Scroll to the section immediately and highlight
        if (id) {
          setTimeout(() => smoothScrollTo(id), 80)
          const el = document.getElementById(id)
          if (el instanceof HTMLElement) {
            el.classList.add("ring-4", "ring-primary", "ring-opacity-40")
            setTimeout(() => el.classList.remove("ring-4", "ring-primary", "ring-opacity-40"), 900)
          }
        }
      } else {
        // Default: navigate to the route and poll for the element
        await router.push(dest)

        if (id) {
          const maxWait2 = 2000
          const interval2 = 100
          let waited2 = 0
          const poll2 = setInterval(() => {
            const el = document.getElementById(id)
            if (el instanceof HTMLElement) {
              clearInterval(poll2)
              smoothScrollTo(id)
              el.classList.add("ring-4", "ring-primary", "ring-opacity-40")
              setTimeout(() => el.classList.remove("ring-4", "ring-primary", "ring-opacity-40"), 900)
            } else if ((waited2 += interval2) >= maxWait2) {
              clearInterval(poll2)
              smoothScrollTo(id)
            }
          }, interval2)
        }
      }

      return
    }

    // Backward compatibility: handle hashes if present (shouldn't be needed now)
    const selector = href.startsWith("#") ? href : `#${href.replace(/^\//, "")}`
    const id = selector.replace("#", "")

    if (pathname === SECTIONS_PATH) {
      try {
        if (typeof window !== "undefined") window.location.hash = selector
      } catch (err) {
        console.debug("Could not set location.hash:", err)
      }

      smoothScrollTo(id)
      return
    }

    try {
      await router.push(`${SECTIONS_PATH}${selector}`)
      if (typeof window !== "undefined") window.location.hash = selector
    } catch (err) {
      console.error("Navigation push error:", err)
    }

    // Poll for element (max 2s)
    const maxWait = 2000
    const interval = 100
    let waited = 0
    const poll = setInterval(() => {
      const el = document.getElementById(id)
      if (el instanceof HTMLElement) {
        clearInterval(poll)
        smoothScrollTo(id)
        el.classList.add("ring-4", "ring-primary", "ring-opacity-40")
        setTimeout(() => el.classList.remove("ring-4", "ring-primary", "ring-opacity-40"), 900)
      } else if ((waited += interval) >= maxWait) {
        clearInterval(poll)
        smoothScrollTo(id)
      }
    }, interval)
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
              onClick={() => navigateToSection("/")}
              className="text-xl md:text-2xl font-bold text-foreground hover:text-primary transition-colors"
            >
              Jaz's
            </button>
          </div>

          {/* Center: Nav items (Desktop) */}
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

            {/* Mobile menu button */}
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
          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-background/80 backdrop-blur-sm transition-opacity ${
              mobileOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => setMobileOpen(false)}
          />

          {/* Menu Content */}
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

            <nav className="space-y-6 text-center flex justify-center items-center flex-col">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => navigateToSection(item.href)}
                  className="gap-4 text-2xl font-regular text-foreground text-center"
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
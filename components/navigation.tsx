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

  // The main page where all sections exist
  const SECTIONS_PATH = "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [mobileOpen])

  const scrollToElement = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const navigateToSection = async (href: string) => {
    setMobileOpen(false) // Close mobile menu

    // 1. Handle "Home" or "Dashboard" links
    if (href === "/" || href === "#" || href === "#dashboard") {
      if (pathname !== SECTIONS_PATH) {
        await router.push(SECTIONS_PATH)
        setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100)
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
      return
    }

    // 2. Extract the target Section ID from the href
    // FIX: Changed 'let' to 'const' to satisfy linter
    const targetId = href.replace(/^\//, "").replace("#", "")

    if (!targetId) return

    // 3. Navigate and Scroll
    if (pathname === SECTIONS_PATH) {
      scrollToElement(targetId)
    } else {
      await router.push(SECTIONS_PATH)
      
      const checkExist = setInterval(() => {
        const element = document.getElementById(targetId)
        if (element) {
          scrollToElement(targetId)
          clearInterval(checkExist)
        }
      }, 100)
      
      setTimeout(() => clearInterval(checkExist), 2000)
    }
  }

  return (
    <nav
      suppressHydrationWarning
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-5 md:py-6">
        <div className="grid grid-cols-3 items-center">
          {/* Brand */}
          <div className="flex items-center">
            <button
              onClick={() => navigateToSection("/")}
              className="text-xl md:text-2xl font-bold text-foreground hover:text-primary transition-colors"
            >
              {/* FIX: Escaped apostrophe (Jaz's -> Jaz&apos;s) */}
              Jaz&apos;s
            </button>
          </div>

          {/* Desktop Navigation */}
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

          {/* Right Side: Theme Toggle & Mobile Menu */}
          <div className="flex items-center justify-end gap-4">
            <ThemeToggle />

            {/* Mobile Menu Button */}
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

        {/* Mobile Menu Overlay */}
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

          {/* Menu Items */}
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

            <nav className="space-y-6 text-center flex flex-col items-center">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => navigateToSection(item.href)}
                  className="text-2xl font-regular text-foreground hover:text-primary transition-colors"
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
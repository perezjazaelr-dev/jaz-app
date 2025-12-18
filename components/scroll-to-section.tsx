"use client"

import { useEffect } from "react"

type Props = {
  id: string
  offset?: number
}

export default function ScrollToSection({ id, offset = 80 }: Props) {
  useEffect(() => {
    if (!id || typeof window === "undefined") return

    const smoothScrollTo = (el: HTMLElement) => {
      const headerOffset = offset
      const elementPosition = el.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - headerOffset

      window.scrollTo({ top: offsetPosition, behavior: "smooth" })
      el.classList.add("ring-4", "ring-primary", "ring-opacity-40")
      setTimeout(() => el.classList.remove("ring-4", "ring-primary", "ring-opacity-40"), 900)
    }

    // If element is already present, scroll immediately
    const immediate = document.getElementById(id)
    if (immediate instanceof HTMLElement) {
      // Small timeout to let the layout stabilize
      setTimeout(() => smoothScrollTo(immediate), 60)
      return
    }

    // Otherwise poll for the element (max 2s)
    const maxWait = 2000
    const interval = 100
    let waited = 0
    const poll = setInterval(() => {
      const el = document.getElementById(id)
      if (el instanceof HTMLElement) {
        clearInterval(poll)
        smoothScrollTo(el)
      } else if ((waited += interval) >= maxWait) {
        clearInterval(poll)
      }
    }, interval)

    return () => {
      // cleanup if unmounted early
      try {
        clearInterval((poll as unknown) as number)
      } catch (e) {
        // noop
      }
    }
  }, [id, offset])

  return null
}

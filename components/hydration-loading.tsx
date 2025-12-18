"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function HydrationLoading() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    // Keep overlay visible briefly while hydration completes
    const t = setTimeout(() => setShow(false), 300)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-9999 flex items-center justify-center bg-background"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, ease: "linear", duration: 1 }}
            className="h-10 w-10 rounded-full border-2 border-primary border-t-transparent"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

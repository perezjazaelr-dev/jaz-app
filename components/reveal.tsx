"use client"

import * as React from "react"
import { motion, Variants } from "framer-motion"

export interface RevealProps {
  children: React.ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right"
  stagger?: number
  delay?: number
  duration?: number
}

const directionOffset = (dir: RevealProps["direction"]) => {
  switch (dir) {
    case "up":
      return { x: 0, y: 12 }
    case "down":
      return { x: 0, y: -12 }
    case "left":
      return { x: 12, y: 0 }
    case "right":
      return { x: -12, y: 0 }
    default:
      return { x: 0, y: 12 }
  }
}

export function Reveal({
  children,
  className,
  direction = "up",
  stagger = 0.06,
  delay = 0,
  duration = 0.55,
}: RevealProps) {
  const offset = directionOffset(direction)

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  }

  const item: Variants = {
    hidden: { opacity: 0, x: offset.x, y: offset.y },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration } },
  }

  // Wrap children, ensuring all direct children are motion-enabled
  const enhancedChildren = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child

    return (
      <motion.div variants={item} className="w-full">
        {child}
      </motion.div>
    )
  })

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {enhancedChildren}
    </motion.div>
  )
}

export default Reveal

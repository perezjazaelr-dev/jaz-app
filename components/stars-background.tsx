"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@/context/theme-context";

interface Star {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  color: string;
}

export function StarsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Star[] = [];
    const mouse = { x: -1000, y: -1000, active: false };

    // Configure stars based on theme
    const isDark = theme === "dark";
    const starCount = typeof window !== "undefined" && window.innerWidth < 768 ? 60 : 120;
    const connectionDistance = 110;
    const gravityForce = 0.08; // how strong the gravity pull is
    const friction = 0.98; // slow down velocity over time

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      stars = [];
      const starColors = isDark
        ? ["#ffffff", "#a5b4fc", "#c084fc", "#818cf8"] // White, blue, purple, indigo
        : ["#1e293b", "#4f46e5", "#7c3aed", "#2563eb"]; // Dark slate, dark indigo, purple, blue

      for (let i = 0; i < starCount; i++) {
        const radius = Math.random() * 1.5 + 0.5;
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3, // slow baseline drift
          vy: (Math.random() - 0.5) * 0.3,
          radius,
          alpha: Math.random() * 0.5 + 0.3,
          color: starColors[Math.floor(Math.random() * starColors.length)],
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
      mouse.active = false;
    };

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Initial setup
    resizeCanvas();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Update and Draw Stars
      stars.forEach((star) => {
        // Apply gravity if mouse is active and near
        if (mouse.active) {
          const dx = mouse.x - star.x;
          const dy = mouse.y - star.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 250) {
            // Accelerate star towards cursor (gravity pull)
            const force = (250 - distance) / 250 * gravityForce;
            star.vx += (dx / distance) * force;
            star.vy += (dy / distance) * force;
          }
        }

        // Apply friction
        star.vx *= friction;
        star.vy *= friction;

        // Add standard drift
        star.x += star.vx + (Math.random() - 0.5) * 0.05;
        star.y += star.vy + (Math.random() - 0.5) * 0.05;

        // Bounce/Wrap borders
        if (star.x < 0) {
          star.x = canvas.width;
        } else if (star.x > canvas.width) {
          star.x = 0;
        }

        if (star.y < 0) {
          star.y = canvas.height;
        } else if (star.y > canvas.height) {
          star.y = 0;
        }

        // Draw star dot
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = star.alpha;
        ctx.fill();
      });

      // 2. Draw Constellation lines (connections between close stars)
      ctx.globalAlpha = isDark ? 0.08 : 0.05;
      ctx.strokeStyle = isDark ? "#c084fc" : "#4f46e5";
      ctx.lineWidth = 0.5;

      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const s1 = stars[i];
          const s2 = stars[j];
          const dx = s1.x - s2.x;
          const dy = s1.y - s2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(s1.x, s1.y);
            ctx.lineTo(s2.x, s2.y);
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: theme === "dark" ? "screen" : "multiply" }}
    />
  );
}

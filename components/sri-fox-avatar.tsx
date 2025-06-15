"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export function SriFoxAvatar() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  // This is a placeholder for the 3D avatar
  // In a real implementation, this would use Three.js to render a 3D fox model
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const isDark = theme === "dark"

    // Set canvas dimensions
    canvas.width = 300
    canvas.height = 300

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw a placeholder fox avatar
    ctx.fillStyle = isDark ? "#2d2d2d" : "#f4f4f4"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw fox face
    ctx.beginPath()
    ctx.fillStyle = isDark ? "#8b5cf6" : "#7c3aed"

    // Head
    ctx.ellipse(150, 150, 80, 70, 0, 0, Math.PI * 2)
    ctx.fill()

    // Ears
    ctx.beginPath()
    ctx.fillStyle = isDark ? "#a78bfa" : "#8b5cf6"
    ctx.moveTo(100, 100)
    ctx.lineTo(80, 50)
    ctx.lineTo(120, 80)
    ctx.fill()

    ctx.beginPath()
    ctx.moveTo(200, 100)
    ctx.lineTo(220, 50)
    ctx.lineTo(180, 80)
    ctx.fill()

    // Face
    ctx.beginPath()
    ctx.fillStyle = isDark ? "#c4b5fd" : "#a78bfa"
    ctx.ellipse(150, 160, 50, 45, 0, 0, Math.PI * 2)
    ctx.fill()

    // Eyes
    ctx.beginPath()
    ctx.fillStyle = isDark ? "#1e1e1e" : "#000000"
    ctx.ellipse(130, 140, 8, 12, 0, 0, Math.PI * 2)
    ctx.ellipse(170, 140, 8, 12, 0, 0, Math.PI * 2)
    ctx.fill()

    // Nose
    ctx.beginPath()
    ctx.fillStyle = isDark ? "#1e1e1e" : "#000000"
    ctx.ellipse(150, 170, 10, 6, 0, 0, Math.PI * 2)
    ctx.fill()

    // Add text
    ctx.fillStyle = isDark ? "#ffffff" : "#000000"
    ctx.font = "16px Inter, sans-serif"
    ctx.textAlign = "center"
    ctx.fillText("Sri - 3D Avatar", 150, 250)
    ctx.font = "12px Inter, sans-serif"
    ctx.fillText("(Placeholder for Three.js model)", 150, 270)
  }, [theme])

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <canvas ref={canvasRef} className="rounded-full shadow-lg" width={300} height={300} />
    </div>
  )
}

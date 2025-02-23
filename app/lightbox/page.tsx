"use client"

import React, { useEffect, useState } from "react"
import Home from "&/home/home"

import "./page.css"

const predefinedColors = [
  { h: 0, s: 100, l: 50 }, // Red
  { h: 120, s: 100, l: 50 }, // Green
  { h: 240, s: 100, l: 50 }, // Blue
  { h: 60, s: 100, l: 50 }, // Yellow
  { h: 300, s: 100, l: 50 }, // Magenta
  { h: 180, s: 100, l: 50 }, // Cyan
  { h: 0, s: 0, l: 100 }, // White
  { h: 0, s: 0, l: 0 }, // Black
]

interface Color {
  h: number
  s: number
  l: number
}

export default function Lightbox() {
  const [isActive, setIsActive] = useState(false)
  const [color, setColor] = useState<Color>({ h: 0, s: 0, l: 100 }) // Default to white
  const [predefinedColorIndex, setPredefinedColorIndex] = useState(0)

  const cycleActive = () => {
    setIsActive((prev) => !prev)
  }

  const updateColor = (key: "h" | "s" | "l", change: number) => {
    setColor((prev) => {
      let newValue = prev[key] + change
      if (key === "h") {
        newValue = (newValue + 360) % 360
      } else if (key === "l") {
        newValue = Math.round(Math.max(0, Math.min(100, newValue)))
      } else {
        newValue = Math.max(0, Math.min(100, newValue))
      }
      return { ...prev, [key]: newValue }
    })
  }

  const cyclePredefinedColor = (direction: "left" | "right") => {
    setPredefinedColorIndex((prev) => {
      if (direction === "right") {
        return (prev + 1) % predefinedColors.length
      } else {
        return prev === 0 ? predefinedColors.length - 1 : prev - 1
      }
    })
    setColor(predefinedColors[predefinedColorIndex])
  }

  const randomizeColor = () => {
    setColor({
      h: Math.floor(Math.random() * 360),
      s: Math.floor(Math.random() * 101),
      l: Math.floor(Math.random() * 101),
    })
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowRight":
          cyclePredefinedColor("right")
          break
        case "ArrowLeft":
          cyclePredefinedColor("left")
          break
        case "ArrowUp":
          updateColor("l", 10)
          break
        case "ArrowDown":
          updateColor("l", -10)
          break
        case "h":
          updateColor("h", 5)
          break
        case "H":
          updateColor("h", -5)
          break
        case "s":
          updateColor("s", 5)
          break
        case "S":
          updateColor("s", -5)
          break
        case "l":
          updateColor("l", 5)
          break
        case "L":
          updateColor("l", -5)
          break
        case "Enter":
          randomizeColor()
          break
        case " ":
          e.preventDefault()
          cycleActive()
          break
        default:
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get("framed") !== null) {
      setIsActive(true)
    }
  }, [])

  useEffect(() => {
    document.body.style.backgroundColor = `hsl(${color.h}, ${color.s}%, ${color.l}%)`

    return () => {
      document.body.style.backgroundColor = "white"
    }
  }, [color])

  return (
    <Home>
      <div className={`HIDE_UI ${isActive ? "active" : ""}`}>
        {!isActive && (
          <div
            style={{
              color: "white",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <p>H: {color.h}</p>
            <p>S: {color.s}</p>
            <p>L: {color.l}</p>
          </div>
        )}
      </div>
    </Home>
  )
}

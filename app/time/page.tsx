"use client"

import React, { useEffect, useState } from "react"
import Home from "&/home/home"

import Time from "./dot"
import Emoji from "./emoji"
import Plain from "./plain"

import "./page.css"

const timeComponents = [Plain, Time, Emoji]
const themes = ["black", "yellow", "default"]
const fonts = ["inter", "silk", "jet", "ibm", "default"]
type ActiveState = "none" | "dim" | "bright"

export default function TimePage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [themeIndex, setThemeIndex] = useState(0)
  const [fontIndex, setFontIndex] = useState(0)
  const activeStates: ActiveState[] = ["none", "dim", "bright"]

  const [activeState, setActiveState] = useState<ActiveState>("none")

  const cycleTheme = (direction: "up" | "down") => {
    setThemeIndex((prev) => {
      if (direction === "up") {
        return (prev + 1) % themes.length
      } else {
        return prev === 0 ? themes.length - 1 : prev - 1
      }
    })
  }

  const cycleFont = (isSpace: boolean) => {
    setFontIndex((prev) => {
      if (isSpace) {
        return (prev + 1) % fonts.length
      } else {
        return prev === 0 ? fonts.length - 1 : prev - 1
      }
    })
  }

  const cycleActive = () => {
    setIsActive((prev) => !prev)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowRight":
          setCurrentIndex((prev) => (prev + 1) % timeComponents.length)
          break
        case "ArrowLeft":
          setCurrentIndex((prev) =>
            prev === 0 ? timeComponents.length - 1 : prev - 1
          )
          break
        case "ArrowUp":
          cycleTheme("up")
          break
        case "ArrowDown":
          cycleTheme("down")
          break
        case "Enter":
          cycleFont(false)
          break
        case " ": // Space
          e.preventDefault() // Prevent page scroll
          cycleActive()
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  // ... your existing inactivity timer code ...
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get("framed") !== null) {
      setIsActive(true)
    }
  }, [])

  // ... your existing inactivity timer code ...

  const CurrentComponent = timeComponents[currentIndex]

  // const CurrentComponent = timeComponents[currentIndex]

  return (
    <Home>
      <div
        className={`time-container ${isActive ? "active" : ""} theme-${themes[themeIndex]} font-${fonts[fontIndex]}`}
      >
        <CurrentComponent />
      </div>
    </Home>
  )
}

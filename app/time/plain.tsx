"use client"

import { useEffect, useState } from "react"

import "./plain.css"

interface TimeFormat {
  hours: string
  minutes: string
  seconds: string
}

export default function Plain() {
  const [timeFormat, setTimeFormat] = useState<TimeFormat>(() => {
    // Initialize with current time
    const now = new Date()
    return {
      hours: now.getHours().toString().padStart(2, "0"),
      minutes: now.getMinutes().toString().padStart(2, "0"),
      seconds: now.getSeconds().toString().padStart(2, "0"),
    }
  })

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTimeFormat({
        hours: now.getHours().toString().padStart(2, "0"),
        minutes: now.getMinutes().toString().padStart(2, "0"),
        seconds: now.getSeconds().toString().padStart(2, "0"),
      })
    }

    // Only set interval, initial value is set in useState
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="plain">
      <span className="hours">{timeFormat.hours}</span>
      <span className="separator">:</span>
      <span className="minutes">{timeFormat.minutes}</span>
      <span className="separator">:</span>
      <span className="seconds">{timeFormat.seconds}</span>
    </div>
  )
}

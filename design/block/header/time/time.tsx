"use client"

import { useEffect, useState } from "react"

export default function Time() {
  const [time, setTime] = useState("")

  useEffect(() => {
    const timer = setInterval(() => {
      const stockholmTime = new Date().toLocaleString("sv-SE", {
        timeZone: "Europe/Stockholm",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
      const formattedTime = `${stockholmTime}`
      setTime(formattedTime)
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return <time dateTime={time}>{time || "00:00:00"}</time>
}

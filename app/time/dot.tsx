"use client"

import React, { useEffect, useState } from "react"

import "./dot.css"

function DigitalNumber({ number }: { number: number }) {
  const patterns = {
    0: [
      "<div></div><div></div><div></div>",
      "<div></div><span></span><div></div>",
      "<div></div><span></span><div></div>",
      "<div></div><span></span><div></div>",
      "<div></div><div></div><div></div>",
    ],
    1: [
      "<span></span><div></div><span></span>",
      "<span></span><div></div><span></span>",
      "<span></span><div></div><span></span>",
      "<span></span><div></div><span></span>",
      "<span></span><div></div><span></span>",
    ],
    2: [
      "<div></div><div></div><div></div>",
      "<span></span><span></span><div></div>",
      "<div></div><div></div><div></div>",
      "<div></div><span></span><span></span>",
      "<div></div><div></div><div></div>",
    ],
    3: [
      "<div></div><div></div><div></div>",
      "<span></span><span></span><div></div>",
      "<div></div><div></div><div></div>",
      "<span></span><span></span><div></div>",
      "<div></div><div></div><div></div>",
    ],
    4: [
      "<div></div><span></span><div></div>",
      "<div></div><span></span><div></div>",
      "<div></div><div></div><div></div>",
      "<span></span><span></span><div></div>",
      "<span></span><span></span><div></div>",
    ],
    5: [
      "<div></div><div></div><div></div>",
      "<div></div><span></span><span></span>",
      "<div></div><div></div><div></div>",
      "<span></span><span></span><div></div>",
      "<div></div><div></div><div></div>",
    ],
    6: [
      "<div></div><div></div><div></div>",
      "<div></div><span></span><span></span>",
      "<div></div><div></div><div></div>",
      "<div></div><span></span><div></div>",
      "<div></div><div></div><div></div>",
    ],
    7: [
      "<div></div><div></div><div></div>",
      "<span></span><span></span><div></div>",
      "<span></span><span></span><div></div>",
      "<span></span><span></span><div></div>",
      "<span></span><span></span><div></div>",
    ],
    8: [
      "<div></div><div></div><div></div>",
      "<div></div><span></span><div></div>",
      "<div></div><div></div><div></div>",
      "<div></div><span></span><div></div>",
      "<div></div><div></div><div></div>",
    ],
    9: [
      "<div></div><div></div><div></div>",
      "<div></div><span></span><div></div>",
      "<div></div><div></div><div></div>",
      "<span></span><span></span><div></div>",
      "<div></div><div></div><div></div>",
    ],
  }

  return (
    <div className="digital">
      {(patterns[number as keyof typeof patterns] as string[]).map(
        (line, index) => (
          <div key={index} dangerouslySetInnerHTML={{ __html: line }} />
        )
      )}
    </div>
  )
}

export default function Time() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  const hours = time.getHours()
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()

  return (
    <section className="timer">
      <DigitalNumber number={Math.floor(hours / 10)} />
      <DigitalNumber number={hours % 10} />
      <DigitalNumber number={Math.floor(minutes / 10)} />
      <DigitalNumber number={minutes % 10} />
      <DigitalNumber number={Math.floor(seconds / 10)} />
      <DigitalNumber number={seconds % 10} />
    </section>
  )
}

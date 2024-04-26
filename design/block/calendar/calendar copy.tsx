"use client"

import React, { useContext, useState } from "react"

import "@/calendar/calendar.css"

export default function Calendar() {
  const [year, setYear] = useState(new Date().getFullYear())

  const getDaysInMonth = (month: number) =>
    new Date(year, month + 1, 0).getDate()

  const getFirstDayOfMonth = (month: number) => {
    const day = new Date(year, month, 1).getDay()
    return day === 0 ? 6 : day - 1 // adjust for week starting with Monday
  }

  const formatNumber = (num: number) => (num < 10 ? `0${num}` : `${num}`)

  const months = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ]
  const weekdays = ["M", "T", "W", "T", "F", "S", "S"]

  return (
    <div className="calendar">
      {months.map((month, i) => {
        if (i === 0) {
          return (
            <section key={month}>
              <span>{month}</span>
              {weekdays.map((weekday, j) => (
                <span key={j}>{weekday}</span>
              ))}
              {weekdays.map((weekday, j) => (
                <span key={j}>{weekday}</span>
              ))}
              {weekdays.map((weekday, j) => (
                <span key={j}>{weekday}</span>
              ))}
              {weekdays.map((weekday, j) => (
                <span key={j}>{weekday}</span>
              ))}
              {weekdays.map((weekday, j) => (
                <span key={j}>{weekday}</span>
              ))}
            </section>
          )
        } else {
          const daysInMonth = getDaysInMonth(i - 1)
          const firstDayOfMonth = getFirstDayOfMonth(i - 1)
          return (
            <section key={month}>
              <span>{month}</span>
              {Array(daysInMonth + firstDayOfMonth)
                .fill(null)
                .map((_, j) => {
                  if (j < firstDayOfMonth) {
                    return <span key={j}>•</span>
                  } else {
                    return (
                      <span key={j}>
                        {formatNumber(j - firstDayOfMonth + 1)}
                      </span>
                    )
                  }
                })}
            </section>
          )
        }
      })}
    </div>
  )
}

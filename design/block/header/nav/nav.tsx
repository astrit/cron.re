"use client"

import { usePathname } from "next/navigation"
import Link from "@/link/link"

import Time from "../time/time"

import "./nav.css"

const Links = [
  { href: "/", label: "C R ＊ N", title: "Cron" },
  { href: "/time", label: "Time", title: "Lime" },
  { href: "/lightbox", label: "Lightbox", title: "Lightbox" },
]

export default function Nav() {
  const current = usePathname()
  return (
    <nav>
      {Links.map(({ href, label, title }) => (
        <Link
          key={href}
          href={href}
          data-title={title}
          className={current === href ? "active" : ""}
        >
          {label}
        </Link>
      ))}
    </nav>
  )
}

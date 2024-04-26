"use client"

import { ReactNode } from "react"
import { usePathname, useRouter } from "next/navigation"
import Nav from "@/nav/nav"
import Separator from "@/separator/separator"
import Status from "@/status/status"

import "@/header/header.css"

import Link from "@/link/link"

function Left({ children }: { children: ReactNode }) {
  return <div className="sides left">{children}</div>
}

function Right({ children }: { children: ReactNode }) {
  return <div className="sides right">{children}</div>
}

export default function Header() {
  const path = usePathname()

  return (
    <header className="main-header">
      <Left>
        <Nav />
      </Left>
      <Right>
        : :
      </Right>
    </header>
  )
}

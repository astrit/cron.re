"use client"

import { ReactNode } from "react"
import { usePathname } from "next/navigation"

import Chrome from "./chrome/chrome"
import Nav from "./nav/nav"
import Raycast from "./raycast/raycast"
import Time from "./time/time"

import "./header.css"

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
        <Raycast />
        <Chrome />
      </Right>
    </header>
  )
}

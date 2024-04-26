"use client"

import React, { ReactNode, useContext, useRef } from "react"
import ClassMaker from "$/class/class"
import { Controller } from "$/provider"

import "&/main/main.css"

interface MainProps {
  children: ReactNode
}

const Main = ({ children, ...rest }: MainProps) => {
  const { loading } = useContext(Controller)
  const ref = useRef<HTMLDivElement>(null)

  const classes = ClassMaker("layout", "main", loading ? "loading" : undefined)

  return (
    <main className={classes} ref={ref} {...rest}>
      {children}
    </main>
  )
}
export default Main

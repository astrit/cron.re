import React, { ReactNode } from "react"

import "@/flex/flex.css"

interface Props {
  children: ReactNode
  center?: boolean
  middle?: boolean
}

export default function Flex({ children, center, middle }: Props) {
  let classNames = "flex"
  if (center) classNames += " center"
  if (middle) classNames += " middle"

  return <div className={classNames}>{children}</div>
}

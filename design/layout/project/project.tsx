import React, { ReactNode } from "react"

import "&/project/project.css"

interface Props {
  children: ReactNode
}

const Project = ({ children, ...rest }: Props) => {
  return (
    <div className="layout project" {...rest}>
      {children}
    </div>
  )
}
export default Project

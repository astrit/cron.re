import React, { ReactNode } from "react"

import "&/resume/resume.css"

interface Props {
  children: ReactNode
}

const Resume = ({ children, ...rest }: Props) => {
  return (
    <section className="layout resume" {...rest}>
      {children}
    </section>
  )
}
export default Resume

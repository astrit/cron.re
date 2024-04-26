import React, { ReactNode } from "react"

import "&/about/about.css"

interface Props {
  children: ReactNode
}

const About = ({ children, ...rest }: Props) => {
  return (
    <section className="layout about" {...rest}>
      {children}
    </section>
  )
}
export default About

import React, { ReactNode } from "react"

import "&/work/work.css"

interface Props {
  children: ReactNode
}

const Work = ({ children, ...rest }: Props) => {
  return (
    <section className="layout work" {...rest}>
      {children}
    </section>
  )
}

export default Work

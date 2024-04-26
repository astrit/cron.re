import React, { ReactNode } from "react"

import "&/post/post.css"

interface PostProps {
  children: ReactNode
}

const Post = ({ children, ...rest }: PostProps) => {
  return (
    <div className="layout post" {...rest}>
      {children}
    </div>
  )
}
export default Post

import React from "react"

export default function PostTemplate({ pageContext: { post } }) {
  return (
    <section>
      {post.name} - {post.author}
    </section>
  )
}

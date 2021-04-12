import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <Link to="/about/">About</Link>
      <p>What a world.</p>
    </Layout>
  )
}

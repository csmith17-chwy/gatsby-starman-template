import React from "react"
import Layout from "../components/layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact } from "@fortawesome/free-brands-svg-icons"

const AboutPage = () => (
  <Layout>
    <h3>About the Author</h3>
    <p>Welcome to my Gatsby site.</p>
    <FontAwesomeIcon icon={faReact} />
  </Layout>
)

export default AboutPage

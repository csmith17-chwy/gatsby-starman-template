import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RobotImage from "../components/robotimage"

const AboutPage = () => {
  return (
    <Layout>
      <SEO
        title="About Page"
        description="Info on the website"
        image="/logo.svg"
        pathname="/"
        // Boolean indicating whether this is an article:
        // article
      />
      <section>
        <h1>About Starman</h1>
        <RobotImage src={"/images/bubbles-callout.png"} alt={"Beep Boop"} />
        <RobotImage src={"/images/dolly-callout.png"} alt={"Beep Boop"} />
        <RobotImage src={"/images/eileen-callout.png"} alt={"Beep Boop"} />
        <div>
          <p>This is the about page. There is no content yet!</p>
          <p>
            It can be populated with pure HTML like this, and extended using all
            available Gatsby and React components.
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default AboutPage

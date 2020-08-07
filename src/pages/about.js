import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RobotImage from "../components/robotimage"

const Container = styled.section`
  margin: 2rem auto;
  max-width: 45rem;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
`

const Heading = styled.h1`
  margin: 2rem;
  text-align: center;
  font-size: 4rem;
`

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
      <Container>
        <Heading>About Starman</Heading>
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
      </Container>
    </Layout>
  )
}

export default AboutPage

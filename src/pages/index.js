import React from "react"
import Layout from "../components/layout"
import InnerSection from "../components/innerSection"
import { StaticImage } from "gatsby-plugin-image"

export default function Home() {
  return (
  <Layout>
    <InnerSection >
      <StaticImage src="../images/liz-laffitte-headshot.jpg" width={200} alt="Liz Laffitte Headshot" />
      <div>
        <p>I am a software engineer working in digital marketing.</p>
      </div>
    </InnerSection>
      <div id={`contact`}>
        Find me on LinkedIn, Twitter and GitHub. Send me an email.
      </div>
    </Layout>
    )
}

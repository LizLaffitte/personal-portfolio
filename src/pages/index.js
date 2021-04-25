import React from "react"
import Layout from "../components/layout"
import InnerSection from "../components/innerSection"
import Form from "../components/form"
import { StaticImage } from "gatsby-plugin-image"


export default function Home() {
  return (
  <Layout>
    <InnerSection sectionId="about">
      <h2>About</h2>
      
      <div class="flx">
      <StaticImage src="../images/Liz-Laffitte.png"  objectPosition="50% top" alt="Liz Laffitte Headshot" style={{minWidth:"290px", flexBasis:"37%"}} />  
          <div class="txt">
            <p>I'm passionate about helping people, building user-centric software and learning new things.</p>
            <p>I was first introduced to programming when I was tasked with building HTML emails that look good in all versions of Outlook. I was hooked! Several programming languages, frameworks and one software engineering bootcamp later, I am looking for my first full-time software engineering position.</p>
            <p>When I'm not working on a project or leaning something new, I enjoy geocaching, cross stitching and spending time with my family. </p>
          </div>
      </div>
    </InnerSection>
    <InnerSection sectionId="contact" >
      <div >
        <p style={{textAlign:"center"}}>Find me on LinkedIn, Twitter and GitHub. Send me an email.</p>
        <Form />
      </div>
      </InnerSection>
    </Layout>
    )
}

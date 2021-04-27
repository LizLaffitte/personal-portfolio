import React from "react"
import Layout from "../components/layout"
import InnerSection from "../components/innerSection"
import Form from "../components/form"
import { StaticImage } from "gatsby-plugin-image"
import Project from "../components/project"


export default function Home() {
  return (
  <Layout>
    <InnerSection sectionId="about">
      <h2>About</h2>
      
      <div class="flx">
      <StaticImage src="../images/Liz-Laffitte.png"  objectPosition="50% top" alt="Liz Laffitte Headshot" style={{minWidth:"290px", flexBasis:"37%"}} />  
          <div class="txt">
            <p>I'm passionate about helping people, building user-centric software and learning new things.</p>
            <p>I was first introduced to programming when I was tasked with building HTML emails that look good in all versions of Outlook. I was hooked. Several programming languages, frameworks and one software engineering bootcamp later, I am looking for my first full-time software engineering position.</p>
            <p>When I'm not working on a project or leaning something new, I enjoy geocaching, cross stitching and spending time with my family. </p>
          </div>
      </div>
    </InnerSection>
    <InnerSection sectionId="projects" >
      <h2>Projects</h2>
      <div class="flx">
        <Project >
          <StaticImage src="../images/dads-and-diapers.png"  />  
            <h3>Dads & Diapers</h3>
            <p>A React application designed to help parents of young children find and review public places based on the availability of changing tables. Users can add locations, view reviews and leave reviews of their own. For each location, users are asked whether changing rooms are available in mens and women's rooms, and whether they are clean and in good working order.</p>
            <a href="https://dads-and-diapers.herokuapp.com/" target="_blank">Live</a>
        </Project>
      </div>
    </InnerSection>
    <InnerSection sectionId="contact" >
    <h2>Contact</h2>
    <p>Questions? Comments? Excellent puns? Connect with me online or send me a message via the form.</p>
      <div >
        <p style={{textAlign:"center"}}>Find me on <a href="https://www.linkedin.com/in/lizlaffitte/" target="_blank" rel="noreferrer">LinkedIn</a>, <a href="https://twitter.com/MrsSquishyface" target="_blank" rel="noreferrer">Twitter</a> and <a href="https://github.com/lizlaffitte" target="_blank" rel="noreferrer">GitHub</a>.</p>
        <Form />
      </div>
      </InnerSection>

    </Layout>
    )
}

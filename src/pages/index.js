import React from "react"
import Layout from "../components/layout"
import InnerSection from "../components/innerSection"
import Form from "../components/form"
import { StaticImage  } from "gatsby-plugin-image"
import Project from "../components/project"
import { graphql } from "gatsby"



export default function Home({data}) {

  return (
  <Layout>
    <InnerSection sectionId="about">
      <h2>About</h2>
      
      <div className="flx">
      <StaticImage src="../images/Liz-Laffitte.png"  objectPosition="50% top" alt="Liz Laffitte Headshot" style={{minWidth:"200px", maxWidth:'400px'}} />  
          <div className="txt">
            <p>I'm passionate about helping people, building user-centric software and learning new things.</p>
            <p>I was first introduced to programming when I was tasked with building HTML emails that look good in all versions of Outlook. I was hooked. Several programming languages, frameworks and one software engineering bootcamp later, I am looking for my first full-time software engineering position.</p>
            <p>When I'm not working on a project or leaning something new, I enjoy geocaching, cross stitching and spending time with my family. </p>
          </div>
      </div>
    </InnerSection>
    <InnerSection sectionId="projects" bgC="#eee" >
      <h2>Projects</h2>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Project node={node} key={node.key} />
        ))}
    </InnerSection>
    <InnerSection sectionId="contact" >
    <h2>Contact</h2>
    <p style={{textAlign:`center`}}>Questions? Comments? Excellent puns? Connect with me online or send me a message via the form.</p>
      <div >
        <p style={{textAlign:"center"}}>Find me on <a href="https://www.linkedin.com/in/lizlaffitte/" target="_blank" rel="noreferrer">LinkedIn</a>, <a href="https://twitter.com/MrsSquishyface" target="_blank" rel="noreferrer">Twitter</a> and <a href="https://github.com/lizlaffitte" target="_blank" rel="noreferrer">GitHub</a>.</p>
        <Form />
      </div>
      </InnerSection>

    </Layout>
    )
}

export const query = graphql`
query MyQuery {
  allMarkdownRemark {
    edges {
      node {
        id
        internal {
          content
        }
        frontmatter {
          title
          live
          code
          featuredImage {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
}

`
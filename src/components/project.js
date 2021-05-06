import React from "react"
import { GatsbyImage, getImage  } from "gatsby-plugin-image"


export default function Project({node, key}) {
  const isDeployed = node.frontmatter.live
    return (
        <div className="portfolio-project" key={key} style={{display:`flex`, justifyContent:`space-between`}}>
          <div>
            <h3>{node.frontmatter.title}</h3>
              <p>{node.internal.content}</p>
              <div className="btn-cont">
                {isDeployed ? (
                  <a className="btn" href={node.frontmatter.live } rel="noreferrer" target="_blank">Live</a>) : <br />
                }
                <a className="btn" href={node.frontmatter.code} rel="noreferrer" target="_blank">GitHub</a>
              </div>
          </div>
          <div>
            <GatsbyImage image={getImage(node.frontmatter.featuredImage.childImageSharp.gatsbyImageData)} alt={node.frontmatter.title + "screen shot"} style={{flexBasis:`45%`, border:'1px solid #0e1917'}} objectFit='cover' />
          </div>
        </div>
    )}
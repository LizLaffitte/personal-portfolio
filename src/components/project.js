import React from "react"
import { GatsbyImage, getImage  } from "gatsby-plugin-image"


export default function Project({node, key}) {
    return (
        <div className="portfolio-project" key={key} style={{display:`flex`, justifyContent:`space-between`}}>
          <div style={{flexBasis:`45%`}}>
            <h3>{node.frontmatter.title}</h3>
              <p>{node.internal.content}</p>
              <div className="btn-cont">
                <a className="btn" href={node.frontmatter.live } rel="noreferrer" target="_blank">Live</a>
                <a className="btn" href={node.frontmatter.code} rel="noreferrer" target="_blank">GitHub</a>
                <a className="btn" rel="noreferrer" href={node.frontmatter.demo} target="_blank">Demo</a>
              </div>
          </div>
          <div style={{flexBasis:`45%`}}>
          
            <GatsbyImage image={getImage(node.frontmatter.featuredImage.childImageSharp.gatsbyImageData)} alt={node.frontmatter.title + "screen shot"} style={{flexBasis:`45%`}} objectFit='contain' />
          </div>
        </div>
    )}
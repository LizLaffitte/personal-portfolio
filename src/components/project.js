import React from "react"
import { StaticImage } from "gatsby-plugin-image"
export default function Project(props) {
    return (
        <div className="portfolio-project" style={{display:`flex`, justifyContent:`space-between`}}>
            {props.children}
        </div>
    )}
import React from "react"
import { StaticImage } from "gatsby-plugin-image"


export default function Project(props) {
    return (
        <div className="portfolio-project" style={{display:`flex`, justifyContent:`space-between`}}>
            <div style={{flexBasis:`45%`}}>
            {props.children}
            </div>
            <div style={{flexBasis:`45%`}}>

            </div>
        </div>
    )}
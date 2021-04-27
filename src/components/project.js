import React from "react"
import { StaticImage } from "gatsby-plugin-image"
export default function Project(props) {
    return (
        <div class="portfolio-project" style={{flexBasis:`45%`, fontSize:`14px`}}>
            {props.children}
        </div>
    )}
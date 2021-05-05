import React from "react"
import {Link} from "gatsby"
import { Helmet } from "react-helmet"

const ListLink = props => (
    <li style={{display:`inline-block`, marginRight:`1rem` }}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

export default function Layout({children}){
    return(
        <div id="content">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Liz Laffitte | Software Engineer | Personal Portfolio</title>
                <link rel="canonical" href="https://lizlaffitteportfolio.gatsbyjs.io/" />
            </Helmet>
            <header style={{textAlign:'center'}}>
               <div style={{padding: `.5rem 0`}}>
                    <h2>Liz Laffitte</h2>
                <hr style={{backgroundColor:`white`, height:`4px`, width:`200px`, margin:`auto`}} />
                <h3>Software Engineer</h3>
                </div>
            </header>
            <nav>
                <ul style={{listStyle: `none`,marginBottom:`0px`}}>
                    <ListLink to="#about">About</ListLink>
                    <ListLink to="#projects">Projects</ListLink>
                    <ListLink to="#contact">Contact</ListLink>

                </ul>
            </nav>
            <main>
                {children}
            </main>
            {console.log("I'm looking for a new opportunity.")}
        </div>
    )
}
import React from "react"
import {Link} from "gatsby"
import { Helmet } from "react-helmet"

const ListLink = props => (
    <li className="list-link">
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
                <meta property="og:image" content="/images/Portfolio_Image.jpg" />
            </Helmet>
            <header>
               <div>
                    <h2>Liz Laffitte</h2>
                <hr />
                <h3>Software Engineer</h3>
                </div>
            </header>
            <nav>
                <ul>
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
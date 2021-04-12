import React from "react"
import {Link} from "gatsby"

const ListLink = props => (
    <li style={{display:`inline-block`, marginRight:`1rem` }}>
        <Link to={PushSubscriptionOptions.to}>{props.children}</Link>
    </li>
)

export default function Layout({children}){
    return(
        <div>
            <header style={{ padding: `.5rem 1rem`, marginBottom: `2rem`, backgroundColor:`#94D1BE`}}>
                {/* <img src={'/Liz Laffitte - Headshot - 400px.jpg'} style={{maxWidth:`125px`, borderRadius:`100%`}} /> */}
                <Link to="/" style={{backgroundImage:`none`, textShadow:`none`}} ><h3 style={{display:`inline`, color:`#3B413C`}}>Liz Laffitte</h3></Link>
                <ul style={{listStyle: `none`, float:`right`}}>
                    <ListLink to="#about">About</ListLink>
                    <ListLink to="#contact">Contact</ListLink>
                </ul>
            </header>
            <main style={{padding: `0 1rem`}}>
                {children}
            </main>
            {console.log("I'm looking for a new opportunity.")}
        </div>
    )
}
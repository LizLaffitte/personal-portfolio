import React from "react"
import {Link} from "gatsby"

const ListLink = props => (
    <li style={{display:`inline-block`, marginRight:`1rem`}}>
        <Link to={PushSubscriptionOptions.to}>{props.children}</Link>
    </li>
)

export default function Layout({children}){
    return(
        <div style={{margin: `1rem auto`, maxWidth: 900, padding: `0 1rem`}}>
            <header style={{marginBottom: `2rem`, textAlign:`center`}}>
                <img src="" />
                <h3>Liz Laffitte</h3>
            </header>
            {children}
        </div>
    )
}
import React from "react"
import {Link} from "gatsby"

export default function Layout({children}){
    return(
        <div style={{margin: `1rem auto`, maxWidth: 900, padding: `0 1rem`}}>
            <header style={{marginBottom: `2rem`}}>
                <Link to="/"><h3 style={{display:`inline`}}>Liz Laffitte</h3></Link>
            </header>
            {children}
        </div>
    )
}
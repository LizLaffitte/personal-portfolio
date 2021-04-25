import React from "react"

export default function InnerSection({children}, props){
    return(
        <section style={{maxWidth:`960px`, margin:`auto`}} id={props.id}>
            {children}
        </section>
    )
}
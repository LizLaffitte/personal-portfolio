import React from "react"

export default function InnerSection({children}, props){
    return(
        <section style={{maxWidth:`800px`, margin:`auto`}} id={props.id}>
            {children}
        </section>
    )
}
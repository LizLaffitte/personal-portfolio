import React from "react"

export default function InnerSection( props){
    return(
        <section id={props.sectionId} class={props.sectionClasses} style={{maxWidth:`960px`, margin:`0 auto 40px`, backgroundColor:props.bgColor}}  >
            {props.children}
        </section>
    )
}
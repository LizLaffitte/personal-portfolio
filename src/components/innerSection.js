import React from "react"

export default function InnerSection( props){
    return(
        <section id={props.sectionId} class={props.sectionClasses} style={{maxWidth:`960px`, margin:`0 auto 40px`, backgroundColor:props.bgColor, borderBottom:`8px double #3a5b3d`, paddingBottom:`30px`}}  >
            {props.children}
        </section>
    )
}
import React from "react"

export default function InnerSection( props){
    return(
        <section id={props.sectionId} className={props.sectionClasses}  style={{padding:`30px 0`, backgroundColor:props.bgC}}  >
            <div style={{maxWidth:`960px`, margin:`0 auto 40px`}}>
                
             {props.children}
            </div>
        </section>
    )
}
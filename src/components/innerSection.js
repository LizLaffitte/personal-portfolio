import React from "react"

export default function InnerSection( props){
    return(
        <section id={props.sectionId} className={props.sectionClasses}  >
            <div>   
             {props.children}
            </div>
        </section>
    )
}
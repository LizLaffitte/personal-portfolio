import React from "react"

export default function InnerSection({children}, props){
    return(
        <section style={{maxWidth:`960px`, margin:`0 auto 40px`, backgrounColor:props.bgColor}} id={props.id}  >
            {children}
        </section>
    )
}
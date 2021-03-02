import React from "react"
import componentStyles from "../styles/component.module.css"

export default function Card ({children}){
    return (
        <div className={componentStyles.card} data-sal="slide-up" data-sal-duration="1000" data-sal-easing="ease">
            {children}
        </div>
    )
}
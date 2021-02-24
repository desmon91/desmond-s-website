import React from "react"
import componentStyles from "../styles/component.module.css"

export default function Card ({children}){
    return (
        <div className={componentStyles.card}>
            {children}
        </div>
    )
}
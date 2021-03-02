import React from "react"
import componentStyles from "../styles/component.module.css"

export default function Layout ({ children }){
    return (
        <div className={componentStyles.layout} >
                {children}
        </div>
        )
}
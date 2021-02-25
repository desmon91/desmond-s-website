import React from "react"
import componentStyle from '../styles/component.module.css'

export default function Container ({ children }) {
    return (
        <div className={componentStyle.container}>
            {children}
        </div>
        )
}
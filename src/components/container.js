import React from "react"

export default function Container ({ children }) {
    return (
        <div style={{width:"100%", height:"100%", display: "flex", flexDirection:"column"}}>
            {children}
        </div>
        )
}
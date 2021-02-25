import React from "react"
import {Link} from "gatsby"
import componentStyle from "../styles/component.module.css"

export default function Header () {
    return (
        <div className={componentStyle.header}>
                <div className={componentStyle.headerNav}>
                <Link to="/" className={componentStyle.linkStyle}>
                    HOME
                </Link>
                <Link to="/blog" className={componentStyle.linkStyle}>
                    BLOG
                </Link>
                </div>
        <span className={componentStyle.headerBorder}/>
        </div>
        )
}
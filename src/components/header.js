import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import {Link} from 'gatsby'
import componentStyle from "../styles/component.module.css"

export default function Header () {
    return (
        <div className={componentStyle.header}>
                <div className={componentStyle.headerNav}>
                <AniLink paintDrip to="/" className={componentStyle.linkStyle} hex="#cdf5e8">
                    HOME
                </AniLink>
                <Link to="/blog" className={componentStyle.linkStyle}>
                    BLOG
                </Link>
                </div>
        <span className={componentStyle.headerBorder}/>
        </div>
        )
}
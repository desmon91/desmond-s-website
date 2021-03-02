import React from "react"
import componentStyle from "../styles/component.module.css"

export default function BlogPost({title, date, html, tags}){
    return (
             <div className={componentStyle.blogPost}>
                  <h1 align="left"
                        data-sal="slide-left"
						data-sal-duration="1000"
						data-sal-easing="ease">{title}</h1>
                  <h3 align="left" style={{color: "grey"}}
                        data-sal="slide-right"
                        data-sal-duration="1000"
                        data-sal-delay="500"
                        data-sal-easing="ease"> {date} </h3>
                  <div className={componentStyle.bodyPost}
                        dangerouslySetInnerHTML={{ __html: html }}/>
                  {tags && tags.length ? (
                  <div style={{ marginTop: `4rem` }}>
                  Tags:&nbsp;
                  <ul style={{listStyleType: "circle"}}>
                         {tags.map((tag) => (
                    <li key={tag}>
                     {tag}
                    </li>
                    
                  ))}
                  </ul>
              </div>
            ) : null}
            </div>
        )
}

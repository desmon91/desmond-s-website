import React from "react"
import Container from "./container"
import Header from "./header"
import Layout from "./layout"
import {graphql} from "gatsby"
import componentStyle from "../styles/component.module.css"

export default function BlogPost({data}){
    const post = data.markdownRemark
    const title = post.frontmatter.title
    const date = post.frontmatter.date
    const tags = post.frontmatter.tags
    return (
        <Container>
             <Header />
             <Layout>
             <div style={{width: "600px"}}>
                  <h1 align="left">{title}</h1>
                  <h3 align="left" style={{color: "grey"}} > {date} </h3>
             <div className={componentStyle.bodyPost} dangerouslySetInnerHTML={{ __html: post.html }} />
                {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map((tag) => (
                    <li key={tag + `tag`}>
                     {tag}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            </div>
             </Layout>
        </Container>
        
        )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
      }
    }
  }
`
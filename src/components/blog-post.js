import React from "react"
import Container from "./container"
import Header from "./header"
import Layout from "./layout"
import {graphql} from "gatsby"
import componentStyle from "../styles/component.module.css"
import { Disqus } from 'gatsby-plugin-disqus'

export default function BlogPost({data}){
    const post = data.markdownRemark
    const id = post.id
    const title = post.frontmatter.title
    const date = post.frontmatter.date
    const tags = post.frontmatter.tags

    let disqusConfig = {
      identifier: id,
      title: title,
    }

    return (
        <Container>
             <Header />
             <Layout>
             <div className={componentStyle.blogPost}>
                  <h1 align="left">{title}</h1>
                  <h3 align="left" style={{color: "grey"}} > {date} </h3>
                  <div className={componentStyle.bodyPost} dangerouslySetInnerHTML={{ __html: post.html }} />
          
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
             </Layout>
             <Disqus config={disqusConfig} className={componentStyle.comment}/>
        </Container>
        
        )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark (fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
      }
    }
  }
`
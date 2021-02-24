import React from "react"
import Container from "./container"
import Header from "./header"
import Layout from "./layout"
import {graphql} from "gatsby"

export default function BlogPost({data}){
    const post = data.markdownRemark
    console.log(data)
    return (
        <Container>
             <Header />
             <Layout>
             <div style={{width: "600px", marginTop:"50px"}}>
                  <h1 align="left">{post.frontmatter.title}</h1>
                  <h3 align="left" style={{color: "grey"}} > {post.frontmatter.date} </h3>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
        date
      }
    }
  }
`
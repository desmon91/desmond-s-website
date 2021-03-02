import React from "react"
import Container from "../components/container"
import Header from "../components/header"
import Layout from "../components/layout"
import BlogPost from "../components/blog-post"
import {graphql} from "gatsby"
import componentStyle from "../styles/component.module.css"
import { Disqus } from 'gatsby-plugin-disqus'

export default function Post({data}){
    const post = data.markdownRemark
    const id = post.id
    const title = post.frontmatter.title
    const date = post.frontmatter.date
    const tags = post.frontmatter.tags
    const html = post.html
    let disqusConfig = {
      identifier: id,
      title: title,
    }

    return (
        <Container>
             <Header />
             <Layout >
             <BlogPost title={title} date={date} html={html} tags={tags} />   
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
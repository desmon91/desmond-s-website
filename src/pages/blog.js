import React from "react"
import Container from "../components/container"
import Header from "../components/header"
import Layout from "../components/layout"
import Card from "../components/card"
import { Link, graphql } from "gatsby"
import componentStyle from "../styles/component.module.css"


export default function Blog({data}){
  
    const post = data.allMarkdownRemark.edges

    return (
        <Container>
             <Header />
             <Layout>
                 {
                 post.length < 1 ? <div className={componentStyle.noPost}>NO BLOG POST YET</div> :
                 post.map(({ node })=>(
                     <Card key={node.id}>
                         <Link  to={node.fields.slug} className={componentStyle.cardLink} >
                         <img src={node.frontmatter.image} alt="" style={{width:"200px", height:"100px"}}/>
                         <div className={componentStyle.cardBodyContainer}>
                            <div className={componentStyle.cardHeader}>
                                <h2>{node.frontmatter.title}</h2>
                                <span style={{color: "grey"}}> {node.frontmatter.date} </span>
                            </div>
                            <p>{node.excerpt}</p>
                         </div>
                         </Link>
                     </Card>
                 ))
                 }
             </Layout>
        </Container>
        
        )
}


export const query = graphql`
  query {
    allMarkdownRemark (
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            image
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
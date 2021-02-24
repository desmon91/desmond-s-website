import React from "react"
import Container from "../components/container"
import Header from "../components/header"
import Layout from "../components/layout"
import Card from "../components/card"
import { Link, graphql } from "gatsby"
import componentStyle from "../styles/component.module.css"

export default function Blog({data}){
    return (
        <Container>
             <Header />
             <Layout>
                 {
                 data.allMarkdownRemark.edges.map(({ node })=>(
                     <Card key={node.id}>
                         <Link  to={node.fields.slug} className={componentStyle.linkStyle}>
                         <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="" style={{width:"200px", height:"100px"}}/>
                         <div style={{width:"100%", padding:"10px", display:"flex", justifyContent:"space-around",flexDirection:"column"}}>
                            <div style={{display:"flex", justifyContent:"space-between", flexDirection:"row"}}>
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
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
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
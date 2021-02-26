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
                         <Link  to={node.fields.slug} className={componentStyle.linkStyle} >
                         <img src={node.frontmatter.image} alt="" style={{width:"200px", height:"100px"}}/>
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
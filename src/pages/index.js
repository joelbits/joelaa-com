import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'
import frontstyle from '../styles/frontpage.module.sass'

const IndexPage = ({ data }) => {
  const { me, blogposts } = data
  return (
    <Layout>
      <SEO title="Home" keywords={[`joelaa`, `developer`, `joelaa.com`]} />
      
      <div className={frontstyle.aboutMe}>
        <div key={me.contentful_id}>
          <h3>{me.title}</h3>
          <p>{me.shortBio.shortBio}</p>
          <Img
            className={frontstyle.meImage}
            fluid={me.image.fluid} 
            srcSet={me.image.fluid.srcSetWebp}
            />
        </div>
      </div>

      <div className={frontstyle.latestBlogPosts}>
        <h3>{blogposts.edges.totalCount} Posts</h3>

        {blogposts.edges.map(({ node }) => (
          <div key={node.contentful_id} className={frontstyle.blogPost}>
            <Link to={node.slug}>
              <h4>{node.title} - {node.publishDate}</h4>
              <p>{node.body.childMarkdownRemark.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>

    </Layout>
  )
}

export default IndexPage

export const query = graphql`
query {
  me: contentfulPerson(name: { eq: "Joel AA"}) {
    contentful_id
    name
    title
    email
    github
    shortBio {
      shortBio
      childMarkdownRemark {
        html
      }
    }
    image {
      fluid(maxWidth: 700) {
        srcSetWebp
        tracedSVG
        ...GatsbyContentfulFluid_withWebp
      }
    }
  }
  blogposts: allContentfulBlogPost {
    edges {
      node {
				contentful_id
        slug
        title
        publishDate(formatString: "MMMM DD, YYYY")
        createdAt
        updatedAt
        tags
        heroImage {
          id
          fluid(maxWidth: 700) {
            srcSetWebp
          }
        }
        author {
          contentful_id
          name
          company
          title
          email
          phone
          facebook
          twitter
          github
          image {
            fluid(maxWidth: 200) {
              srcSetWebp
            }
          }
          avatar {
            fluid(maxWidth: 200) {
              srcSetWebp
            }
          }
          shortBio {
            childMarkdownRemark {
              html
            }
          }
        }
        description {
          childMarkdownRemark {
            excerpt
            html
          }
        }
        body {
          childMarkdownRemark {
            html
            excerpt
          }
        }
      }
    }
  }
}
`

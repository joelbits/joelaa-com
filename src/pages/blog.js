import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import BlogLayout from '../components/bloglayout'
import SEO from '../components/seo'
import styles from '../styles/blog.module.sass'


const Blog = ({ data }) => {
  const { blogposts } = data

  return (
    <BlogLayout>
      <SEO title="Blog" />
      <h1>Recent Blog Posts</h1>
      <div>
        {blogposts.edges && blogposts.edges.map(({ node }) => (
          <div className={styles.blogPost}>
            <Link to={node.slug}>
              <Img fluid={node.heroImage.fluid} srcSetWebp={node.heroImage.fluid.srcSetWebp} />
            </Link>
            <div className={styles.postWrapper}>
              <Link to={node.slug}><h1>{node.title}</h1></Link>
              <h4>By: {node.author.name}</h4>
              <h4>Published: {node.publishDate}</h4>
              <div className={styles.blogPostContent} dangerouslySetInnerHTML={{ __html: node.body.childMarkdownRemark.excerpt }}></div>
            </div>
          </div>
        ))}
      </div>
    </BlogLayout>
  )
}

export default Blog

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
  blogposts: allContentfulBlogPost(limit: 3, sort: { fields: publishDate, order: DESC }) {
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
          fluid(maxHeight: 700, ) {
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

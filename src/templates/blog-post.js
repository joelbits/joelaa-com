import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import styles from '../styles/blogpost.module.sass'

export default ({ data }) => {
    const post = data.contentfulBlogPost
    return (
        <Layout>
            <h1>{post.title}</h1>
            <h4>By: {post.autor}</h4>
            <h4>Published: {post.publishDate}</h4>
            <div className={styles.blogPost} dangerouslySetInnerHTML={{ __html: post.body.internal.content}}>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost(slug: { eq: $slug }) {
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
                shortBio
            }
            }
            description {
                description
            }
            body {
                body
                internal {
                    content
                }
            }
        }
    }
`
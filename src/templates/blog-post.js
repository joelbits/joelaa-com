import React from 'react'
import { graphql } from 'gatsby'
import BlogLayout from '../components/bloglayout'
import styles from '../styles/blog.module.sass'

export default ({ data }) => {
    const post = data.contentfulBlogPost
    return (
        <BlogLayout>
            <h1>{post.title}</h1>
            <h4>By: {post.author.name}</h4>
            <h4>Published: {post.publishDate}</h4>
            <div className={styles.blogPostContent} dangerouslySetInnerHTML={{ __html: post.body.childMarkdownRemark.html }}>
            </div>
        </BlogLayout>
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
                    childMarkdownRemark {
                        html
                    }
                }
            }
            description {
                childMarkdownRemark {
                    html
                }
            }
            body {
                childMarkdownRemark {
                    html
                }
            }
        }
    }
`
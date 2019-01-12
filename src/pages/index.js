import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Education from '../components/education'
import Experience from '../components/experience'
import Portfolio from '../components/portfolio'
import Skills from '../components/skills'
import frontstyle from '../styles/frontpage.module.sass'

const IndexPage = ({ data }) => {
  const { blogposts, resume } = data
  return (
    <Layout>
      <SEO title="Home" keywords={[`joelaa`, `developer`, `joelaa.com`]} />

      <Skills data={resume.resumeData.skills} />
      <Education data={resume.resumeData.education} />
      <Experience data={resume.resumeData.work} />
      <Portfolio data={resume.resumeData.publications} />

      <div className={frontstyle.latestBlogPosts}>
        <h3>Latest Posts</h3>

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
  blogposts: allContentfulBlogPost(limit: 3, sort: { fields: publishDate, order: DESC }) {
    edges {
      node {
				contentful_id
        slug
        title
        publishDate(formatString: "MMMM DD, YYYY")
        createdAt
        updatedAt
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
  education: contentfulResumeInfo(contentful_id: { eq: "5miYodu4o0WkCC4woI4K0Y" }) {
    resumeData {
        education {
            gpa
            area
            courses
            startDate
            endDate
            studyType
            institution
        }
    }
  }
  resume:  contentfulResumeInfo(contentful_id: { eq: "5miYodu4o0WkCC4woI4K0Y" }) {
    resumeData {
      education {
        gpa
        area
        courses
        startDate
        endDate
        studyType
        institution
      }
      work {
        startDate
        endDate
        company
        position
        website
        summary
        highlights
      }
      skills {
        name
        level
        keywords
        logos {
          AWS
          CSS
          HTML
          Java
          Linux
          Docker
          NodeJs
          Python
          Android
          Jenkins
          React
          Javascript
        }
      }
      publications {
        name
        image
        summary
        website
        publisher
        releaseDate
      }
    }
  }
}
`

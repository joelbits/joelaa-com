import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Menu from './menu'
import Header from './header'
import Footer from './footer'
import './layout.css'
import cssMenu from '../styles/menu.module.sass'
import cssBlogHeader from '../styles/blogHeader.module.sass'


const BlogLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query BlogSiteInfosQuery {
        siteInfo: site {
          siteMetadata {
            title
          }
        }
        siteSections: allContentfulSiteSection {
          edges {
            node {
              name
            }
          }
        }
        me: contentfulPerson(contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m"}) {
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
      }
    `}
    render={data => (
      <div className={cssMenu.blogPage}>
        <Menu
          siteTitle={data.siteInfo.siteMetadata.title} 
          siteSections={data.siteSections}
          css={cssMenu}
        />
        <Header 
          siteTitle={data.siteInfo.siteMetadata.title}
          css={cssBlogHeader}
        />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          {children}
        </div>
        <Footer data={data.me} />
      </div>
    )}
  />
)

BlogLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BlogLayout

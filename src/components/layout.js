import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Menu from './menu'
import Header from './header'
import Footer from '../components/footer'
import './layout.css'

const Layout = ({ children, css }) => (
  <StaticQuery
    query={graphql`
      query SiteInfosQuery {
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
      }
    `}
    render={data => (
      <>
        <Menu
          siteTitle={data.siteInfo.siteMetadata.title} 
          siteSections={data.siteSections}
        />
        <Header siteTitle={data.siteInfo.siteMetadata.title} />
        <div 
          className="contentWrapper"
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0.25em`,
          }}
        >
          {children}
        </div>
        <Footer data={data.me} />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

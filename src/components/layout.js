import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Menu from './menu'
import Header from './header'
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
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          {children}
          <footer>
            © {new Date().getFullYear()} Joelaa.com
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Menu from './menu'
import Header from './header'
import './layout.css'
import cssBlogMenu from '../styles/blogMenu.module.sass'
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
      }
    `}
    render={data => (
      <div className={cssBlogMenu.blogPage}>
        <Menu
          siteTitle={data.siteInfo.siteMetadata.title} 
          siteSections={data.siteSections}
          css={cssBlogMenu}
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
          <footer>
            © {new Date().getFullYear()} Joelaa.com
          </footer>
        </div>
      </div>
    )}
  />
)

BlogLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BlogLayout

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Menu from './menu'
import Header from './header'
import Footer from '../components/footer'
import './layout.css'
import styleable from 'react-styleable'
import globalstyles from '../styles/global.module.sass'

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
              src
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
        <Header data={data.me} siteTitle={data.siteInfo.siteMetadata.title} />
        <div className={css.contentWrapper}>
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

export default styleable(globalstyles)(Layout)

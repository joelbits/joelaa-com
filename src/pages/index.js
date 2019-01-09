import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'
import frontstyle from '../styles/frontpage.module.sass'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`joelaa`, `developer`, `joelaa.com`]} />
    
    <div className={frontstyle.aboutMe}>
      <div key={data.contentfulPerson.contentful_id}>
        <h3>{data.contentfulPerson.title}</h3>
        <p>{data.contentfulPerson.shortBio.shortBio}</p>
        <Img
          className={frontstyle.meImage}
          fluid={data.contentfulPerson.image.fluid} 
          srcSet={data.contentfulPerson.image.fluid.srcSetWebp}
          />
      </div>
    </div>

    <Link to="/page-2/">Go to Page 2</Link>
  </Layout>
)

export default IndexPage

export const query = graphql`
query {
  contentfulPerson(name: { eq: "Joel AA"}) {
    contentful_id
    name
    title
    email
    github
    shortBio {
      shortBio
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
`

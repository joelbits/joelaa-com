import React from 'react'
import { Link } from 'gatsby'

import BlogLayout from '../components/bloglayout'
import SEO from '../components/seo'

const Blog = () => (
  <BlogLayout>
    <SEO title="Blog" />
    <h1>Hi from the Blog page</h1>
    <p>Welcome to Blog page.</p>
    <Link to="/">Go back to the homepage</Link>
  </BlogLayout>
)

export default Blog

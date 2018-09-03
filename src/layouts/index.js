import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'

import './index.scss'

const Layout = ({ children, data }) => (
  <div className='site'>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'AAsia Travel', content: 'Travel company, tickets for attarctions, tour guided excurtions' },
        { name: 'keywords', content: 'attractions, tours, guides, transfer' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <div className='site-footer'
      style={{
        margin: '0 auto',
        maxWidth: 760,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
   
    <Footer />
    
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

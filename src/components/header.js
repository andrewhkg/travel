import React from 'react'
import Link from 'gatsby-link'
import * as utils from './utils'


const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
  <div>
  <nav className="navbar is-transparent">
  <div className="navbar-brand">
    <a className="navbar-item" href="/">
      <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
    </a>
    <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item" href="/">
        Home
      </a>
      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link" href="/documentation/overview/start/">
          Services
        </a>
        <div className="navbar-dropdown is-boxed">
          <a className="navbar-item" href="/about/">
            Attractions
          </a>
          <a className="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
            Modifiers
          </a>
          <a className="navbar-item" href="https://bulma.io/documentation/columns/basics/">
            Columns
          </a>
          <a className="navbar-item" href="https://bulma.io/documentation/layout/container/">
            Layout
          </a>
          
        </div>
      </div>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="field is-grouped">
        <a className="navbar-item" href="/contact">
            About
          </a>
          <p className="control">
          
          <a className="navbar-item" href="/contact">
            Contact
          </a>
          </p>
          <p className="control">
            
          </p>
        </div>
      </div>
    </div>
  </div>
</nav>
  </div>

    {/* <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div> */}
  </div>
)

export default Header

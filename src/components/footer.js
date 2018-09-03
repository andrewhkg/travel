import React from 'react'
import Link from 'gatsby-link'
import logo from "./logo.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Footer = ({ siteTitle }) => (
    <div>
        <footer className="footer">
        <div className="content has-text-centered">
            <p>
            <strong>AAsia Travel</strong> <br />
            The website content is licensed.
            </p>
            <FontAwesomeIcon icon="stroopwafel" />
            
            </div>
        </div>
        </footer>
    </div>
)

export default Footer
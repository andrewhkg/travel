import React from 'react'
import Link from 'gatsby-link'
import logo from "./logo.png"

import { SocialIcon } from 'react-social-icons';


const Footer = ({ siteTitle }) => (
    <div>
        <footer className="footer">
        <div className="content has-text-centered">
            <p>
            <strong>AAsia Travel</strong> <br />
            The website content is licensed.
            </p>
            <SocialIcon url="http://twitter.com/jaketrent" network="twitter" style={{ height: 30, width: 30, marginRight: '20px' }} />
            <SocialIcon url="http://facebook.com/Aasia-Travel-524704284208335" network="facebook" style={{ height: 30, width: 30, marginRight: '20px' }} />
            <SocialIcon url="http://instagram.com/jaketrent" network="instagram"  style={{ height: 30, width: 30, marginRight: '20px' }}/>           
            <SocialIcon url="http://vk.com/jaketrent" network="vk"  style={{ height: 30, width: 30, marginRight: '20px' }}/>           

            </div>
      
        </footer>
    </div>
)

export default Footer
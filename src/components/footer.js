import React from 'react'
import Link from 'gatsby-link'
import logo from "./logo.png"
// import { FaFacebookF } from "react-icons/fa"
// import { FaTwitterSquare } from "react-icons/fa"
// import { FaInstagram } from 'react-icons/fa'


const Footer = ({ siteTitle }) => (
    <div>
        <footer className="footer">
        <div className="content has-text-centered">
            <p>
            <strong>AAsia Travel</strong> <br />
            The website content is licensed.
            </p>
            
            {/* <div className="columns level-item">
              <ul style={{display: "flex"}}>
              <li className="column"><Link to="/"></Link></li> 

                <li className="column"><Link to="/"><FaFacebookF /></Link></li>  
                <li className="column"><Link to="/"><FaTwitterSquare /></Link></li> 
                <li className="column"><Link to="/"><FaInstagram /></Link></li> 
                <li className="column"><Link to="/"><faVk /></Link></li> 
                <li className="column"><Link to="/"></Link></li> 
              </ul>
               
               
               

            </div> */}
        </div>
        </footer>
    </div>
)

export default Footer
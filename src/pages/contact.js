import React from 'react'
import Link from 'gatsby-link'

const Contact = () => (
  <div>
    <h1>Contact Us</h1>
    <p>Address: office 403, Tai Sang Bank Building</p>
    <p>130-132 Des Vouex Road Central</p>
    <p>Hong Kong</p>

    <p>Phone: (+852) 81777286</p>
    <p>Email: info@aasia.hk</p>
    
    <br/>
    <hr/>
    
    <form name="contact-form" 
          method="post" 
          data-netlify="true" 
          data-netlify-honeypot="bot-field">
  {/* <input name="form-name" value="contact" /> */}
  <p>
    <label>Your Name: 
      <input className="input is-rounded" type="text" name="name" size="35"/>
    </label>   
  </p>
  <p>
    <label>Your Email: 
      <input className="input is-rounded" type="email" name="email" size="35" />
    </label>
  </p>
  
  <p>
    <label>Message: 
      <textarea className="textarea" rows="4" cols="50" name="message"></textarea>
    </label>
  </p>
  <br/>
  <p>
    <button className="button is-link is-success is-outlined" type="submit">Send</button>
  </p>
  
</form>

  </div>
)

export default Contact

import React from 'react';
import '../assets/styles/Contact.scss';


function Contact() {

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>

          {/* Contact Information */}
          <div className="contact-info">
            <p><strong>E-Mail :</strong> <a href="mailto:nagireddy11213@gmail.com" style={{ textDecoration: "none", color: "inherit" }}>
    nagireddy11213@gmail.com
  </a></p>
            <p><strong>Phone:</strong> 9603280714</p>
            
            <p>
              <strong>Resume:</strong> 
              <a href="https://drive.google.com/file/d/1O9A3U61bLgndw71bGRgQ5L9TWwQdTdbK/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                View/Download
              </a>
              

            </p>
            
          </div>


        </div>
      </div>
    </div>
  );
}

export default Contact;

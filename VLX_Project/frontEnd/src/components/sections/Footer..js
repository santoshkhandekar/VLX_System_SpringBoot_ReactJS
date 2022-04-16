import React from 'react';

import '../css/Footer.css';

function Footer() {
  return (
    <div className="footerParentDiv">
      <div className="content">
        <div>
          <div className="heading">
            <p>POPULAR LOCATIONS</p>
          </div>
          <div className="list">
            <ul>
              <li>kolkata</li>
              <li>Mumbai</li>
              <li>Chennai</li>
              <li>Pune</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>ABOUT US</p>
          </div>
          <div className="list">
            <ul>
              <li>About VLX Group</li>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>VLXPeople</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>VLX</p>
          </div>
          <div className="list">
            <ul>
              <li>Help</li>
              <li>Sitemap</li>
              <li>Legal & Privacy information</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>Other Countries UK - South Africa - Indonesia</p>
        <p>Free Classifieds in India. © 2006-2022 VLX</p>
      </div>
    </div>
  );
}

export default Footer;

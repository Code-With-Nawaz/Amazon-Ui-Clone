import React from "react";
import { Link } from "react-router-dom";
import footerLogo from "../assets/images/logo.png";

function FooterMiddle() {
  return (
    <>
      <div className="footer-middle">
        <div className="footer-content">
          <div className="footer-content-1">
            <h3>Get to Know Us</h3>
            <ul>
            <li><Link to='/'>About Us</Link></li>
            <li><Link to='/'>Press Releases</Link></li>
            <li><Link to='/'>Amazon Cares</Link></li>
            <li><Link to='/'>Gift a Smile</Link></li>
            </ul>
          </div>
          <div className="footer-content-1">
            <h3>Connect with Us</h3>
            <ul>
            <li><Link to='/'>Facebook</Link></li>
            <li><Link to='/'>Twitter</Link></li>
            <li><Link to='/'>Instagram</Link></li>
            </ul>
          </div>
          <div className="footer-content-3">
            <h3>Make Money with Us</h3>
            <ul>
                <li><Link to='/'>Sell on Amazon</Link></li>
                <li><Link to='/'>Sell under Amazon Accelerator</Link></li>
                <li><Link to='/'>Protect and Build Your Brand</Link></li>
                <li><Link to='/'>Amazon Global Selling</Link></li>
                <li><Link to='/'>Become an Affiliate</Link></li>
                <li><Link to='/'>Fulfilment by Amazon</Link></li>
                <li><Link to='/'>Advertise Your Products</Link></li>
                <li><Link to='/'>Amazon Pay on Merchants</Link></li></ul>
          </div>
          <div className="footer-content-4">
            <h3>Let Us Help You</h3>
            <ul>
            <li><Link to='/'>COVID-19 and Amazon</Link></li>
            <li><Link to='/'>Your Account</Link></li>
            <li><Link to='/'>Returns Centre</Link></li>
            <li><Link to='/'>Recalls and Product Safety Alerts</Link></li>
            <li><Link to='/'>Amazon App Download</Link></li>
            <li><Link to='/'>Help</Link></li>
            </ul>
          </div>
        </div>
        <div className="hr">
          <hr />
        </div>
        <div className="footer-middle-content-2">
          <div className="footer-logo">
            <img src={footerLogo} alt="amazon-logo" />
          </div>
          <div className="footer-region">
            <div className="lang">
              <select name="" id="">
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
              </select>
            </div>
            <div className="country-btn">
              <select>
                <option value="India">India</option>
                <option value="USA">USA</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterMiddle;

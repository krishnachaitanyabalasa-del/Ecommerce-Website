
import logo from "../images/logo.jpg";
import facebook from "../images/facebook.png";
import x from "../images/x.png";
import linkedin from "../images/linkedin.png";
import insta from "../images/insta.jpg";
import "./HomePage.css";

import homeimg from "../images/home-right.png";
import {Header} from "../Components/Header.jsx";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
/>

export function HomePage() {
  return(
    <>
      <Header/>
      <h1>Welcome to FixMyRide</h1>
      <div className="hero-container">
        <div className="Hero-left">
          <div>
            <h2>Vehicle Breakdown? Get Help in Minutes</h2>
          </div>
          <div>
            <h4>Find nearby mechanics instantly and get your vehicle fixed on the spot.</h4>

          </div>
          <button className="hero-button">Request Service Now</button>
        </div>
        <div className="Hero-right">
          <img className="hero-image"src={homeimg} alt="mechanic-logo"></img>
        </div>
      </div>
      
      <div className="how-it-works">
        <h3>How it Works</h3>
        <div>
          <div>
            <strong>1.Request Help</strong>
            <p>Share your location & problem</p>
          </div>
          <div>
            <strong>2.Get Connected</strong>
            <p>Nearby mechanic accepts your request</p>
          </div>
          <div>
            <strong>3.Get Fixed</strong>
            <p>Mechanic arrives & repairs your vehicle</p>
          </div>
        </div>
      </div>
      <div className="services">
        <h3>Service we offer</h3>
        <ul>
          <li>Puncture Repair</li>
          <li>Battery Jumpstart</li>
          <li>Towing</li>
          <li>Bike Repair</li>
          <li>Car Repair</li>
          <li>General Service</li>
        </ul>
      </div>

      <h2>Why Choose us</h2>
      <div className="reasons">

        <div className="reason">
          <div className="reason-img"> 

          </div>
          <div className="reason-text">
            
          </div>
        </div>
      
        <div className="reason">
            <div className="reason-img"> 

            </div>
            <div className="reason-text">
              
            </div>
        </div>
        <div className="reason">
            <div className="reason-img"> 

            </div>
            <div className="reason-text">
              
            </div>
        </div>
        <div className="reason">
            <div className="reason-img"> 

            </div>
            <div className="reason-text">
              
            </div>
        </div>
      </div>

      <div className="cta-section">
        <h2>Stuck on the road?</h2>
        <p>We’re here to help you anytime, anywhere.</p>

        <button className="cta-btn">
          Request Service Now
        </button>
      </div>
      <div className="footer-container">
        <div className="footer">
          <div className="footer-comp">
            <div className="logo-info-grid">
              <div className="footer-logo">
                <img className="footer-logo-img" src={logo} alt="FixMyRide Logo" />
              </div>
              <div className="footer-info">
                <p className="footer-info-text">FixMyRide</p>
              </div>
            </div>
            <div className="About-us">
              <div className="about-us-text">
                <h3>About Us</h3>
                <p>FixMyRide is dedicated to providing quick and reliable roadside assistance to get you back on the road in no time.</p>
              </div>
            </div>
            <div className="social-links">
              <div className="social-image">
                <img class="social-img" src={facebook} alt="facebook"></img>
              </div>
              <div className="social-image">
                <img class="social-img" href="https://www.instagram.com/fixmyrideservices/?utm_source=ig_web_button_share_sheet" src={insta} alt="Instagram"></img>
              </div>
              <div className="social-image">
                <img class="social-img" src={x} alt="X"></img>
              </div>
              <div className="social-image">
                <img class="social-img" src={linkedin} alt="LinkedIn"></img>
              </div>
            </div>
          </div>
          <div className="footer-links">
            <h3>Quick Links</h3>
            <p>Home</p>
            <p>About</p>
            <p>Services</p>
            <p>Portfolio</p>
            <p>Contact</p>
          </div>
          <div className="footer-support">
            <h3>Contact Info</h3>
            <p>📍 123 Business Street, New York</p>
            <p>📞 +1 (234) 567-890</p>
            <p>✉contact@example.com</p>
          </div>
        </div>
        <hr></hr>
        <div className="footer-bottom">
          <p>© 2025 FixMyRide. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}

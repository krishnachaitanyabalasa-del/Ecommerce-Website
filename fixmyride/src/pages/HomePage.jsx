
import "./HomePage.css";
export function HomePage() {
  return(
    <>
      <h1>Welcome to FixMyRide</h1>
      <div className="hero-container">
        <div className="Hero-left">
          HomePage
        </div>
        <div className="Hero-right">
          homePage2
        </div>
      </div>
      
      <div>
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
      <div className="footer">
        <div className="footer-comp">

        </div>
        <div className="footer-links">

        </div>
        <div className="footer-support">
           
        </div>
      </div>
    </>
  );
}

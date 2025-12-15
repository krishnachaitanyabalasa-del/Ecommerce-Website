import './SignUpPage.css';

export function SignUpPage() {
  return(
    <>
      <div>
        <h2>Sign Up for FixMyRide</h2>
      </div>
      <div className='signup-container'>
        <div className='signup-set'>
          <div className="signup">
            <p>Username</p>
            <input type="text" id="username" name="username" placeholder='Username'/>
          </div>
          <div className="signup">
            <p>Password</p>
            <input type="password" id="password" name="password" placeholder='Password'/>
          </div>
          <div className="signup">
            <p>Full Name</p>
            <input type="text" id="text" name="fullname" placeholder='FullName'/>
          </div>
          <div className="signup">
            <p>Phone Number</p>
            <input type="text" id="phonenumber" name="phonenumber" placeholder='Phone Number'/>
          </div>
          <div className="signup">
            <p>Email</p>
            <input type="email" id="email" name="email" placeholder='Email'/>
          </div>
          <div className="signup">
            <p>Address</p>
            <input type="text" id="Adsress" name="Address" placeholder='Address'/>
          </div>
        </div>
      </div>
      <div className="signup-checkbox">
        <input type="checkbox" id="terms" />
        <label htmlFor="terms">
          I agree to the Terms & Conditions
        </label>
      </div>


      <button type="submit" className='submit'>Sign Up</button>

    </>
  );
}
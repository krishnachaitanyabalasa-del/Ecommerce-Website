import logo from '../images/logo.jpg';
import './LoginPage.css';
export function LoginPage() {
  return(
    <>
      <div className="login-container">
      <div>
        <img src={logo} alt='FixMyRide logo' class='logo'></img>
      </div>
        <h2>Login to FixMyRide</h2>
        <div className="login-username">
          <input type="text" id="username" name="username" placeholder='Username'/>
        </div>
        <div className="login-password">
          <input type="password" id="password" name="password" placeholder='Password'/>
        </div>

        <button type="submit" className='submit'>Login</button>
        <div>
          <a href="/signup">Don't have an account? Sign Up</a>
        </div>
      </div>
    </>
  );
}
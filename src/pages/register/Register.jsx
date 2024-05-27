import "./register.scss";
import logo from "../../assets/logo.svg";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function Register() {
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src={logo} alt="" />
          <button className="login-button">Sign In</button>
        </div>
        <div className="container">
          <h1>Unlimited movies, TV shows, and more</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="input">
            <input type="email" placeholder="Email address" />
            <button className="register-button">
              Get Started
              <KeyboardArrowRightIcon className="icon"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

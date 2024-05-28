import "./register.scss";
import logo from "../../assets/logo.svg";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useRef, useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = () => {
    setPassword(passwordRef.current.value);
  };

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
          {!email ? (
            <div className="input">
              <input type="email" placeholder="Email address" ref={emailRef} />
              <button className="register-button" onClick={handleStart}>
                Get Started
                <KeyboardArrowRightIcon className="icon" />
              </button>
            </div>
          ) : (
            <form className="input">
              <input type="password" placeholder="Password" ref={passwordRef} />
              <button className="register-button" onClick={handleFinish}>
                Start
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

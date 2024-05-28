import "./login.scss";
import logo from "../../assets/logo.svg";
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
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src={logo} alt="" />
        </div>
        <div className="container">
          <form>
            <h1>Sign In</h1>
            <input type="email" placeholder="Email or mobile number" />
            <input type="password" placeholder="Password" />
            <button className="login-button">Sign In</button>
            <span className="light-info">
              New to Netflix? <b>Sign up now!</b>
            </span>
            <span className="info">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <span className="more">Learn more.</span>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

import "./login.scss";
import logo from "../../assets/logo.svg";
import React, { useRef, useState, useContext } from "react";
import { accountsService } from "../../server/accounts";
import { tokensService } from "../../server/tokens";
import { AccountsContext } from "../../contexts/account.context";
import { Link } from "react-router-dom";
import { NavbarContext } from "../../contexts/navbar.context";

export default function Login() {
  const { login } = useContext(AccountsContext);
  const { switchNav } = useContext(NavbarContext);

  const onSubmit = async (values) => {
    console.log("Success:", values);

    const res = await accountsService.login(values);

    if (res.status !== 200) {
      console.error("Something went wrong!");
      return;
    }

    tokensService.save(res.data);
    login({});

    console.success("Your logged in successfully!");
  };

  const onAbort = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isMoreClicked, setIsMore] = useState(false);

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
        <Link
          to="/"
          className="wrapper"
          onClick={() => {
            switchNav(true);
          }}
        >
          <img className="logo" src={logo} alt="" />
        </Link>
        <div className="container">
          <form onSubmit={onSubmit} onAbort={onAbort}>
            <h1>Sign In</h1>
            <input
              type="email"
              name="email"
              placeholder="Email or mobile number"
            />
            <input type="password" name="password" placeholder="Password" />
            <button className="login-button" type="submit">
              Sign In
            </button>
            <span className="light-info">
              New to Netflix?{" "}
              <Link to="/register" className="to-register">
                <b>Sign up now!</b>
              </Link>
            </span>
            <span className="info">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.{" "}
              <span
                className="more"
                onClick={() => {
                  setIsMore(true);
                }}
              >
                Learn more.
              </span>
              {isMoreClicked ? (
                <div className="pad">
                  The information collected by Google reCAPTCHA is subject to
                  the Google{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    className="link"
                  >
                    {" "}
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="https://policies.google.com/terms" className="link">
                    Terms of Service
                  </a>
                  , and is used for providing, maintaining, and improving the
                  reCAPTCHA service and for general security purposes (it is not
                  used for personalized advertising by Google).
                </div>
              ) : (
                <></>
              )}
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

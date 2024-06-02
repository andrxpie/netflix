import "./register.scss";
import logo from "../../assets/logo.svg";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { accountsService } from "../../server/accounts";
import { NavbarContext } from "../../contexts/navbar.context";
import { SwipeTwoTone } from "@mui/icons-material";

export default function Register() {
  const { switchNav } = useContext(NavbarContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState("");

  const handleEmail = () => {
    const emailRef = document.getElementById("emailInput");
    setEmail(emailRef.value);
  };

  const handlePassword = () => {
    const passwordRef = document.getElementById("passwordInput");
    setPassword(passwordRef.value);
  };

  const handleDate = () => {
    const dateRef = document.getElementById("dateInput");
    setDate(dateRef.value);
  };

  const onSubmit = async (values) => {
    const res = await accountsService.register(values);

    if (res.status !== 200) {
      alert("Something went wrong!");
      return;
    }

    alert("You registered in successfully!");
  };

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <Link
            to="/"
            onClick={() => {
              switchNav(true);
            }}
          >
            <img className="logo" src={logo} alt="" />
          </Link>
          <Link to="/login">
            <button className="login-button">Sign In</button>
          </Link>
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
              <input type="email" placeholder="Email address" id="emailInput" />
              <button
                className="register-button"
                onClick={() => {
                  handleEmail();
                }}
              >
                Get Started
                <KeyboardArrowRightIcon className="icon" />
              </button>
            </div>
          ) : (
            <form className="input vertical">
              <input
                type="password"
                placeholder="Password"
                id="passwordInput"
                onChange={() => {
                  handlePassword();
                }}
              />
              <input
                type="date"
                className="datepicker"
                id="dateInput"
                onChange={() => {
                  handleDate();
                }}
              />
              <button
                className="register-button start"
                onClick={() => onSubmit()}
              >
                Start
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

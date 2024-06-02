import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useContext } from "react";
import { AccountsContext } from "../../contexts/account.context";
import { NavbarContext } from "../../contexts/navbar.context";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  const { isAuth, email } = useContext(AccountsContext);
  const { isNav, switchNav } = useContext(NavbarContext);

  return (
    <>
      {isNav ? (
        <nav className="navbar">
          <div className="container">
            <div className="left">
              <Link to="/" className="links">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/220px-Netflix_2015_logo.svg.png"
                  alt="Netflix logo"
                />
                Homepage
              </Link>
            </div>
            {isAuth ? (
              <div className="right">
                <SearchIcon className="icon" />
                <NotificationsIcon className="icon" />
                <img
                  src="https://avatars.githubusercontent.com/u/119680285?v=4"
                  alt="User's avatar"
                />
                <div className="profile">
                  <KeyboardArrowDownIcon className="icon" />
                  <div className="options">
                    <span>Settings</span>
                    <span>Log Out</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="right">
                <Link to="/login">
                  <button
                    className="login-button"
                    onClick={() => {
                      switchNav(false);
                    }}
                  >
                    Sing In
                  </button>
                </Link>
              </div>
            )}
          </div>
        </nav>
      ) : (
        <></>
      )}
    </>
  );
};

export default Navbar;

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { NavbarContext } from "../../contexts/navbar.context";
import "./nopage.scss";

export default function NoPage() {
  const navigate = useNavigate();
  const { switchNav } = useContext(NavbarContext);

  return (
    <div className="nopage">
      <h1>404 Not Found</h1>
      <button
        onClick={() => {
          navigate(-1);
          switchNav(true);
        }}
        className="back"
      >
        Go Back
      </button>
    </div>
  );
}

import { NavbarContext } from "../../contexts/navbar.context";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./watch.scss";

export default function Watch() {
  const { switchNav } = useContext(NavbarContext);
  const { src } = useParams();
  const navigate = useNavigate();

  return (
    <div className="watch">
      <button
        className="back"
        onClick={() => {
          navigate(-1);
          switchNav(true);
        }}
      >
        Home
      </button>
      <iframe
        src={src}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
}

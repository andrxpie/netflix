import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import AddIcon from "@mui/icons-material/Add";
import { useContext, useEffect, useState } from "react";
import { genresService } from "../../server/genres";
import { NavbarContext } from "../../contexts/navbar.context";
import { Link, useNavigate } from "react-router-dom";
import "./listItem.scss";

export default function ListItem({ index, movie }) {
  const [isHovered, setIsHovered] = useState(false);
  const [genres, setGenres] = useState(null);
  const navigate = useNavigate();
  const { switchNav } = useContext(NavbarContext);

  useEffect(() => {
    const getGenres = async () => {
      const fetchedGenres = await genresService.get();
      setGenres(fetchedGenres.data);
    };

    getGenres();
  }, []);

  if (movie === null) {
    return <div>Loading...</div>;
  }

  const handleWatch = () => {
    const encodedSrc = encodeURIComponent(movie.video);
    navigate(`watch/${encodedSrc}`);
  };

  return (
    <div
      className="list-item"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={movie.image} alt="" />
      {isHovered && (
        <>
          <iframe
            src={movie.video}
            title="YouTube video player"
            frameborder="0"
            allow="clipboard-write; encrypted-media"
            referrerpolicy="strict-origin-when-cross-origin"
          ></iframe>
          <div className="item-info">
            <div className="icons">
              <PlayArrowIcon
                className="icon"
                onClick={() => {
                  handleWatch();
                  switchNav(false);
                }}
              />
              <AddIcon className="icon" />
              <ThumbUpOffAltIcon className="icon" />
              <ThumbDownOffAltIcon className="icon" />
            </div>
            <div className="item-info-top">
              <span>{movie.duration}</span>
              <span className="limit">18+</span>
              <span>{movie.year}</span>
              <Link
                className="genre"
                to={"/genre/" + genres[movie.genreId - 1].title}
              >
                {genres[movie.genreId - 1].title}
              </Link>
            </div>
            <div className="desc">{movie.description}</div>
          </div>
        </>
      )}
    </div>
  );
}

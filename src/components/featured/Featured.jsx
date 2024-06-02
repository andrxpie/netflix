import { PlayArrow } from "@mui/icons-material";
import InfoIcon from "@mui/icons-material/Info";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { moviesService } from "../../server/movies";
import { NavbarContext } from "../../contexts/navbar.context";
import { genresService } from "../../server/genres";
import "./featured.scss";

const Featured = () => {
  const [movie, setMovie] = useState(null);
  const [genres, setGenres] = useState(null);
  const navigate = useNavigate();
  const { switchNav } = useContext(NavbarContext);

  useEffect(() => {
    function randomNumberInRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const getMovie = async () => {
      const fetchedMovie = await moviesService.getById(randomNumberInRange(1, 4));
      setMovie(fetchedMovie.data);
      console.log(fetchedMovie.data);
    };

    getMovie();

    const getGenres = async () => {
      const fetchedGenres = await genresService.get();
      setGenres(fetchedGenres.data);
      console.log(fetchedGenres.data);
    };

    getGenres();
  }, []);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const handleWatch = () => {
    const encodedSrc = encodeURIComponent(movie.video);
    navigate(`watch/${encodedSrc}`);
  };

  return (
    <div className="featured">
      <div className="shade"></div>
      <img src={movie.image} alt="Featured" className="background" />
      <div className="info">
        <span className="title">{movie.title}</span>
        <span className="short-desc">
          {movie.year}
          <span className="sd-spacer"> I </span>
          <span className="age-rating">{movie.limit}+</span>
          <span className="sd-spacer"> I </span>
          <Link to={"/genre/" + genres[movie.genreId].title}>{genres[movie.genreId - 1].title}</Link>
        </span>
        <span className="desc">{movie.description}</span>
        <div className="buttons">
          <button
            className="play"
            onClick={() => {
              handleWatch();
              switchNav(false);
            }}
          >
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoIcon />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;

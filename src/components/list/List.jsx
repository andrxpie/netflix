import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ListItem from "../listItem/ListItem";
import { useEffect, useRef, useState } from "react";
import "./list.scss";
import { moviesService } from "../../server/movies";
import { genresService } from "../../server/genres";

export default function List({ selection }) {
  const [movies, setMovies] = useState(null);
  const [genres, setGenres] = useState(null);
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const listRef = useRef();

  useEffect(() => {
    const getMovies = async () => {
      const fetchedMovies = await moviesService.getBySelectionId();
      setMovies(fetchedMovies.data);
      console.log(fetchedMovies.data);
    };

    getMovies();

    const getGenres = async () => {
      const fetchedGenres = await genresService.get();
      setGenres(fetchedGenres.data);
    };

    getGenres();
  }, []);

  if (!movies) {
    return <div>Loading...</div>;
  }

  const handleClick = (direction) => {
    setIsMoved(true);

    let distance = listRef.current.getBoundingClientRect().x - 50;

    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    } else if (direction === "right" && slideNumber < 10) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  return (
    <div className="list">
      <span className="list-title">{selection.title}</span>
      <div className="wrapper">
        <ArrowBackIosNewIcon
          className="slider-arrow left"
          onClick={() => handleClick("left")}
          style={{display: !isMoved && 'none'}}
        />
        <div className="container" ref={listRef}>
          <ListItem index={0} />
        </div>
        <ArrowForwardIosIcon
          className="slider-arrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}

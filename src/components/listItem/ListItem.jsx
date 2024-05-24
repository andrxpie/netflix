import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import AddIcon from "@mui/icons-material/Add";
import "./listItem.scss";
import { useState } from "react";

export default function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="list-item"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfPnp-OV6vtYGCC7XAYfBo0-la3wLVhRHQWH2KT5G6xDmIPBlYOqoUVTUDhi8sufpXvGbCG_6ieQk70uB38BDnYHYK0qOBz75NJL.jpg?r=955"
        alt=""
      />
      {isHovered && (
        <>
          <iframe
            src="https://www.youtube.com/embed/mzOilOUWsow?si=TyhpObbpIsygDshk&amp;controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="clipboard-write; encrypted-media"
            referrerpolicy="strict-origin-when-cross-origin"
          ></iframe>
          <div className="item-info">
            <div className="icons">
              <PlayArrowIcon className="icon" />
              <AddIcon className="icon" />
              <ThumbUpOffAltIcon className="icon" />
              <ThumbDownOffAltIcon className="icon" />
            </div>
            <div className="item-info-top">
              <span>1 hour 14 mins</span>
              <span className="limit">18+</span>
              <span>1999</span>
              <span className="genre">Action</span>
            </div>
            <div className="desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              quos enim similique culpa.
            </div>
          </div>
        </>
      )}
    </div>
  );
}

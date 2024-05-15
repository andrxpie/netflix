import { PlayArrow } from "@mui/icons-material";
import InfoIcon from "@mui/icons-material/Info";
import "./featured.scss";

const Featured = () => {
  return (
    <div className="featured">
      <img
        src="https://occ-0-6347-1432.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABZV3oc2OQATQsy6yeUeM9VHELEgvaEbtELYwn2Q9COq2u9O0nZnK4xiCe7UomiMrvgzeCLEQ9Z-bKDKf7v82p0_dsj9cHWJcwSLv.jpg?r=10a&quot"
        alt="Featured"
      />
      <div className="info">
        <img
          src="https://occ-0-6347-1432.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABTOsbl-O25G1LCw87hN2X2wsjneoFU8iENl-GBImq_Q64cMZhuXwdcNq-vsy7PEOH7nwaJf3TcX6XjLWhwnT_Iu_mlH6PDIjUqj6kKfeDF6f.png?r=f1a"
          alt="title"
        />
        <span className="title">The Walking Dead</span>
        <span className="short-desc">
          2010
          <span className="sd-spacer"> I </span>
          <span className="age-rating">18+</span>
          <span className="sd-spacer"> I </span>
          <a href="">Horror</a>
        </span>
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
          numquam nemo hic eligendi necessitatibus, a laborum odit iure quia
          facere voluptate tempora commodi officia, sequi culpa ab deserunt,
          quibusdam nam!
        </span>
        <div className="buttons">
          <button className="play">
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

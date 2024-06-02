import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <List />
      <List />
      <List />
    </div>
  );
};

export default Home;

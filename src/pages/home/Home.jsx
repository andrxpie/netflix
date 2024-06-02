import { useEffect, useState } from "react";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import "./home.scss";
import { selectionsService } from "../../server/selections";

const Home = () => {
  const [selections, setSelections] = useState(null);

  useEffect(() => {
    const getSelections = async () => {
      const fetchedSelections = await selectionsService.get();
      setSelections(fetchedSelections.data);
      console.log(fetchedSelections.data);
    };

    getSelections();
  }, []);

  return (
    <div className="home">
      <Featured />
      {
        selections.map(selection => (
          <List selection={selection} />
        ))
      }
    </div>
  );
};

export default Home;

import data from "../../data.json";
import { Appartement } from "../../components/Appartment";
import { Banner } from "../../components/Banner";

function Home() {
  return (
    <div className="Home">
        <Banner imgSrc="ImageS1.png" title="Chez vous, partout et ailleurs" />
      <div className="Home__cards">
        {data.map((item) => (
          <Appartement apartment={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;

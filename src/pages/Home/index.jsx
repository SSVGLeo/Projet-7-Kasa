import data from "../../data.json";
import { Appartement } from "../../components/Appartment";
import { Banner } from "../../components/Banner";
console.log(data);

function Home() {
  return (
    <div className="Home">
        <Banner imgSrc="src/assets/ImageS1.png" title="Chez vous, partout et ailleurs" />
      {/* <div className="Home__first">
        <img
          src="src/assets/ImageS1.png"
          alt="Côte embrumée"
          className="Home__img"
        />
        <div className="Home__dark"></div>
        <h1 className="Home__text">Chez vous, partout et ailleurs</h1>
      </div> */}
      <div className="Home__cards">
        {data.map((item) => (
          <Appartement apartment={item} />
        ))}
      </div>
    </div>
  );
}

export default Home;

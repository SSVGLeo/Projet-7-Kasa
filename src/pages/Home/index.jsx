import { Link } from "react-router-dom"
function Home () {
    return (
        <div className="Home">
            <div className="Home__first">
                <img src="src/assets/ImageS1.png" alt="Côte embrumée" className="Home__img" />
                <div className="Home__dark"></div>
                <h1 className="Home__text">Chez vous, partout et ailleurs</h1>
            </div>
            {/* <Link to="/AppartementCard">Appartement COOL</Link> */}
        </div>
    )
}

export default Home
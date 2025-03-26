import { Link } from "react-router-dom"
import data from "../../data.json"

console.log(data)

function App () {
    const apartmentCards = data.map((apartment) => (
        <div key={apartment.id} className="Home__card">
            <Link to={`/AppartementCard/${apartment.id}`}></Link>
            <h2 className="Home__card--title">{apartment.title}</h2>
            {/* <p>{apartment.location}</p> */}
            <img src={apartment.pictures[0]} alt={apartment.title} className="Home__card--img" />
        </div>
    ))
    return <div className="Home__cards">{apartmentCards}</div>
}

function Home () {
    return (
        <div className="Home">
            <div className="Home__first">
                <img src="src/assets/ImageS1.png" alt="Côte embrumée" className="Home__img" />
                <div className="Home__dark"></div>
                <h1 className="Home__text">Chez vous, partout et ailleurs</h1>
            </div>
            <App />
        </div>
    )
}

export default Home
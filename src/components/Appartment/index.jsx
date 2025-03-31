import { Link } from "react-router-dom";

export function Appartement({ apartment }) {
  return (
      <div className="Home__card">
        <Link to={`/Appartement/${apartment.id}`}></Link>
        <h2 className="Home__card--title">{apartment.title}</h2>
        <img
          src={apartment.pictures[0]}
          alt={apartment.title}
          className="Home__card--img"
        />
      </div>
  );
}

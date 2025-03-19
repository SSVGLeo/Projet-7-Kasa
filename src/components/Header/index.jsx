import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <img src="src\assets\LOGO.png" alt="Kasa's Logo" />
      <div className="Header__div">
        <Link to={"/"} className="Header__texte">Accueil</Link>
        <Link to={"/Apropos"} className="Header__texte">A propos</Link>
      </div>
    </div>
  );
}

export default Header;

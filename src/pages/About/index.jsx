import InfoCard from "../../components/InfoCard";

function About() {
  return (
    <div className="About">
      <div className="About__first">
        <img
          src="src/assets/ImageS2.png"
          alt="Montagnes paisibles"
          className="About__img"
        />
      </div>
      <div className="About__infos">
        <InfoCard
          title="Fiabilité"
          text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulierements vérifiées par nos équipes."
        />
        <InfoCard
          title="Respect"
          text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme."
        />
        <InfoCard
          title="Service"
          text="La qualité du service est au coeur de notre engagement chez Kasa.
            Nous veillons à ce que chaque interaction, que ce soit avec nos
            hôtes ou nos locataires, soit empreinte de respect et de
            bienveillance."
        />
        <InfoCard
          title="Sécurité"
          text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux cirtères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes."
        />
      </div>
    </div>
  );
}

export default About;

import { InfoCard } from "../../components/InfoCard";
import { Banner } from "../../components/Banner";

function About() {
  const aboutData = [
    {
      title: "Fiabilité",
      text: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont regulierement verifiees par nos equipes.",
    },
    {
      title: "Respect",
      text: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraainera une exclusion de notre plateforme.",
    },
    {
      title: "Service",
      text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux cirtères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];
  return (
    <div className="About">
      <Banner imgSrc={"src/assets/ImageS2.png"}/>
      <div className="About__infos">
        {aboutData.map ((item) => (
          <InfoCard title={item.title} text={item.text} />
        ))}
      </div>
    </div>
  );
}

export default About;

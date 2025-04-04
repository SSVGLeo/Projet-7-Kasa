import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export default function Description({ apartment }) {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  return (
    <div className="Appartement__description">
      <h2 className="Appartement__description--title">Description</h2>
      <FontAwesomeIcon
        icon={faChevronLeft}
        className={`Appartement__description--arrow ${
          isDescriptionVisible ? "rotateDown" : "rotateUp"
        }`}
        onClick={() => setIsDescriptionVisible(!isDescriptionVisible)}
      />
      <p
        className={`Appartement__description--text ${
          isDescriptionVisible ? "open" : "close"
        }`}
      >
        {apartment.description}
      </p>
    </div>
  );
}

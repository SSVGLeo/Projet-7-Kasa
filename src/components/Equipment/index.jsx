import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export default function Equipment({ equipments }) {
    const [isEquipmentsVisible, setIsEquipmentsVisible] = useState(false);
    return (
      <div className="Appartement__equipments">
        <h2 className="Appartement__equipments--title">Equipements</h2>
        <FontAwesomeIcon
        icon={faChevronLeft}
        className={`Appartement__description--arrow ${
          isEquipmentsVisible ? "rotateDown" : "rotateUp"
        }`}
        onClick={() => setIsEquipmentsVisible(!isEquipmentsVisible)}
      />
        <div
          className={`Appartement__equipments__container ${
            isEquipmentsVisible ? "open" : "close"
          }`}
        >
          {equipments.map((equipments) => (
            <p key={equipments} className={`Appartement__equipments--text `}>
              {equipments}
            </p>
          ))}
        </div>
      </div>
    );
  }
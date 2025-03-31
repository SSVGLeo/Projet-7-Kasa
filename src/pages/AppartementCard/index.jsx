import { useParams } from "react-router-dom";
import { useState } from "react";
import data from "../../data.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function Equipment({ equipments }) {
  const [isEquipmentsVisible, setIsEquipmentsVisible] = useState(false);
  return (
    <div className="Appartement__equipments">
      <h2 className="Appartement__equipments--title">Equipements</h2>
      <img
        src="../../public/angle-right-solid.svg"
        alt="Fleche droite"
        className={`Appartement__equipments--arrow ${
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

function Appartement() {
  const { id } = useParams();
  const apartment = data.find((apartment) => apartment.id === id);

  if (!apartment) {
    return <p>Appartement non trouvé</p>;
  }

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = apartment.pictures;

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          className="Appartement__infos--stars"
          style={{
            color: i <= rating ? "#FF6060" : "#E3E3E3",
          }}
        />
      );
    }
    return stars;
  };

  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  return (
    <div className="Appartement">
      <div className="Appartement__carousel">
        <img
          key={currentImageIndex}
          src={images[currentImageIndex]}
          alt={apartment.title}
          className="Appartement__carousel__image"
        />
        {images.length > 1 && (
          <>
            <button onClick={prevImage} className="Appartement__btn--left">
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button onClick={nextImage} className="Appartement__btn--right">
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
            <span className="Appartement__counter">
              {currentImageIndex + 1} / {images.length}
            </span>
          </>
        )}
      </div>
      <div className="Appartement__infos">
        <div className="Appartement__infos--1">
          <h1 className="Appartement__infos--title">{apartment.title}</h1>
          <p className="Appartement__infos--location">{apartment.location}</p>
          <div className="Appartement__subinfos--tags">
            {apartment.tags.map((tag) => (
              <p key={tag} className="Appartement__subinfos--text">
                {tag}
              </p>
            ))}
          </div>
        </div>
        <div className="Appartement__infos--2">
          <div className="Appartement__infos--div">
            <p className="Appartement__infos--host">{apartment.host.name}</p>
            <img
              src={apartment.host.picture}
              alt={apartment.host.picture}
              className="Appartement__infos--host--img"
            />
          </div>
          <div className="Appartement__subinfos--rating">
            {renderStars(apartment.rating)}
          </div>
        </div>
      </div>
      <div className="Appartement__down">
        <div className="Appartement__description">
          <h2 className="Appartement__description--title">Description</h2>
          <img
            src="../../public/angle-right-solid.svg"
            alt="Fleche droite"
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
        <Equipment equipments={apartment.equipments} />
      </div>
    </div>
  );
}

export default Appartement;

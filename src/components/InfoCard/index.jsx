import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export function InfoCard({ title, text }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="About__card">
      <h2 className="About__card--title">{title}</h2>
      <FontAwesomeIcon
        icon={faChevronLeft}
        className={`About__card--arrow ${
          isVisible ? "rotateDown" : "rotateUp"
        }`}
        onClick={() => setIsVisible(!isVisible)}
      />
        <p
          className={`About__card--text ${
            isVisible ? "open" : "close"
          }`}
        >
          {text}
        </p>
    </div>
  );
}
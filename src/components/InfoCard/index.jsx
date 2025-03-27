import { useState } from "react";

export function InfoCard({ title, text }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="About__card">
      <h2 className="About__card--title">{title}</h2>
      <img
        src="public/angle-right-solid.svg"
        alt="Fleche droite"
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
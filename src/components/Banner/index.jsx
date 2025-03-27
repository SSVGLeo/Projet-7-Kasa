export function Banner({ imgSrc, title }) {
  return (
    <div className="Home__first">
      <img src={imgSrc} alt="Côte embrumée" className="Home__img" />

      {title && <div className="Home__dark"></div>}
      {title && <h1 className="Home__text">{title}</h1>}
    </div>
  );
}

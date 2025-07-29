import "./NewsCard.css";

function NewsCard() {
  return (
    <div className="card">
      <div className="card__header">
        <button className="card__button"></button>
      </div>
      <div className="card__text">
        <p className="card__date">July 28th, 2025</p>
        <h2 className="card__title">Test article title.</h2>
        <p className="card__paragraph">
          Test article paragraph test article paragraph test article paragraph
          test article paragraph
        </p>
        <p className="card__source">TEST SOURCE</p>
      </div>
    </div>
  );
}

export default NewsCard;

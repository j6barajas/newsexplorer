import "./NewsCardList.css";

import NewsCard from "../NewsCard/NewsCard";

function NewsCardList() {
  return (
    <div className="card-list">
      <h2 className="card-list__title">Search results</h2>
      <ul className="card-list__cards">
        <NewsCard />
      </ul>
      <button className="card-list__button">Show more</button>
    </div>
  );
}

export default NewsCardList;

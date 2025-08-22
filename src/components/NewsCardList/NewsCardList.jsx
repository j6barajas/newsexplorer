import "./NewsCardList.css";

import NewsCard from "../NewsCard/NewsCard";
import { useState } from "react";

function NewsCardList({ articles, hasError, isLoggedIn }) {
  const [articleNumber, setArticleNumber] = useState(3);

  const handleShowMore = () => {
    setArticleNumber(6);
  };

  return (
    <div className="card-list">
      <h2 className="card-list__title">Search results</h2>
      <ul className="card-list__cards">
        {articles?.slice(0, articleNumber).map((article, index) => (
          <NewsCard
            isLoggedIn={isLoggedIn}
            key={index}
            title={article.title}
            source={article.source.name}
            date={article.publishedAt}
            description={article.description}
            image={article.urlToImage}
          />
        ))}
      </ul>
      {articleNumber < 6 && (
        <button onClick={handleShowMore} className="card-list__button">
          Show more
        </button>
      )}
    </div>
  );
}

export default NewsCardList;

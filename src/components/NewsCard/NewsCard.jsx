import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./NewsCard.css";

function NewsCard({
  index,
  title,
  source,
  date,
  description,
  image,
  isLoggedIn,
}) {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const location = useLocation();
  const savedPage = location.pathname === "/saved-news";

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formattedDate = formatDate(date);

  const handleClick = () => {
    if (!isClicked) {
      setIsClicked(true);
    } else if (isClicked) {
      setIsClicked(false);
    }
  };

  return (
    <div className="card">
      <div className="card__header">
        <img className="card__image" src={image} alt="Article image" />
        <div className="card__buttons">
          {isHovering && savedPage && (
            <button className="card__remove-button">Remove from saved</button>
          )}
          {savedPage ? (
            <button
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="card__delete-button"
            ></button>
          ) : (
            <>
              <button
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onClick={handleClick}
                disabled={!isLoggedIn}
                className={
                  isClicked
                    ? "card__save-button card__save-button_type_clicked"
                    : "card__save-button"
                }
              ></button>
              {!isLoggedIn && (
                <button className="card__signin-button">
                  Sign in to save articles
                </button>
              )}
            </>
          )}
        </div>
      </div>
      <div className="card__text">
        <p className="card__date">{formattedDate}</p>
        <h2 className="card__title">{title}</h2>
        <p className="card__paragraph">{description}</p>
        <p className="card__source">{source}</p>
      </div>
    </div>
  );
}

export default NewsCard;

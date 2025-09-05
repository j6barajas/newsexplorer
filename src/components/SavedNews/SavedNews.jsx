import "./SavedNews.css";

import Navigation from "../Navigation/Navigation";
import NewsCardList from "../NewsCardList/NewsCardList";
import Footer from "../Footer/Footer";

function SavedNews({
  isLoggedIn,
  onLoginClick,
  handleLogOut,
  userData,
  articles,
}) {
  return (
    <div className="saved-news">
      <Navigation
        isLoggedIn={isLoggedIn}
        onLoginClick={onLoginClick}
        onLogOut={handleLogOut}
        userData={userData}
      />
      <div className="saved-news__text">
        <h2 className="saved-news__subheading">Saved articles</h2>
        <h1 className="saved-news__heading">
          {userData.username}, you have 6 saved articles
        </h1>
        {/* <p className="saved-news__keywords">By keywords: </p> */}
      </div>
      <NewsCardList
        userData={userData}
        articles={articles}
        isLoggedIn={isLoggedIn}
      />
      <Footer />
    </div>
  );
}

export default SavedNews;

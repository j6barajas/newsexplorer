import "./Main.css";

import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";
import NothingFound from "../NothingFound/NothingFound";

function Main({ isLoggedIn, isLoading, isSearched, articles }) {
  return (
    <main>
      {isLoading && <Preloader isLoading={isLoading} articles={articles} />}
      {isSearched && !isLoading && articles.length > 0 && (
        <NewsCardList articles={articles} isLoggedIn={isLoggedIn} />
      )}
      {isSearched && !isLoading && articles.length === 0 && <NothingFound />}
      <About />
    </main>
  );
}

export default Main;

import "./Main.css";

import Header from "../Header/Header";
import About from "../About/About";
import Footer from "../Footer/Footer";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";
import NothingFound from "../NothingFound/NothingFound";

function Main({
  isLoggedIn,
  isLoading,
  isSearched,
  articles,
  onLoginClick,
  handleLogOut,
  userData,
  handleSearchSubmit,
}) {
  return (
    <main>
      <Header
        isLoggedIn={isLoggedIn}
        onLoginClick={onLoginClick}
        handleLogOut={handleLogOut}
        userData={userData}
        handleSearchSubmit={handleSearchSubmit}
      />
      {isLoading && <Preloader isLoading={isLoading} articles={articles} />}
      {isSearched && !isLoading && articles.length > 0 && (
        <NewsCardList articles={articles} isLoggedIn={isLoggedIn} />
      )}
      {isSearched && !isLoading && articles.length === 0 && <NothingFound />}
      <About />
      <Footer />
    </main>
  );
}

export default Main;

import "./Header.css";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";

function Header({
  onLoginClick,
  userData,
  isLoggedIn,
  handleLogOut,
  handleSearchSubmit,
}) {
  return (
    <header className="header">
      <Navigation
        onLoginClick={onLoginClick}
        userData={userData}
        isLoggedIn={isLoggedIn}
        onLogOut={handleLogOut}
      />
      <div className="header__text">
        <h1 className="header__heading">What's going on in the world?</h1>
        <p className="header__subheading">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
      </div>
      <SearchForm onSearchSubmit={handleSearchSubmit} />
    </header>
  );
}

export default Header;

import "./Header.css";
import logoWhite from "../../assets/logo-white.svg";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";

function Header({ onLoginClick, userData, isLoggedIn, handleLogOut }) {
  return (
    <header className="header">
      <div className="header__menu">
        <Navigation
          onLoginClick={onLoginClick}
          userData={userData}
          isLoggedIn={isLoggedIn}
          onLogOut={handleLogOut}
        />
      </div>
      <div className="header__text">
        <h1 className="header__heading">What's going on in the world?</h1>
        <p className="header__subheading">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
      </div>
      <SearchForm />
    </header>
  );
}

export default Header;

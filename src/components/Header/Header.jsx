import "./Header.css";
import logoWhite from "../../assets/logo-white.svg";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";

function Header({}) {
  return (
    <header className="header">
      <div className="header__menu">
        <img className="header__logo" src={logoWhite} alt="NewsExplorer logo" />
        <Navigation />
      </div>
      <div className="header__text">
        <h1 className="header__big-text">What's going on in the world?</h1>
        <p className="header__little-text">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
      </div>
      <SearchForm />
    </header>
  );
}

export default Header;

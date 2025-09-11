import "./Navigation.css";
import { Link, useLocation } from "react-router-dom";
import logoutWhite from "../../assets/images/logout-white.svg";
import logoutBlack from "../../assets/images/logout-black.svg";
import { useState } from "react";

function Navigation({ onLoginClick, isLoggedIn, userData, onLogOut }) {
  const location = useLocation();
  const homePage = location.pathname === "/";

  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const conditionalContainer = homePage
    ? "navigation"
    : "navigation navigation_type_saved-news";
  const conditionalText = homePage
    ? "navigation__text"
    : "navigation__text navigation__text_type_saved-news";
  const conditionalLogo = homePage
    ? "navigation__logo"
    : "navigation__logo navigation__logo_type_saved-news";
  const conditionalButton = homePage
    ? "navigation__button navigation__button_type_logout"
    : "navigation__button navigation__button_type_saved-news";
  const conditionalMenuButton = homePage
    ? "navigation__menu-button"
    : "navigation__menu-button navigation__menu-button_saved-news";
  const conditionalNavMenu = homePage
    ? "navigation__links_open"
    : "navigation__links_open navigation__links_open-saved-news";
  const conditionalLogoutImage = homePage ? logoutWhite : logoutBlack;
  const activeHomeLink = homePage
    ? "navigation__link navigation__link_active_white"
    : "navigation__link";
  const savedArticlesLink = homePage
    ? "navigation__link"
    : "navigation__link navigation__link_active_black";
  return (
    <nav className={conditionalContainer}>
      <Link to="/" className="navigation__link">
        <p className={conditionalLogo}>NewsExplorer</p>
      </Link>
      <div
        className={`navigation__links ${isMobileOpen && conditionalNavMenu}`}
      >
        <Link to="/" className={activeHomeLink}>
          <p className={conditionalText}>Home</p>
        </Link>
        {isLoggedIn ? (
          <div className="navigation__container">
            <Link to="/saved-news" className={savedArticlesLink}>
              <p className={conditionalText}>Saved articles</p>
            </Link>
            <Link to="/" className="navigation__link">
              <button onClick={onLogOut} className={conditionalButton}>
                {userData.username}
                <img
                  className="navigation__logout-image"
                  src={conditionalLogoutImage}
                />
              </button>
            </Link>
          </div>
        ) : (
          <button onClick={onLoginClick} className="navigation__button">
            Sign in
          </button>
        )}
      </div>
      <button
        onClick={toggleMobileMenu}
        className={conditionalMenuButton}
      ></button>
    </nav>
  );
}

export default Navigation;

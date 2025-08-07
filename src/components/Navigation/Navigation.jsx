import "./Navigation.css";
import { Link } from "react-router-dom";
// import { useContext } from "react";
// import CurrentUserContext from "../../contexts/CurrentUserContext";
import logoutImage from "../../assets/logout.svg";

function Navigation({ onLoginClick, isLoggedIn, userData, onLogOut }) {
  return (
    <nav className="navigation">
      <Link to="/" className="navigation__link">
        <p className="navigation__text">Home</p>
      </Link>
      {isLoggedIn ? (
        <div className="navigation__container">
          <p className="navigation__text">Saved articles</p>
          <button
            onClick={onLogOut}
            className="navigation__button navigation__button_type_logout"
          >
            {userData.username}
            <img className="navigation__logout-image" src={logoutImage} />
          </button>
        </div>
      ) : (
        <button onClick={onLoginClick} className="navigation__button">
          Sign in
        </button>
      )}
    </nav>
  );
}

export default Navigation;

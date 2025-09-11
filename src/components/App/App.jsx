import { useState, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import SavedNews from "../SavedNews/SavedNews";
import { getNewsCards } from "../../utils/api";
import Footer from "../Footer/Footer";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [articles, setArticles] = useState([]);
  const [userData, setUserData] = useState({});
  const [isSearched, setIsSearched] = useState(false);

  const handleLogOut = () => {
    setIsLoggedIn(false);
    setUserData({});
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSwitchClick = (evt) => {
    if (evt.target.textContent === "Sign up") {
      setActiveModal("register");
    }
    if (evt.target.textContent === "Sign in") {
      setActiveModal("login");
    }
  };

  const handleLoginClick = () => {
    setActiveModal("login");
  };

  const handleSearchSubmit = (keyword) => {
    setIsLoading(true);
    setIsSearched(true);

    getNewsCards(keyword)
      .then((res) => {
        console.log(res);
        if (res.articles && res.articles.length > 0) {
          setArticles(res.articles);
        } else {
          setArticles([]);
        }
      })
      .catch((error) => {
        console.error(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    const handleKeyDown = (evt) => {
      if (evt.key === "Escape") {
        handleCloseModal();
      }
    };

    const handleOverlayClose = (evt) => {
      if (evt.target.classList.contains("modal_opened")) {
        handleCloseModal();
      }
    };

    if (activeModal === "login" || activeModal === "register") {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleOverlayClose);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleOverlayClose);
    };
  }, [activeModal, handleCloseModal]);

  return (
    <HashRouter>
      <div className="page">
        <Routes>
          <Route
            path="/"
            element={
              <div className="page__content">
                <Header
                  onLoginClick={handleLoginClick}
                  handleLogOut={handleLogOut}
                  userData={userData}
                  handleSearchSubmit={handleSearchSubmit}
                  isLoggedIn={isLoggedIn}
                />
                <Main
                  isLoggedIn={isLoggedIn}
                  isSearched={isSearched}
                  isLoading={isLoading}
                  articles={articles}
                />
                <Footer />
              </div>
            }
          />
          <Route
            path="/saved-news"
            element={
              <div className="page__content">
                <SavedNews
                  isLoggedIn={isLoggedIn}
                  articles={articles}
                  onLoginClick={handleLoginClick}
                  handleLogOut={handleLogOut}
                  userData={userData}
                />
                <Footer />
              </div>
            }
          />
        </Routes>
        <LoginModal
          isOpen={activeModal === "login"}
          activeModal={activeModal}
          handleCloseModal={handleCloseModal}
          onSwitchClick={handleSwitchClick}
          setIsLoggedIn={setIsLoggedIn}
          setActiveModal={setActiveModal}
          setUserData={setUserData}
        />
        <RegisterModal
          isOpen={activeModal === "register"}
          activeModal={activeModal}
          handleCloseModal={handleCloseModal}
          onSwitchClick={handleSwitchClick}
          setUserData={setUserData}
          setIsLoggedIn={setIsLoggedIn}
          setActiveModal={setActiveModal}
        />
        <ModalWithForm />
      </div>
    </HashRouter>
  );
}

export default App;

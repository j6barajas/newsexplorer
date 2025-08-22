import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Main from "../Main/Main";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import SavedNews from "../SavedNews/SavedNews";
import { getNewsCards } from "../../utils/api";

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

  const handleOverlayClose = (evt) => {
    if (evt.target.className.contains("modal_opened")) {
      handleCloseModal(evt.target);
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

  return (
    <BrowserRouter>
      <div className="page">
        <div className="page__content">
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  isLoggedIn={isLoggedIn}
                  isSearched={isSearched}
                  isLoading={isLoading}
                  articles={articles}
                  onLoginClick={handleLoginClick}
                  handleLogOut={handleLogOut}
                  userData={userData}
                  handleSearchSubmit={handleSearchSubmit}
                />
              }
            />
            <Route
              path="/saved-news"
              element={
                <SavedNews
                  isLoggedIn={isLoggedIn}
                  articles={articles}
                  onLoginClick={handleLoginClick}
                  handleLogOut={handleLogOut}
                  userData={userData}
                />
              }
            />
          </Routes>
        </div>
        <LoginModal
          isOpen={activeModal === "login"}
          activeModal={activeModal}
          handleCloseModal={handleCloseModal}
          handleOverlayClose={handleOverlayClose}
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
    </BrowserRouter>
  );
}

export default App;

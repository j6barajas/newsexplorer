import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { getCurrentUser, login } from "../../utils/api";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [cards, setCards] = useState([]);
  const [userData, setUserData] = useState({});

  const handleLogOut = () => {
    localStorage.removeItem("jwt");
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

  return (
    // <CurrentUserContext.Provider value={currentUser}>
    <BrowserRouter>
      <div className="page">
        <div className="page__content">
          <Header
            isLoggedIn={isLoggedIn}
            onLoginClick={handleLoginClick}
            handleLogOut={handleLogOut}
            userData={userData}
          />
          <Routes>
            <Route path="/" element={<Main />} />
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
    // </CurrentUserContext.Provider>
  );
}

export default App;

import { useState } from "react";

import "./App.css";
import Main from "../Main/Main";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [cards, setCards] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  const handleLogOut = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser({});
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__content">
          <Main />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

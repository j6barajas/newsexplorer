import ModalWithForm from "../ModalWithForm/ModalWithForm";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useState, useEffect, useContext } from "react";
import { register } from "../../utils/api";

function RegisterModal({
  isOpen,
  handleCloseModal,
  activeModal,
  onSwitchClick,
  setIsLoggedIn,
  setActiveModal,
  setUserData,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const currentUser = useContext(CurrentUserContext);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleRegisterSubmit = (evt) => {
    evt.preventDefault();
    register(username, email, password).then((userData) => {
      setUserData(userData);
      setIsLoggedIn(true);
      setActiveModal("");
    });
  };

  useEffect(() => {
    setEmail("");
    setPassword("");
    setUsername("");
  }, [isOpen]);

  return (
    <ModalWithForm
      isOpen={isOpen}
      handleCloseModal={handleCloseModal}
      activeModal={activeModal}
      buttonText="Sign up"
      title="Sign up"
      switchText="Sign in"
      onSwitchClick={onSwitchClick}
      onSubmit={handleRegisterSubmit}
    >
      <label htmlFor="registerEmail" className="modal__label">
        Email{" "}
        <input
          id="registerEmail"
          type="email"
          className="modal__input"
          placeholder="Enter email"
          onChange={handleEmailChange}
          value={email}
        />
      </label>
      <label
        htmlFor="registerPassword"
        className="modal__label modal__label_type_alternate"
      >
        Password{" "}
        <input
          id="registerPassword"
          type="password"
          className="modal__input"
          placeholder="Enter password"
          onChange={handlePasswordChange}
          value={password}
        />
      </label>
      <label
        htmlFor="registerUsername"
        className="modal__label modal__label_type_alternate"
      >
        Username{" "}
        <input
          id="registerUsername"
          type="username"
          className="modal__input"
          placeholder="Enter your username"
          onChange={handleUsernameChange}
          value={username}
        />
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;

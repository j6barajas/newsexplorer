import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
// import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useState, useEffect, useContext } from "react";
import { login, getCurrentUser } from "../../utils/auth";

function LoginModal({
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
  const [error, setError] = useState(null);

  // const currentUser = useContext(CurrentUserContext);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginSubmit = (evt) => {
    evt.preventDefault();
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    setError(emailRegex.test(email) ? null : "Invalid email address.");
    login(email, password).then((res) => {
      getCurrentUser(res.token).then((user) => {
        setUserData(user);
        setActiveModal("");
        setIsLoggedIn(true);
      });
    });
  };

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, [isOpen]);

  return (
    <ModalWithForm
      isOpen={isOpen}
      handleCloseModal={handleCloseModal}
      activeModal={activeModal}
      buttonText="Sign in"
      title="Sign in"
      switchText="Sign up"
      onSwitchClick={onSwitchClick}
      onSubmit={handleLoginSubmit}
    >
      <label htmlFor="loginEmail" className="modal__label">
        Email{" "}
        <input
          id="loginEmail"
          type="text"
          className="modal__input"
          placeholder="Enter email"
          onChange={handleEmailChange}
          value={email}
        />
        {error && <p className="modal__email-error">{error}</p>}
      </label>
      <label
        htmlFor="loginPassword"
        className="modal__label modal__label_type_password"
      >
        Password{" "}
        <input
          id="loginPassword"
          type="password"
          className="modal__input"
          placeholder="Enter password"
          onChange={handlePasswordChange}
          value={password}
        />
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;

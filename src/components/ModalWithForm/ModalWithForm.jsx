import "./ModalWithForm.css";
import { useContext } from "react";

function ModalWithForm({
  children,
  buttonText,
  switchText,
  title,
  isOpen,
  handleCloseModal,
  onSubmit,
  onSwitchClick,
}) {
  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={handleCloseModal}
          className="modal__close-button"
          type="button"
        />
        <form onSubmit={onSubmit} className="modal__form">
          {children}
          <button className="modal__submit" type="submit">
            {buttonText}
          </button>
          <p className="modal__or">
            or{" "}
            <span onClick={onSwitchClick} className="modal__switch">
              {switchText}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;

import "./SearchForm.css";
import { useState } from "react";

function SearchForm() {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (!value.trim()) {
      setError("Please enter a keyword.");
    } else {
      setError("");
    }
  };

  return (
    <form className="searchform">
      <input
        type="text"
        value={inputValue}
        className="searchform__input"
        placeholder="Enter topic"
        onChange={handleInputChange}
      ></input>
      {error && <p className="searchform__error">{error}</p>}
      <button className="searchform__button">Search</button>
    </form>
  );
}

export default SearchForm;

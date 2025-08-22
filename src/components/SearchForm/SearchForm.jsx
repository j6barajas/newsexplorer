import "./SearchForm.css";
import { useState } from "react";

function SearchForm({ onSearchSubmit }) {
  const [keyword, setKeyword] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setKeyword(value);
    if (!value.trim()) {
      setError("Please enter a keyword.");
    } else {
      setError("");
    }
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    onSearchSubmit(keyword);
  };

  return (
    <form onSubmit={handleFormSubmit} className="searchform">
      <input
        type="text"
        value={keyword}
        className="searchform__input"
        placeholder="Enter topic"
        onChange={handleInputChange}
      ></input>
      {error && <p className="searchform__error">{error}</p>}
      <button type="submit" className="searchform__button">
        Search
      </button>
    </form>
  );
}

export default SearchForm;

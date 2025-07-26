import "./SearchForm.css";

function SearchForm() {
  return (
    <form className="searchform">
      <input className="searchform__input" placeholder="Enter topic"></input>
      <button className="searchform__button">Search</button>
    </form>
  );
}

export default SearchForm;

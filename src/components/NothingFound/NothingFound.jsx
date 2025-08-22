import "./NothingFound.css";
import nothingFound from "../../assets/images/nothingfound.svg";

function NothingFound() {
  return (
    <div className="nothing-found">
      <img
        className="nothing-found__image"
        src={nothingFound}
        alt="Magnifying class with frownie face"
      />
      <h2 className="nothing-found__heading">Nothing found</h2>
      <p className="nothing-found__text">
        Sorry, but nothing matched your search terms.
      </p>
    </div>
  );
}

export default NothingFound;

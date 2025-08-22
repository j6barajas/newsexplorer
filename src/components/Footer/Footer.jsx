import "./Footer.css";
import github from "../../assets/images/github.svg";
import linkedIn from "../../assets/images/linkedin.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">© 2025 Supersite, Powered by News API</p>
      <div className="footer__container">
        <div className="footer__links">
          <Link to="/" className="footer__link">
            <p className="footer__link">Home</p>
          </Link>
          <a className="footer__link" href="https://tripleten.com/">
            TripleTen
          </a>
        </div>
        <div className="footer__logos">
          <a href="https://github.com/j6barajas">
            <img className="footer__logo" src={github} />
          </a>
          <a href="https://www.linkedin.com/in/jes%C3%BAs-barajas/">
            <img className="footer__logo" src={linkedIn} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

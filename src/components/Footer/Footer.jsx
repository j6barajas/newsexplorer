import "./Footer.css";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">© 2025 Supersite, Powered by News API</p>
      <div className="footer__container">
        <div className="footer__links">
          <p className="footer__link">Home</p>
          <a className="footer__link" href="https://tripleten.com/">
            TripleTen
          </a>
        </div>
        <div className="footer__logos">
          <a href="https://github.com/j6barajas">
            <img className="footer__logo" src={github} />
          </a>
          <a href="https://www.linkedin.com/in/jes%C3%BAs-barajas/">
            <img className="footer__logo" src={linkedin} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

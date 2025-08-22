import "./About.css";
import aboutImage from "../../assets/images/about-image.jpg";

function About() {
  return (
    <div className="about">
      <img className="about__image" src={aboutImage} />
      <div className="about__text-container">
        <h2 className="about__heading">About the author</h2>
        <p className="about__paragraph">
          Jesús Barajas is a web developer with experience using HTML, CSS,
          Javascript, React, Express, and more. Jesús recently completed the
          Software Engineering program at TripleTen, whose curriculum includes
          both front-end and back-end technologies. An actor by training, Jesús
          would relish the opportunity to use his creativity and communication
          abilities to help deliver projects for clients.
        </p>
      </div>
    </div>
  );
}

export default About;

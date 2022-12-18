import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Md.Mobin </span>
            from <span className="purple"> New Delhi, India.</span>
            <br />I am pursuing graduation in B.Tech(computer science and engineering) from <a href="http://www.ipu.ac.in/">Guru Gobind Singh Indraprastha University.</a>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Practice makes you perfect"{" "}
          </p>
          <footer className="blockquote-footer">Mobin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

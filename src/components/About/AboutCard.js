import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hydar Ali </span>
            from <span className="purple"> Bangalore, India.</span>
            <br />
            I am currently working as a Java Full Stack trainee at TATA Strive.
            <br />
            I have completed BE-CSE(Computer Science & Engineering)  Atria Institute of Technology,
            Bangalore.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Anime
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Hydar Ali</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

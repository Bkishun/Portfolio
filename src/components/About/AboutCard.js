import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Balkishun Maurya </span>
            from <span className="purple"> Kanpur, India.</span>
            <br />
            I am currently persuing engineering from Dr. AITD Kanpur.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Singing
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing musical instrument
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build not just to exist, but to impact"{" "}
          </p>
          <footer className="blockquote-footer">Balkishun</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

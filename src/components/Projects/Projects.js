import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Summext"
              description="Extract handwritten or printed text from images using PyTesseract, process it with Flask backend, and display the cleaned summary using a responsive React frontend. Fast, accurate, and user-friendly solution"
              ghLink="https://github.com/Bkishun/summext-frontend"
              demoLink="https://final-frontend-ruby.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Social-media"
              description="A MERN stack social media app where users can upload and share videos, while others can watch, like, and comment. Real-time interactions and a smooth user experience across all devices"
              ghLink="https://github.com/Bkishun/Social-media-App-full-stack"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Predict Gender"
              description="A React-based web app that predicts a person’s gender using their name by fetching data from a gender prediction API. Simple UI, real-time response, and intuitive user interaction"
              ghLink="https://github.com/Bkishun/predict-gender"
              demoLink=""              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

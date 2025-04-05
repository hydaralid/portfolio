import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ekart from "../../Assets/Projects/ekart.jpeg";
import evfinder from "../../Assets/Projects/evfinder.jpeg";
import greencart from "../../Assets/Projects/greencart.jpeg";
import shoppingmall from "../../Assets/Projects/shoppingmall.png";
import tourism from "../../Assets/Projects/tourism.jpeg";

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
              imgPath={greencart}
              isBlog={false}
              title="GreenCart"
              description="Greencart fosters eco-conscious habits by offering rewards for sustainable shopping. Users earn tokens by uploading grocery receipts featuring green products, promoting environmentally-friendly choices and contributing to a healthier planet."
              ghLink="https://github.com/hydaralid/GreenCart_Full_Stack_Project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shoppingmall}
              isBlog={false}
              title="Shopping Mall Management"
              description="Shopping Mall Management involves overseeing operations, tenant relationships, security, maintenance, and promotions to ensure seamless functionality, customer satisfaction, and a thriving retail environment for businesses and shoppers alike."
              ghLink="https://github.com/hydaralid/Shopping-Mall-Management---JFS"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tourism}
              isBlog={false}
              title="Tourism Website"
              description="A Tourism Website offers comprehensive travel information, including destinations, accommodations, activities, and local attractions, enabling users to plan memorable trips effortlessly while promoting cultural experiences and boosting regional tourism."
              ghLink="https://github.com/hydaralid/Tourism-Website-Amritsar"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ekart}
              isBlog={false}
              title="eKart"
              description="eKart Logistics, India's largest supply chain partner, offers efficient end-to-end solutions, including warehousing, distribution, and express delivery services, ensuring seamless operations and enhanced customer satisfaction."
              ghLink="https://github.com/hydaralid/ekart"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={evfinder}
              isBlog={false}
              title="EV Finder App"
              description="An EV Finder App helps users locate nearby electric vehicle charging stations, provides real-time availability, supports seamless payments, and enhances the EV ownership experience with convenience and efficiency."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

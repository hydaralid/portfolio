import React from "react";
import { Container, Row, Col, Carousel, Card } from "react-bootstrap";
import Particle from "../Particle";
import sql from "../../Assets/Certificates/sql.png";
import java from "../../Assets/Certificates/java.png";
import html from "../../Assets/Certificates/html.png";
import css from "../../Assets/Certificates/css.png";
import spring from "../../Assets/Certificates/spring.png";
import react from "../../Assets/Certificates/react.png";
import bootstrap from "../../Assets/Certificates/bootstrap.png";
import api from "../../Assets/Certificates/api.png";
import git from "../../Assets/Certificates/git.png";

function Certificates() {
  // Group projects by category
  const webProjects = [
    {
      imgPath: spring,
      title: "spring",
      description: "In Java, Spring is a popular framework for building scalable applications. It offers dependency injection, modular architecture, and simplifies enterprise-level application development."
    },
    {
      imgPath: react,
      title: "React Js",
      description: "React.js, developed by Meta, is a powerful JavaScript library for building user interfaces. It enables efficient rendering, component-based architecture, and dynamic web applications."
    },
    {
      imgPath: git,
      title: "Github",
      description: "Git is a distributed version control system that tracks changes in code, enabling collaboration. GitHub is a platform hosting Git repositories, enhancing teamwork."
     },
    {
      imgPath: sql,
      title: "SQL",
      description: "SQL (Structured Query Language) is used to manage and manipulate relational databases. It enables querying, updating, and organizing data efficiently and reliably."
     },
    {
      imgPath: api,
      title: "REST API",
      description: "REST API (Representational State Transfer) enables communication between systems using HTTP. It provides lightweight, scalable interfaces for accessing and manipulating web resources seamlessly."
      },
    {
      imgPath: html,
      title: "HTML",
      description: "HTML (HyperText Markup Language) is the backbone of web development. It structures web pages using elements like headings, paragraphs, links, and images effectively."
     },
    {
      imgPath: css,
      title: "CSS",
      description: "CSS (Cascading Style Sheets) is a language used for designing and styling web pages. It controls layout, colors, fonts, and overall presentation."
     },
    {
    imgPath: bootstrap,
    title: "Bootstrap",
    description: "Bootstrap is a popular open-source CSS framework that simplifies web development. It provides pre-designed components and responsive grid systems for creating modern, mobile-friendly websites."
    },
    {
      imgPath: java,
      title: "Java",
      description: "Java is a versatile, object-oriented programming language. It’s widely used for building applications, from web and mobile to enterprise-level solutions, ensuring platform independence."
    }
  ];



  // Project Carousel Component
  const ProjectCarousel = ({ projects, category }) => {
    return (
      <Col xs={12} sm={12} md={10} lg={8} className="mb-5">

        <Carousel 
          interval={2000} 
          className="project-carousel"
          wrap={true}
        >
          {projects.map((project, index) => (
            <Carousel.Item key={index}>
              <Card className="project-card-view">
                <div className="image-container" style={{ 
                  display: "flex", 
                  justifyContent: "center",
                  padding: "10px"
                }}>
                  <Card.Img 
                    variant="top" 
                    src={project.imgPath} 
                    alt={project.title} 
                    style={{ 
                      maxHeight: "450px", 
                      width: "100%", 
                    }} 
                  />
                </div>
                <Card.Body>
                  <Card.Title className="text-center">{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <hr></hr>
                </Card.Body>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>
      </Col>
    );
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading text-center">
          My <strong className="purple">Certifications</strong>
        </h1>

        {/* Web Development Projects */}
        <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
          <ProjectCarousel projects={webProjects} category="Web Development" />
        </Row>

      </Container>
    </Container>
  );
}

// Add this CSS to your stylesheet or component
const style = `
@media (max-width: 767px) {
  .project-card-view {
    margin: 0 10px;
  }
  
  .project-card-view .card-body {
    padding: 15px 10px;
  }
  
  .project-heading {
    font-size: 1.75rem;
    margin-bottom: 20px;
  }
}
`;

export default Certificates;
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  const boxStyle = {
    border: "2px solid purple",
    boxShadow: "0 0 15px rgba(128, 0, 128, 0.5)",
    backgroundColor: "black",
    color: "white",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "20px",
    textAlign: "center",
  };

  return (
    <Container fluid className="footer" style={{ padding: "40px 20px", backgroundColor: "#111" }}>
      <Row className="justify-content-center">
        {/* Contact Details */}
        <Col md={6} className="home-about-social mb-4">
          <div style={boxStyle}>
            <h2 className="mb-3">Contact Details</h2>

            <Row className="mb-2">
              <Col xs={12} sm={6} className="mb-2 mb-sm-0">
                <p className="m-0"><strong>Name:</strong> Hydar Ali D</p>
              </Col>
              <Col xs={12} sm={6}>
                <p className="m-0"><strong>Phone:</strong> +91-7892547975</p>
              </Col>
            </Row>

            <Row>
              <Col xs={12} sm={6} className="mb-2 mb-sm-0">
                <p className="m-0"><strong>Email:</strong> hydaralid@gmail.com</p>
              </Col>
              <Col xs={12} sm={6}>
                <p className="m-0"><strong>Place:</strong> Bangalore</p>
              </Col>
            </Row>
          </div>
        </Col>

        {/* Find Me On */}
        <Col md={6} className="home-about-social">
          <div style={boxStyle}>
            <h3>FIND ME ON</h3>
            <p>Feel free to <span className="purple">connect</span> with me</p>
            <ul
              className="home-about-social-links"
              style={{
                listStyle: "none",
                paddingLeft: 0,
                display: "flex",
                justifyContent: "center",
                gap: "15px",
                flexWrap: "wrap",
              }}
            >
              <li className="social-icons">
                <a
                  href="https://github.com/hydaralid"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  style={{ color: "white", fontSize: "1.8rem" }}
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/hydar-ali/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  style={{ color: "white", fontSize: "1.8rem" }}
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/accounts/login/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  style={{ color: "white", fontSize: "1.8rem" }}
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>

      {/* Footer Bottom Row */}
      <Row className="text-center mt-4">
        <Col className="footer-copywright">
          <h5 style={{ color: "white" }}>© {year} Hydar Ali</h5>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
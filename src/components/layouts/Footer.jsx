import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logoB01 from "../../assets/LogoB-01.svg";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  const styleFooter = {
    boxShadow: "0 50vh 0 50vh #27388d",
    background: "#27388D",
    minHeight: "200px",
    color: "white",
    paddingTop: "40px",
    paddingBottom:"40px"
  };
  const styleTextCol = {
    textDecoration: "none",
    color: "white",
    paddingTop: "5px",
  };
  const styleInputEmail = {
    background: "transparent",
    color: "white",
  };
  const styleButtonInput = {
    backgroundColor: "white",
    color: "#2699FB",
  };
  return (
    <Container style={styleFooter}>
      <Row>
        <Col xs={12} sm={12} md={3} className=" d-flex justify-cotent-center pt-4">
          <a href="/" className="navbar-brand mx-auto">
            <img
              src={logoB01}
              className="img-fluid shadow-4"
              alt="logo"
              style={{ maxWidth: 150, width: "80%" }}
            />
            <p>© 2022</p>
          </a>
        </Col>
        <Col xs={6} sm={6} md={3} className="pt-4">
          <a href="#" className="d-block" style={styleTextCol}>
            Nosotros
          </a>
          <a href="#" className="d-block" style={styleTextCol}>
            Cómo funciona
          </a>
          <a href="#" className="d-block" style={styleTextCol}>
            Términos y condiciones
          </a>
        </Col>
        <Col xs={6} sm={6} md={3} className="pt-4">
          <a href="#" className="d-block" style={styleTextCol}>
            <FaFacebookF /> Facebook
          </a>
          <a href="#" className="d-block" style={styleTextCol}>
            <FaTwitter /> Twitter
          </a>
          <a href="#" className="d-block" style={styleTextCol}>
            <FaInstagram /> Instgram
          </a>
        </Col>
        <Col xs={12} sm={12} md={3} className="pt-4">
          <p style={styleTextCol}>Más información</p>
          <div className="input-group">
            <input
              type="text"
              className="form-control border"
              placeholder="Correo electrónico"
              aria-label="Correo electrónico"
              style={styleInputEmail}
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              style={styleButtonInput}
            >
              Ok
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

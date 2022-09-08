import React from "react";
import logo01 from "../../assets/logo-01.svg";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container fluid className="ps-3 pe-3">
        <Navbar.Brand href="/">
          <img src={logo01} width="45%" height="45%" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-end">
            <Nav.Link href="#">Espacios activos</Nav.Link>
            <Nav.Link href="#">Espacios finalizados</Nav.Link>
            <Nav.Link href="#">Registrarse</Nav.Link>
            <Nav.Link href="#">Iniciar sesion</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;

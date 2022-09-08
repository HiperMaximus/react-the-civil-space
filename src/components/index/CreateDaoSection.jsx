import React from "react";
import logoB01 from "../../assets/LogoB-01.svg";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

function CreateDaoSection() {
  const styleCardContainer = {
    background: "transparent",
    color: "white",
    border: 0,
  };
  const styleButtonCreate = {
    backgroundColor: "#f0b9fe",
    color: "#27388d",
    width: "198px",
    height: "46px",
  };
  return (
    <div className="col-xs-10 col-sm-10 col-md-4 col-lg-3 mt-4">
      <div className="card text-start" style={styleCardContainer}>
        <div className="card-header" style={styleCardContainer}>
          <img
            src={logoB01}
            className="img-fluid shadow-4"
            alt="logo"
            style={{ maxWidth: 300, width: "80%" }}
          />
        </div>
        <div className="card-body mt-4">
          <h1>TU OPINIÓN Y VOTO CUENTA</h1>
          <h4 className="mt-4">
            Crea, comenta y vota por las mejores propuestas de manera
            transparente y segura.
          </h4>
          <a
            className="btn mt-4"
            id="buttonCrearPropuesta"
            href="#"
            style={styleButtonCreate}
          >
            <h5 className="pt-1 fw-bold">Crea tu DAO</h5>
          </a>
          <Button
            className="btn mt-4 fw-bold"
            style={styleButtonCreate}
            disabled
            hidden
          >
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
              className="me-2"
            />
            Loading...
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CreateDaoSection;

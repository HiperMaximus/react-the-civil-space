import React from "react";

function InfoGeneralText() {
  const styleCardContainer = {
    background: "transparent",
    color: "#5D72DC",
    border: 0,
  };
  const styleButtonCreate = {
    border: "3px solid #5D72DC",
    opacity: "1",
    color: "#5D72DC",
    width: "198px",
    height: "46px"
  };
  return (
    <div className="col-xs-12 col-sm-10 col-md-8 col-lg-6 col-xl-3 mt-4">
      <div className="card text-start ps-4" style={styleCardContainer}>
        <div className="card-header" style={styleCardContainer}></div>
        <div className="card-body mt-4">
          <h1 className="fw-bold">TU OPINIÓN Y VOTO CUENTA</h1>
          <h4 className="mt-4">
            Crea, comenta y vota por las mejores propuestas de manera
            transparente y segura.
          </h4>
          <a
            className="btn mt-4"
            id="buttonCrearPropuesta"
            href="/"
            style={styleButtonCreate}
          >
            <h5 className="pt-1 fw-bold">Registrarse</h5>
          </a>
        </div>
      </div>
    </div>
  );
}

export default InfoGeneralText;

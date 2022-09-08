import React from "react";

function DaosCard({ dao }) {
  const styleButton = {
    border: "3px solid #5D72DC",
    opacity: "1",
    color: "#5D72DC"
  };
  const roundedCard = {
    borderRadius: "14px",
  };
  const styleFooterCard = {
    background: "transparent",
  };
  return (
    <div className="col mt-4 mb-4">
      <div className="card h-100 mb-4 text-center" style={roundedCard}>
        <div className="card-body">
          <h3 className="card-title text-break pb-4 fw-bold">{dao.title}</h3>
          <h4 className="card-text text-break pb-4 fw-light">{dao.description}</h4>
        </div>
        <div className="card-footer border-0 text-center mb-4" style={styleFooterCard}>
          <a className="btn fw-bold" href={dao.url} style={styleButton}>
          <h4 className="pt-1 fw-light">Ir al Espacio</h4>
          </a>
        </div>
      </div>
    </div>
  );
}

export default DaosCard;

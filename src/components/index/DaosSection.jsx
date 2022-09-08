import React, { useContext } from "react";
import DaosCard from "./DaosCard";
import { DaosContext } from "../../context/DaoContext";

function DaosSection() {
  const { daos } = useContext(DaosContext);
  if (daos.length === 0) {
    return <h1>No hay Daos aun</h1>;
  }

  const styleCardContainer = {
    background: "transparent",
  };

  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
      <div
        className="card mt-5 text-center border-0"
        style={styleCardContainer}
      >
        <div className="card-body text-start">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 pt-4 ms-4 me-4">
              {daos.map((dao) => (
                <DaosCard key={dao.id} dao={dao} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DaosSection;

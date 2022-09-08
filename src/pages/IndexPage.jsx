import React from "react";
import InfoGeneral from "../components/index/InfoGeneral";

function IndexPage() {
  const styleIndexPage = {
    minHeight: "750px",
    background: "",
  };
  return (
    <div
      className="row pt-2 justify-content-center g-0"
      style={styleIndexPage}
    >
      <InfoGeneral />
    </div>
  );
}

export default IndexPage;

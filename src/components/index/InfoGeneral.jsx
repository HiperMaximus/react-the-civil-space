import React from "react";
import InfoGeneralText from "./InfoGeneralText";
import InfoGeneralImage from "./InfoGeneralImage";
import PreFooterSection from "./PreFooterSection";
import ActiveSpaces from "./ActiveSpaces";

function InfoGeneral() {
  const styleInfoGeneral = {
    minHeight: "650px",
    background: "white",
  };
  return (
    <>
      <div
        className="row ps-4 pe-4 justify-content-center g-0"
        style={styleInfoGeneral}
      >
        <InfoGeneralText />
        <InfoGeneralImage />
      </div>
      <ActiveSpaces />
      <PreFooterSection />
    </>
  );
}

export default InfoGeneral;

import React from 'react'

function PreFooterSection() {
    const stylePreFooter={
        background:"#5d7bd5",
        minHeight: "400px",
    }
    const styleCard={
        background: "transparent",
        color:"white",
    }
    const styleButtonCreate = {
        border: "3px solid white",
        opacity: "1",
        color: "white",
        width: "198px",
        height: "46px"
      };
  return (
    <div style={stylePreFooter}>
        <div className="card text-center align-items-center border-0 mt-4" style={styleCard}>
            <h1 className="card-body border-0 mt-4 fw-bold">
            SEGURO, CONFIABLE Y DINÁMICO
            </h1>
            <h4 className='mt-4 fw-light'>Haz tus propias propuestas, participa en otras.</h4>
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
  )
}

export default PreFooterSection
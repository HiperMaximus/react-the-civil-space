import React from 'react'
import DaosSection from './DaosSection'
import './Custom.css'

function ActiveSpaces() {
    const styleActiveSpaces = {
        minHeight: "400px",
        background: "",
        color:"#5D72DC"
      };
  return (
    <div className='text-center bg-gradient' style={styleActiveSpaces}>
        <h1 className='fw-bold mt-4'>PROPUESTAS ACTIVAS</h1>
        <DaosSection/>
    </div>
  )
}

export default ActiveSpaces
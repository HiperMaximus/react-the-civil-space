import React from 'react'
import ImageInfo from '../../assets/19198668.jpg'

function InfoGeneralImage() {
    const styleImageInfo={
        maxHeight: "550px",
        maxWidth: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center"
    }
  return (
    <div className="col-xs-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 card border-0">
    <img className='img-fluid' src={ImageInfo} alt="" style={styleImageInfo} />
    </div>
  )
}

export default InfoGeneralImage
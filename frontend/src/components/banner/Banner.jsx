import React from 'react'
import bannerImage from "../../assets/img/logos/banner.png"
import "../../assets/styles/banner.css";

export default function Banner() {
  return (
    <div className='banner'>
        <div>
    <h3 className='banner-top-title' style={{paddingBottom: '12px'}}>
        NUEVA
    </h3>
    <h2 className="banner-title">
        CANGRE
    </h2>
    <h2 className="banner-title">
        BURGUER
    </h2>
    <p className="banner-subtitle" style={{paddingTop: '64px'}}>
        ELEGIDAS POR LOS MAS MANIJAS
    </p>
        </div>
    <img 
    className='banner-img'
    src={bannerImage} alt="banner image bob esponja" />
  </div>
  )
}

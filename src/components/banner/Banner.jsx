import bannerImage from "../../assets/img/logos/banner.png"
import "../../assets/styles/banner.css";

export default function Banner() {
  return (
    <div className='banner'>
        <div>
    <h3 className='banner-top-title'>
        NUEVA
    </h3>
    <h2 className="banner-title">
        CANGRE
    </h2>
    <h2 className="banner-title">
        BURGUER
    </h2>
    <p className="banner-subtitle">
        ELEGIDAS POR LOS MAS MANIJAS
    </p>
        </div>
    <img 
    className='banner-img'
    src={bannerImage} alt="banner image bob esponja" />
  </div>
  )
}

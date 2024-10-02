
import notification from '../../assets/img/campana.svg';
import userImg from '../../assets/img/user.svg';

export const SearchProduct = () => {
  return (
    <div className="top-bar">
        <input type="search" placeholder="Buscar producto..." className="search-bar"/>
        <div className="notification">
            <img src={notification} alt="notificaciones"/>
        </div>
        <div className="profile">
            <img src={userImg} alt="Usuario"/>
        </div>
    </div>
  )
}

import notification from "../assets/img/icons/campana.svg";
import userImg from "../assets/img/icons/user.svg";
import cart from "../assets/img/icons/carrito.svg";
import PropTypes from 'prop-types';

// import { useNavigate } from "react-router-dom";

export const User = ({setIsLogged, handleShowEmptyCart}) => {

  // const navigate = useNavigate();

  const userOut = () => {
    setIsLogged(false);
    localStorage.removeItem("Logged");
  }

  return (
    <div className="container-notify-cart-profile">
      <div className="notification">
        <img src={notification} alt="Notificacion" />
      </div>
      <div className="cart" onClick={handleShowEmptyCart}>
        <img src={cart} alt="Carrito" />
      </div>
      <div className="profile" onClick={userOut} title="salir">
        <img src={userImg} alt="Usuario"/>
      </div>
    </div>
  );
};


User.propTypes = {
  setIsLogged: PropTypes.func.isRequired,
  handleShowEmptyCart: PropTypes.func,
}
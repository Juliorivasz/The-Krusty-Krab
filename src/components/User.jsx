import notification from "../assets/img/icons/campana.svg";
import userImg from "../assets/img/icons/user.svg";
import cart from "../assets/img/icons/carrito.svg";
import PropTypes from 'prop-types';
import { useState } from "react";
import { ProfileDropDown } from "./modal/ProfileDropDown.jsx"; // Importa el menú desplegable

export const User = ({handleShowEmptyCart,showNotifications, setShowNotifications}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Manejo del estado del menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Alterna el estado del menú
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false); // Cierra el menú
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <div className="container-notify-cart-profile">
      <div className="notification" onClick={toggleNotifications}>
        <img src={notification} alt="Notificación" />
      </div>
      <div className="cart" onClick={handleShowEmptyCart}>
        <img src={cart} alt="Carrito" />
      </div>
      <div className="profile" onClick={toggleMenu}>
        <img src={userImg} alt="Usuario" />
      </div>
      {/* Mostrar menú desplegable solo si está abierto */}
      {isMenuOpen && <ProfileDropDown onClose={handleCloseMenu} />}
    </div>
  );
};


User.propTypes = {
  handleShowEmptyCart: PropTypes.func,
}
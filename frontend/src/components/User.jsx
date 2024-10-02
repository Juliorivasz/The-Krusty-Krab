import notification from "../assets/img/icons/campana.svg";
import userImg from "../assets/img/icons/user.svg";
import cart from "../assets/img/icons/carrito.svg";

export const User = () => {
  return (
    <div className="container-notify-cart-profile">
      <div className="notification">
        <img src={notification} alt="Notificacion" />
      </div>
      <div className="cart">
        <img src={cart} alt="Carrito" />
      </div>
      <div className="profile">
        <img src={userImg} alt="Usuario" />
      </div>
    </div>
  );
};

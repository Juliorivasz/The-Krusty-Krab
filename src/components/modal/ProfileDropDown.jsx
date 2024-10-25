import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types"; // Importa PropTypes
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import "../../assets/styles/ProfileDropDown.css";
import userImage from "../../assets/img/icons/user.svg"; // Importar la imagen

export const ProfileDropDown = ({ onClose }) => {
  const dropdownRef = useRef(null); // Referencia para el contenedor del menú
  const [username, setUsername] = useState(localStorage.getItem('username'));
  const navigate = useNavigate(); // Inicializa useNavigate

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      onClose(); // Cierra el menú en el componente padre
    }
  };

  const handleLoggout = () => {
    localStorage.removeItem('isLogged');
    localStorage.removeItem('email');
    window.location.reload();
  };

  const handleLinkClick = (path) => {
    navigate(path); // Navega a la ruta especificada
    onClose(); // Cierra el menú después de navegar
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside); // Añadir el evento de clic al documento
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Limpiar el evento al desmontar el componente
    };
  }, []);

  return (
    <div className="profile-dropdown-container" ref={dropdownRef}>
      <div className="profile-dropdown">
        <div className="profile-header">
          <img src={userImage} alt="Usuario" className="profile-image" />
          <p className="username">{username}</p>
        </div>
        <div className="links-container">
          <a className="profile-link" onClick={() => handleLinkClick('/userprofile')}>Editar Perfil</a>
          <div className="divider"></div>
          <a className="profile-link" onClick={() => handleLinkClick('/userprofile')}>Mis Direcciones</a>
          <div className="divider"></div>
          <a className="profile-link" onClick={() => handleLinkClick('/userprofile')}>Mis Métodos de Pago</a>
        </div>
        <button className="logout-button" onClick={handleLoggout}>Cerrar sesión</button>
      </div>
    </div>
  );
};

// Validación de las propiedades
ProfileDropDown.propTypes = {
  onClose: PropTypes.func.isRequired, // onClose debe ser una función requerida
};

import "../assets/styles/UserProfile.css";
import userImage from "../../src/assets/img/icons/user.svg";
import pencilIcon from "../../src/assets/img/icons/pencil.svg";
import { useNavigate } from "react-router-dom";

export const UserProfile = () => {
  const navigate = useNavigate();

  const handleEditProfile = () => {
    navigate("/edit-profile");
  };

  return (
    <div className="user-profile">
      <div className="profile-header">
        <div className="profile-image-container">
          <img src={userImage} alt="Usuario" className="profile-image" />
          <button className="edit-button" onClick={handleEditProfile}>
            <img src={pencilIcon} alt="Editar" />
          </button>
        </div>
        <h1 className="profile-title">{localStorage.getItem('username')}</h1>
      </div>

      {/* Sección del teléfono */}
      <div className="phone-section" style={{ marginBottom: "40px" }}>
        <h2 className="section-title">Teléfono</h2>
        <div style={{ display: "flex", alignItems: "center" }}>
          <p className="phone-number" style={{ marginRight: "10px" }}>555-1234</p>
          <button className="edit-button" onClick={handleEditProfile}>
            <img src={pencilIcon} alt="Editar teléfono" />
          </button>
        </div>
      </div>

      {/* Línea divisoria entre Teléfono y Mis Direcciones */}
      <hr className="divider" />

      {/* Sección Mis Direcciones */}
      <div className="address-section" style={{ marginBottom: "40px" }}>
        <h2 className="section-title">Mis Direcciones</h2>
        <ul className="address-list">
          <li className="address-item">
            <div className="address-info">
              <p className="address-title">Casa</p>
              <p className="address-detail">Calle Falsa 123, Ciudad, País</p>
            </div>
            <button className="address-edit-button">
              <img src={pencilIcon} alt="Editar dirección" />
            </button>
          </li>

          <li className="address-item">
            <div className="address-info">
              <p className="address-title">Oficina</p>
              <p className="address-detail">Avenida Siempre Viva 742, Ciudad, País</p>
            </div>
            <button className="address-edit-button">
              <img src={pencilIcon} alt="Editar dirección" />
            </button>
          </li>

          <li className="address-item">
            <div className="address-info">
              <p className="address-title">Departamento</p>
              <p className="address-detail">Boulevard de los Sueños Rotos, Ciudad, País</p>
            </div>
            <button className="address-edit-button">
              <img src={pencilIcon} alt="Editar dirección" />
            </button>
          </li>
        </ul>

        {/* Botón para agregar nueva dirección */}
        <button className="add-address-button" onClick={handleEditProfile}>
          Agregar Dirección
        </button>
      </div>

      {/* Línea divisoria entre Mis Direcciones y Métodos de Pago */}
      <hr className="divider" />

      {/* Sección Métodos de Pago */}
      <div className="payment-methods-section" style={{ marginBottom: "40px" }}>
        <h2 className="section-title">Métodos de Pago</h2>
        <ul className="address-list">
          <li className="address-item">
            <div className="address-info">
              <p className="address-title">Visa</p>
              <p className="address-detail">**** **** **** 1234</p>
            </div>
            <button className="address-edit-button">
              <img src={pencilIcon} alt="Editar método de pago" />
            </button>
          </li>

          <li className="address-item">
            <div className="address-info">
              <p className="address-title">Mastercard</p>
              <p className="address-detail">**** **** **** 5678</p>
            </div>
            <button className="address-edit-button">
              <img src={pencilIcon} alt="Editar método de pago" />
            </button>
          </li>

          <li className="address-item">
            <div className="address-info">
              <p className="address-title">Visa</p>
              <p className="address-detail">**** **** **** 9101</p>
            </div>
            <button className="address-edit-button">
              <img src={pencilIcon} alt="Editar método de pago" />
            </button>
          </li>
        </ul>

        {/* Botón para agregar nuevo método de pago */}
        <button className="add-address-button" onClick={handleEditProfile}>
          Agregar Método de Pago
        </button>
      </div>
    </div>
  );
};

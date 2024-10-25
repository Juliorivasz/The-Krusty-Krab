/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import { resetPassword } from "../../authService";
import { MessageError } from "./MessageError";

export const RecoveryPassword = ({ viewRecovery, setViewRecovery }) => {
  const [forgotEmail, setForgotEmail] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [viewError, setViewError] = useState(false);

  const changeView = () => {
    setViewRecovery(!viewRecovery);
  };

  const sendRecovery = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(forgotEmail);
      setIsSent(true);
      setViewError(false);
    } catch (error) {
      console.error("Error al enviar el correo de recuperación:", error);
      setViewError(true);
    }
  };

  return (
    <div className="cont-form" id="forgot-password-form">
      <form onSubmit={sendRecovery}>
        <label htmlFor="forgot-email">Email:</label>
        <input
          type="email"
          id="forgot-email"
          name="forgot-email"
          value={forgotEmail}
          onChange={(e) => setForgotEmail(e.target.value)}
          required
        />
        {viewError && <MessageError message={"Los datos ingresados son incorrectos"} />}
        {isSent && <p style={{background: "white", padding: ".5rem", borderRadius: ".5rem"}}>Revisa tu correo para restablecer tu contraseña.</p>}
        <button type="submit">Enviar</button>
      </form>

      <div className="signup-section">
        <p>¿Ya recuerdas tu contraseña?</p>
        <Link className="create-account-btn" onClick={changeView}>Inicia sesión</Link>
      </div>
    </div>
  );
};

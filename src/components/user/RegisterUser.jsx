import "../../assets/styles/registerUser.css";
import tkk from "/TKK.svg";
import logoFace from "../../assets/img/logos/logo-face.png";
import logoGoogle from "../../assets/img/logos/circle-g-google-google-new-google-icon-825017.png";
import eyeIcon from "../../assets/img/icons/eye.svg";
import eyeWhiteIcon from "../../assets/img/icons/eye-white.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { SucessForm } from "../modal/SucessForm";
import useAuth from "../auth/useAuth"; // Importa tu hook de autenticación

export const RegisterUser = () => {
  const { handleRegister, handleGoogleLogin, handleFacebookLogin, authError, authSuccess } = useAuth();
  
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [sendSuccess, setSendSuccess] = useState(false);

  const registerSubmit = async (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      await handleRegister(email, password);
      if (authSuccess) {
        setSendSuccess(true);
      }
    } else {
      alert("Las contraseñas no son iguales");
    }
  };

  return (
    <>
      <div className="container">
        <div className="form-container">
          <div className="logo-container">
            <img src={tkk} alt="Logo de la marca" className="brand-logo" />
          </div>
          <div className="cont-form">
            <form onSubmit={registerSubmit}>
              <label htmlFor="fullname">Nombre y Apellido</label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                onChange={(e) => setNombre(e.target.value)}
                required
              />

              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label htmlFor="password">Contraseña</label>
              <div style={{ position: "relative" }}>
                <input
                  type={showPass ? "text" : "password"}
                  id="password"
                  name="password"
                  onChange={(event) => setPassword(event.target.value)}
                  required
                />
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    position: "absolute",
                    top: "20%",
                    right: "3%",
                    cursor: "pointer",
                  }}
                  onClick={() => setShowPass(!showPass)}
                >
                  <img src={showPass ? eyeWhiteIcon : eyeIcon} alt="ver contraseña" />
                </div>
              </div>

              <label htmlFor="confirm-password">Repetir Contraseña</label>
              <div style={{ position: "relative" }}>
                <input
                  type={showConfirmPass ? "text" : "password"}
                  id="confirm-password"
                  name="confirm-password"
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  required
                />
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    position: "absolute",
                    top: "20%",
                    right: "3%",
                    cursor: "pointer",
                  }}
                  onClick={() => setShowConfirmPass(!showConfirmPass)}
                >
                  <img src={showConfirmPass ? eyeWhiteIcon : eyeIcon} alt="ver contraseña" />
                </div>
              </div>

              <button type="submit">Registrarse</button>
            </form>
            {authError && <p className="error-message" style={{color: 'red', padding: ".2rem", margin: "1rem 0"}}>{authError}</p>}
            <div className="or-section">
              <p>O regístrate con</p>
              <div className="social-buttons">
                <button onClick={handleGoogleLogin} className="google-btn">
                  <img src={logoGoogle} alt="Google logo" className="logo" /> Google
                </button>
                <button onClick={handleFacebookLogin} className="facebook-btn">
                  <img src={logoFace} alt="Facebook logo" className="logo" /> Facebook
                </button>
              </div>
            </div>

            <div className="signup-section">
              <p>¿Ya tienes una cuenta?</p>
              <Link className="create-account-btn" to="/admin">
                Inicia sesión
              </Link>
            </div>
          </div>
        </div>
        {sendSuccess && <SucessForm />}
      </div>
    </>
  );
};

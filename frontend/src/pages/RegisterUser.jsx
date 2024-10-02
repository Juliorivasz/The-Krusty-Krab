import "../assets/styles/registerUser.css";

import tkk from "/TKK.svg";
import logoFace from "../assets/img/logos/logo-face.png";
import logoGoogle from "../assets/img/logos/circle-g-google-google-new-google-icon-825017.png";
import eyeIcon from "../assets/img/icons/eye.svg";
import eyeWhiteIcon from "../assets/img/icons/eye-white.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { SucessForm } from "../modal/SucessForm";

const users = {
  nombre: "",
  email: "",
  password: "",
};

export const RegisterUser = () => {
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [showPass, setShowPäss] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [user, setUser] = useState(users);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [sendSucess, setSendSucess] = useState(false);

  const registerSubmit = (event) => {
    event.preventDefault();
    if (password == ConfirmPassword) {
      setUser((prevData) => ({
        ...prevData,
        ["nombre"]: nombre,
        ["email"]: email,
        ["password"]: password,
      }));
      setSendSucess(true);
      console.log(`Bienvenido ${user.nombre}`);
    } else {
      alert("las contraseñas no son iguales");
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
                    top: "13%",
                    right: "3%",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setShowPäss(!showPass);
                  }}
                >
                  <img
                    src={showPass ? eyeWhiteIcon : eyeIcon}
                    alt="ver contraseña"
                  />
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
                    top: "13%",
                    right: "3%",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setShowConfirmPass(!showConfirmPass);
                  }}
                >
                  <img
                    src={showConfirmPass ? eyeWhiteIcon : eyeIcon}
                    alt="ver contraseña"
                  />
                </div>
              </div>

              <button type="submit">Registrarse</button>
            </form>
            <div className="or-section">
              <p>O regístrate con</p>
              <div className="social-buttons">
                <button id="googleBtn" className="google-btn">
                  <img src={logoGoogle} alt="Google logo" className="logo" />{" "}
                  Google
                </button>
                <button id="faceBtn" className="facebook-btn">
                  <img src={logoFace} alt="Facebook logo" className="logo" />{" "}
                  Facebook
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
        {sendSucess ? <SucessForm /> : ""}
      </div>
    </>
  );
};

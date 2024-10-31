import "../../assets/styles/registerUser.css";
import tkk from "/TKK.svg";
import logoFace from "../../assets/img/icons/facebook.svg";
import logoGoogle from "../../assets/img/logos/Google.svg";
import eyeIcon from "../../assets/img/icons/eye.svg";
import eyeWhiteIcon from "../../assets/img/icons/eye-white.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { SucessForm } from "../modal/SucessForm";
import useAuth from "../auth/useAuth"; // Importa tu hook de autenticación
import Swal from "sweetalert2";

export const RegisterUser = () => {
  const { handleRegister, handleGoogleLogin, handleFacebookLogin, authError, authSuccess } = useAuth();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [sendSuccess, setSendSuccess] = useState(false);

  // Mensajes de error
  const [errors, setErrors] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    confirmPassword: "",
    authErrors: authError,
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setErrors({});
    }, 5000); // 2 segundos para desaparecer

    return () => clearTimeout(timeout); // limpia el temporizador al desmontar
  }, [errors]);

  const validateFields = () => {
    let newErrors = {};

    if (!nombre.trim()) newErrors.nombre = "El nombre no puede estar vacío.";
    if (!apellido.trim()) newErrors.apellido = "El apellido no puede estar vacío.";
    if (!email.trim()) newErrors.email = "El email no puede estar vacío.";
    if (authError) newErrors.authErrors = authError;

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!password.match(passwordRegex)) {
      newErrors.password = "La contraseña debe tener al menos 8 caracteres, incluyendo una letra y un número.";
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Las contraseñas no son iguales.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const registerSubmit = async (event) => {
    event.preventDefault();
    if (validateFields()) {
      await handleRegister(email, password, nombre, apellido);
      if (authSuccess) {
        Swal.fire({
          title: "Registro completado!",
          text: "Ya eres parte de nosotros!",
          icon: "success"
        }).then(() => {
          setSendSuccess(true);
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Por favor, revisa los campos e inténtalo de nuevo.",
      });
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
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={(e) => setNombre(e.target.value)}
                required
              />
              <p className={`fade-out ${errors.nombre ? 'error-message' : ""}`}>{errors.nombre}</p>

              <label htmlFor="lastname">Apellido</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                onChange={(e) => setApellido(e.target.value)}
                required
              />
              <p className={`fade-out ${errors.apellido ? 'error-message' : ""}`}>{errors.apellido}</p>

              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <p className={`fade-out ${errors.email ? 'error-message' : ""}`}>{errors.email}</p>

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
              <p className={`fade-out ${errors.password ? 'error-message' : ""}`}>{errors.password}</p>
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
              <p className={`fade-out ${errors.confirmPassword ? 'error-message' : ""}`}>{errors.confirmPassword}</p>

              <button type="submit">Registrarse</button>
            </form>
            <p className={`fade-out ${errors.authErrors ? 'error-message' : ""}`}>{errors.authErrors}</p>
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


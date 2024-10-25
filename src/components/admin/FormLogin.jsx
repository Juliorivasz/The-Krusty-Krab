import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { MessageError } from "./MessageError";
import logoFace from '../../assets/img/logos/logo-face.png';
import logoGoogle from '../../assets/img/logos/circle-g-google-google-new-google-icon-825017.png';
import eyeIcon from '../../assets/img/icons/eye.svg';
import eyeWhiteIcon from '../../assets/img/icons/eye-white.svg';
import useAuth from '../auth/useAuth'; // Asegúrate de que la ruta sea correcta

export const FormLogin = ({ viewRecovery, setViewRecovery }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const { handleLogin, handleGoogleLogin, handleFacebookLogin, authError, authSuccess } = useAuth();
  const navigate = useNavigate();

  const changeView = () => {
    setViewRecovery(!viewRecovery);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await handleLogin(email, password);
    if (authSuccess) {
      localStorage.setItem('isLogged', 'true');
      localStorage.setItem('userEmail', email);
      navigate("/menu");
    }
  };

  return (
    <div className="cont-form" id="login-form">
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="username">Email</label>
        <input type="email" id="username" name="username" onChange={(event) => setEmail(event.target.value)} required />
        
        <label htmlFor="password">Contraseña</label>
        <div style={{ position: "relative" }}>
          <input type={showPass ? "text" : "password"} id="password" name="password" onChange={(event) => setPassword(event.target.value)} required />
          <div
            style={{ width: "20px", height: "20px", position: "absolute", top: "13%", right: "3%", cursor: "pointer" }}
            onClick={() => setShowPass(!showPass)}
            >
            <img src={showPass ? eyeWhiteIcon : eyeIcon} alt="ver contraseña" />
          </div>
        </div>
        {authError && <MessageError message={authError} />}

        <Link to="#" className="forgot-password-btn" onClick={changeView}>¿Has olvidado tu contraseña?</Link>
        <button type="submit">Iniciar Sesión</button>
      </form>

      <div className="or-section">
        <p>O inicia sesión con</p>
        <div className="social-buttons">
          <button onClick={handleGoogleLogin} className="google-btn">
            <img src={logoGoogle} alt="Iniciar sesión con Google" className="logo" /> Google
          </button>
          <button onClick={handleFacebookLogin} className="facebook-btn">
            <img src={logoFace} alt="Iniciar sesión con Facebook" className="logo" /> Facebook
          </button>
        </div>
      </div>

      <div className="signup-section">
        <p>¿Todavía no tienes una cuenta?</p>
        <Link className="create-account-btn" to="/register">Crea una ahora</Link>
      </div>
    </div>
  );
};

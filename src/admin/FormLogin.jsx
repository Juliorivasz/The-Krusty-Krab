import { Link, useNavigate } from "react-router-dom";
import logoFace from '../assets/img/logos/logo-face.png';
import logoGoogle from '../assets/img/logos/circle-g-google-google-new-google-icon-825017.png';
import eyeIcon from '../assets/img/icons/eye.svg';
import eyeWhiteIcon from '../assets/img/icons/eye-white.svg';
import { useState } from "react";
import { MessageError } from "./MessageError";

const credentials = {
  email: 'julioandresrivas@gmail.com',
  password: '27158930'
}

export const FormLogin = ({ viewRecovery, setViewRecovery }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [showPass, setShowPäss] = useState(false);
  const navigate = useNavigate();

  const changeView = () => {
    setViewRecovery(!viewRecovery);
  }

  const handleLogin = (event) => {
    event.preventDefault();

    if (credentials.email === email && credentials.password !== password) {
      setIsValidEmail(true);
      setIsValidPassword(false);
    } else if (credentials.password === password && credentials.email !== email) {
      setIsValidPassword(true);
      setIsValidEmail(false);
    } else if (credentials.email === email && credentials.password === password) {
      setIsValidEmail(true);
      setIsValidPassword(true);

      // Guardar información en localStorage
      localStorage.setItem('isLogged', 'true');
      localStorage.setItem('userEmail', email); // Puedes almacenar más datos si lo deseas
      localStorage.setItem('username', 'Julio Rivas');

      navigate('/menu');
    } else {
      setIsValidEmail(false);
      setIsValidPassword(false);
    }

    return;
  };

  return (
    <>
      <div className="cont-form" id="login-form">
        <form onSubmit={handleLogin}>
          <label htmlFor="username">Email</label>
          <input type="email" id="username" name="username" onChange={(event) => setEmail(event.target.value)} required />
          {isValidEmail ? "" : <MessageError message={'El email ingresado es incorrecto'} />}

          <label htmlFor="password">Contraseña</label>
          <div style={{ position: "relative" }}>
            <input type={showPass ? "text" : "password"} id="password" name="password" onChange={(event) => setPassword(event.target.value)} required />
            <div style={{ width: "20px", height: "20px", position: "absolute", top: "13%", right: "3%", cursor: "pointer" }} onClick={() => { setShowPäss(!showPass) }}>
              <img src={showPass ? eyeWhiteIcon : eyeIcon} alt="ver contraseña" />
            </div>
          </div>
          {isValidPassword ? "" : <MessageError message={'La contraseña ingresada es incorrecta'} />}

          <Link to={undefined} className="forgot-password-btn" onClick={changeView}>¿Has olvidado tu contraseña?</Link>

          <button type="submit">Iniciar Sesión</button>
        </form>

        <div className="or-section">
          <p>O inicia sesión con</p>
          <div className="social-buttons">
            <button id="googleBtn" className="google-btn">
              <img src={logoGoogle} alt="Iniciar sesión con Google" className="logo" /> Google
            </button>
            <button id="faceBtn" className="facebook-btn">
              <img src={logoFace} alt="Iniciar sesión con Facebook" className="logo" /> Facebook
            </button>
          </div>
        </div>

        <div className="signup-section">
          <p>¿Todavía no tienes una cuenta?</p>
          <Link className="create-account-btn" to="/register">Crea una ahora</Link>
        </div>
      </div>
    </>
  );
}

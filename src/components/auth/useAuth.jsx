import { useState } from "react";
import { 
  registerWithEmail, 
  loginWithEmail, 
  loginWithGoogle, 
  loginWithFacebook, 
  logout 
} from "../../authService";
import { useNavigate } from "react-router-dom";


const useAuth = () => {
  const navigate = useNavigate();
  const [authError, setAuthError] = useState(null);
  const [authSuccess, setAuthSuccess] = useState(null);

  const handleRegister = async (email, password) => {
    try {
      await registerWithEmail(email, password);
      setAuthSuccess("Usuario registrado exitosamente.");
      setAuthError(null);
    } catch (error) {
      console.error("Error en el registro:", error);
      setAuthError("Error en el registro. Inténtalo de nuevo.");
      setAuthSuccess(null);
    }
  };

  const handleLogin = async (email, password) => {
    try {
      await loginWithEmail(email, password);
      setAuthSuccess("Inicio de sesión exitoso.");
      setAuthError(null);
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setAuthError("Error al iniciar sesión. Inténtalo de nuevo.");
      setAuthSuccess(null);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const userGoogle = await loginWithGoogle();
      setAuthSuccess("Inicio de sesión con Google exitoso.");
      localStorage.setItem('isLogged', 'true');
      localStorage.setItem('userEmail', userGoogle.user.email);
      navigate("/menu");
      setAuthError(null);
    } catch (error) {
      console.error("Error con Google:", error);
      setAuthError("Error al iniciar sesión con Google.");
      setAuthSuccess(null);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      await loginWithFacebook();
      setAuthSuccess("Inicio de sesión con Facebook exitoso.");
      setAuthError(null);
    } catch (error) {
      console.error("Error con Facebook:", error);
      setAuthError("Error al iniciar sesión con Facebook.");
      setAuthSuccess(null);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setAuthSuccess("Sesión cerrada exitosamente.");
      setAuthError(null);
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
      setAuthError("Error al cerrar sesión.");
      setAuthSuccess(null);
    }
  };

  return { 
    handleGoogleLogin, 
    handleFacebookLogin, 
    handleLogin, 
    handleRegister, 
    handleLogout, 
    authError, 
    authSuccess 
  };
};

export default useAuth;


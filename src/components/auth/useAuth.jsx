import Swal from "sweetalert2";
import { useState } from "react";
import { 
  registerWithEmail, 
  loginWithEmail, 
  loginWithGoogle, 
  loginWithFacebook, 
  logout, 
  resetPassword
} from "../../authService";
import { useNavigate } from "react-router-dom";


const useAuth = () => {
  const navigate = useNavigate();
  const [authError, setAuthError] = useState(null);
  const [authSuccess, setAuthSuccess] = useState(null);

  const handleRegister = async (email, password, nombre, apellido) => {
    try {
      await registerWithEmail(email, password, nombre, apellido);
      Swal.fire({
        title: "Registro completado!",
        text: "Ya formas parte de nosotros!",
        icon: "success"
      }).then(() => {
        navigate('/admin');
      });
      setAuthSuccess("Usuario registrado exitosamente.");
      setAuthError(null);
    } catch (error) {
      console.error("Error en el registro:", error);
  
      // Verifica el tipo de error de Firebase
      if (error.code === 'auth/email-already-in-use') {
        Swal.fire({
          title: "Error en el registro",
          text: "El correo electrónico ya está en uso.",
          icon: "error"
        });
        setAuthError("El correo electrónico ya está en uso.");
      } else {
        setAuthError("Error en el registro. Inténtalo de nuevo.");
      }
  
      setAuthSuccess(null);
    }
  };
  

  const handleLogin = async (email, password) => {
    try {
      const userLog = await loginWithEmail(email, password);
      localStorage.setItem('user', JSON.stringify(userLog.user));
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
      localStorage.setItem('user', JSON.stringify(userGoogle.user));
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

  const handleRecoveryPassword = async (email) => {
    try {
      await resetPassword(email);
      Swal.fire({
        title: "Envio exitoso!",
        text: "Revisa tu correo, puede tardar unos minutos!",
        icon: "success"
      }).then(()=>{
        navigate(0);
      });
      setAuthSuccess("Recuperacion enviada exitosamente.");
      setAuthError(null);
    } catch (error) {
      console.error("Error al recuperar la contraseña:", error);
      setAuthError("Error de recuperacion de constraseña.");
      setAuthSuccess(null);
    }
  }

  return { 
    handleGoogleLogin, 
    handleFacebookLogin, 
    handleLogin, 
    handleRegister, 
    handleLogout,
    handleRecoveryPassword, 
    authError, 
    authSuccess 
  };
};

export default useAuth;


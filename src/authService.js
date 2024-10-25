import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, signInWithPopup, sendPasswordResetEmail } from "firebase/auth";
import { auth, googleProvider, facebookProvider } from "./firebaseConfig";

// Registro con email y contraseña
export const registerWithEmail = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// Inicio de sesión con email y contraseña
export const loginWithEmail = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Inicio de sesión con Google
export const loginWithGoogle = () => {
  return signInWithPopup(auth, googleProvider);
};

// Inicio de sesión con Facebook
export const loginWithFacebook = () => {
  return signInWithPopup(auth, facebookProvider);
};

// Cerrar sesión
export const logout = () => {
  return signOut(auth);
};

// enviar un correo para recuperar la contraseña
export const resetPassword = async (email) => {
  return await sendPasswordResetEmail(auth, email);
};

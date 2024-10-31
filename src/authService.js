import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, signInWithPopup, sendPasswordResetEmail } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, googleProvider, facebookProvider, db } from "./firebaseConfig";

// Registro con email y contraseña
export const registerWithEmail = async (email, password, nombre, apellido) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;
  
  // Guarda el nombre y apellido en Firestore
  await setDoc(doc(db, "users", user.uid), {
    nombre,
    apellido,
    email
  });
  return user;
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

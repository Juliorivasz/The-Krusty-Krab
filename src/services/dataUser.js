/* eslint-disable no-unused-vars */
import Swal from "sweetalert2";
import { db } from "../firebaseConfig";
import {
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  getDoc,
} from "firebase/firestore";

export const addAddress = async (userId, newAddress) => {
  try {
    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, {
      direccion: arrayUnion(newAddress), // Agrega la nueva dirección al array
    });
    Swal.fire({
      title: "¡Genial!",
      text: "Dirección agregada exitosamente!",
      icon: "success",
    });
  } catch (error) {
    console.error("Error al agregar la dirección: ", error);
  }
};

export const updateAddress = async (userId, index, updatedAddress) => {
  try {
    const userRef = doc(db, "users", userId);
    const userDoc = await getDoc(userRef);

    if (userDoc.exists()) {
      const addresses = userDoc.data().direccion;
      addresses[index] = updatedAddress; // Actualiza la dirección en el índice especificado

      await updateDoc(userRef, {
        direccion: addresses, // Guarda el array actualizado
      });

      Swal.fire({
        title: "¡Maravilloso!",
        text: "Dirección modificada exitosamente!",
        icon: "success",
      });
    } else {
      console.log("No se encontró el documento del usuario.");
    }
  } catch (error) {
    console.error("Error al modificar la dirección: ", error);
  }
};

export const confirmDeleteAddress = (addressToDelete) => {
  return Swal.fire({
    title: "¿Estás seguro?",
    text: "OJO, no se podrá revertir!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, eliminar!",
  }).then((result) => result.isConfirmed);
};

export const deleteAddress = async (userId, addressToDelete) => {
  try {
    const userRef = doc(db, "users", userId);

    // Aquí solo actualizamos el documento
    await updateDoc(userRef, {
      direccion: arrayRemove(addressToDelete),
    });

    // Mensaje de éxito
    Swal.fire({
      title: "Eliminado!",
      text: "Dirección eliminada exitosamente.",
      icon: "success",
    });
  } catch (error) {
    console.error("Error al eliminar la dirección: ", error);
    Swal.fire({
      title: "Error!",
      text: "No se pudo eliminar la dirección.",
      icon: "error",
    });
  }
};

export const getUserAddresses = async (userId) => {
  try {
    const userRef = doc(db, "users", userId); // Accede al documento del usuario
    const userDoc = await getDoc(userRef); // Obtén el documento del usuario

    if (userDoc.exists()) {
      const addresses = userDoc.data().direccion; // Obtén el array de direcciones
      return addresses; // Retorna las direcciones
    } else {
      return []; // Retorna un array vacío si el documento no existe
    }
  } catch (error) {
    console.error("Error obteniendo las direcciones:", error);
    throw error;
  }
};

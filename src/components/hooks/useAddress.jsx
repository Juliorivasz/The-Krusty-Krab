// useAddress.js
import { useState, useEffect } from "react";
import { getUserAddresses, addAddress, updateAddress, deleteAddress, confirmDeleteAddress } from "../../services/dataUser";

const useAddress = (userId) => {
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch addresses on initial load
  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const userAddresses = await getUserAddresses(userId);
        setAddresses(userAddresses);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAddresses();
  }, [userId]);

  // Add a new address
  const handleAddAddress = async (newAddress) => {
    try {
      await addAddress(userId, newAddress); // Solo agrega la dirección
      setAddresses((prevAddresses) => [...prevAddresses, newAddress]); // Agrega la nueva dirección al estado
    } catch (err) {
      setError(err.message);
    }
  };

  // Update an existing address
  const handleUpdateAddress = async (index, updatedAddress) => { // Cambié addressId por index
    try {
      await updateAddress(userId, index, updatedAddress); // Actualiza la dirección
      setAddresses((prevAddresses) =>
        prevAddresses.map((addr, i) => (i === index ? updatedAddress : addr)) // Usa index para actualizar
      );
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDeleteAddress = async (addressToDelete) => {
    try {
      const confirmed = await confirmDeleteAddress(addressToDelete);
      if (confirmed) {
        await deleteAddress(userId, addressToDelete); // Elimina la dirección
        setAddresses((prevAddresses) => prevAddresses.filter((addr) => addr !== addressToDelete)); // Filtra la dirección eliminada
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return {
    addresses,
    loading,
    error,
    handleAddAddress,
    handleUpdateAddress,
    handleDeleteAddress,
  };
};

export default useAddress;


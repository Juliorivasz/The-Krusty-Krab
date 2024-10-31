/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Box, Button, TextField, Typography, Checkbox, FormControlLabel } from "@mui/material";
import mercadoPagoLogo from "../../assets/img/logos/mercadoPagoLogo.svg";
import binanceLogo from "../../assets/img/logos/binanceLogo.svg";
import useAddress from "../hooks/useAddress"; // Asegúrate de importar el custom hook

const AddressPayment = ({ userId }) => {
  const { addresses, loading, error, handleAddAddress, handleUpdateAddress, handleDeleteAddress } = useAddress(userId);

  const [newAddress, setNewAddress] = useState("");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [selectedAddress, setSelectedAddress] = useState(""); // Estado para la dirección seleccionada
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const savedPaymentMethod = localStorage.getItem("paymentMethod") || "";
    setSelectedPaymentMethod(savedPaymentMethod);
  }, []);

  useEffect(() => {
    localStorage.setItem("paymentMethod", selectedPaymentMethod);
  }, [selectedPaymentMethod]);

  useEffect(() => {
    localStorage.setItem("selectedAddress", selectedAddress); // Guardar dirección seleccionada en localStorage
  }, [selectedAddress]);

  const handleAddOrUpdateAddress = () => {
    if (newAddress.trim() === "") return;

    if (editIndex !== null) {
      // Actualizar dirección existente
      handleUpdateAddress(editIndex, newAddress);
      setEditIndex(null);
    } else {
      // Agregar nueva dirección
      handleAddAddress(newAddress);
    }
    setNewAddress("");
  };

  const handleEditAddress = (address, index) => {
    setNewAddress(address);
    setEditIndex(index);
  };

  const handleRemoveAddress = (address) => {
    handleDeleteAddress(address);
  };

  const handlePaymentMethodChange = (method) => {
    setSelectedPaymentMethod(method);
  };

  const handleSelectAddress = (address) => {
    setSelectedAddress(address); // Actualiza la dirección seleccionada
  };

  return (
    <Box sx={{ width: "100%", padding: "1rem" }}>
      <Typography variant="h4">Dirección</Typography>

      <Typography variant="h6" sx={{ mt: 2 }}>
        Direcciones Registradas:
      </Typography>

      <Box sx={{ overflowY: "scroll", maxHeight: "220px", mb: 2 }}>
        {loading ? (
          <Typography variant="body1">Cargando direcciones...</Typography>
        ) : error ? (
          <Typography variant="body1" color="error">
            Error: {error}
          </Typography>
        ) : addresses.length === 0 ? (
          <Box sx={{ backgroundColor: "#f5f5f5", padding: "1rem", borderRadius: "8px", textAlign: "center" }}>
            <Typography variant="body1" sx={{ color: "#666" }}>
              No hay direcciones registradas.
            </Typography>
          </Box>
        ) : (
          addresses.map((address, index) => (
            <Box key={index} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mt: 1, background: "white", padding: "1rem", borderRadius: ".5rem" }}>
              <Typography>{address}</Typography>
              <Box>
                <Checkbox
                  checked={selectedAddress === address}
                  onChange={() => handleSelectAddress(address)} // Maneja la selección de la dirección
                  sx={{ "&.Mui-checked": { color: selectedPaymentMethod === "MercadoPago" ? "#FFA500" : "#FFA500" } }} // Cambiar color del checkbox
                />
                <Button variant="contained" sx={{ backgroundColor: "#FFA500", color: "white", marginRight: 1 }} onClick={() => handleEditAddress(address, index)}>
                  Modificar
                </Button>
                <Button variant="contained" sx={{ backgroundColor: "#FF6347", color: "white" }} onClick={() => handleRemoveAddress(address)}>
                  Eliminar
                </Button>
              </Box>
            </Box>
          ))
        )}
      </Box>

      <TextField
        label={editIndex !== null ? "Modificar dirección" : "Agregar nueva dirección"}
        variant="outlined"
        fullWidth
        value={newAddress}
        onChange={(e) => setNewAddress(e.target.value)}
        sx={{
          marginTop: 2,
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#fff",
            },
            "&:hover fieldset": {
              borderColor: "#fff",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#fff",
            },
          },
          backgroundColor: "#fff",
        }}
      />
      <Button variant="contained" onClick={handleAddOrUpdateAddress} sx={{ marginTop: 2, backgroundColor: "#FFA500", color: "white" }}>
        {editIndex !== null ? "Guardar Cambios" : "Agregar Dirección"}
      </Button>

      <Typography variant="h4" sx={{ mt: 4 }}>
        Método de Pago
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", mt: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", padding: "1rem", backgroundColor: "white", borderRadius: "4px", mb: 1 }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedPaymentMethod === "MercadoPago"}
                onChange={() => handlePaymentMethodChange("MercadoPago")}
                sx={{ "&.Mui-checked": { color: "#FFA500" } }} // Color para MercadoPago
              />
            }
            label={
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <img src={mercadoPagoLogo} alt="Mercado Pago" style={{ width: "50px", marginRight: "8px" }} />
                Mercado Pago
              </Box>
            }
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", padding: "1rem", backgroundColor: "white", borderRadius: "4px" }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedPaymentMethod === "Binance"}
                onChange={() => handlePaymentMethodChange("Binance")}
                sx={{ "&.Mui-checked": { color: "#FFA500" } }} // Color para Binance
              />
            }
            label={
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <img src={binanceLogo} alt="Binance" style={{ width: "50px", marginRight: "8px" }} />
                Binance
              </Box>
            }
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AddressPayment;














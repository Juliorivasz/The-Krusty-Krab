import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import mercadoPagoLogo from '../assets/img/logos/mercadoPagoLogo.svg';
import binanceLogo from '../assets/img/logos/binanceLogo.svg';

const AddressPayment = () => {
  const [addresses, setAddresses] = useState([]);
  const [newAddress, setNewAddress] = useState('');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const savedAddresses = JSON.parse(localStorage.getItem('addresses')) || [];
    const savedPaymentMethod = localStorage.getItem('paymentMethod') || '';
    setAddresses(savedAddresses);
    setSelectedPaymentMethod(savedPaymentMethod);
  }, []);

  useEffect(() => {
    if (addresses.length > 0) {
      localStorage.setItem('addresses', JSON.stringify(addresses));
    } else {
      localStorage.removeItem('addresses');
    }
    localStorage.setItem('paymentMethod', selectedPaymentMethod);
  }, [addresses, selectedPaymentMethod]);

  const handleAddAddress = () => {
    if (newAddress.trim() === '') return;

    if (addresses.includes(newAddress.trim())) {
      alert("Esta dirección ya está registrada.");
      return;
    }

    const updatedAddresses = editIndex !== null
      ? addresses.map((address, index) => index === editIndex ? newAddress.trim() : address)
      : [...addresses, newAddress.trim()];

    setAddresses(updatedAddresses);
    setEditIndex(null);
    setNewAddress('');
  };

  const handleRemoveAddress = (addressToRemove) => {
    setAddresses((prevAddresses) => prevAddresses.filter((address) => address !== addressToRemove));
  };

  const handleEditAddress = (address, index) => {
    setNewAddress(address);
    setEditIndex(index);
  };

  const handlePaymentMethodChange = (method) => {
    setSelectedPaymentMethod(method);
  };

  return (
    <Box sx={{ width: '100%', padding: '1rem' }}>
      <Typography variant="h4">Dirección</Typography>

      <Typography variant="h6" sx={{ mt: 2 }}>
        Direcciones Registradas:
      </Typography>
      <Box sx={{ overflowY: "scroll", maxHeight: "220px", mb: 2 }}>
        {addresses.length === 0 ? (
          <Box
            sx={{
              backgroundColor: '#f5f5f5',
              padding: '1rem',
              borderRadius: '8px',
              textAlign: 'center',
            }}
          >
            <Typography variant="body1" sx={{ color: '#666' }}>
              No hay direcciones registradas.
            </Typography>
          </Box>
        ) : (
          addresses.map((address, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 1, background: "white", padding: "1rem", borderRadius: ".5rem" }}>
              <Typography>{address}</Typography>
              <Box>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: '#FFA500', color: 'white', marginRight: 1 }}
                  onClick={() => handleEditAddress(address, index)}
                >
                  Modificar
                </Button>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: '#FF6347', color: 'white' }}
                  onClick={() => handleRemoveAddress(address)}
                >
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
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#fff',
            },
            '&:hover fieldset': {
              borderColor: '#fff',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#fff',
            },
          },
          backgroundColor: '#fff',
        }}
      />
      <Button
        variant="contained"
        onClick={handleAddAddress}
        sx={{ marginTop: 2, backgroundColor: '#FFA500', color: 'white' }}
      >
        {editIndex !== null ? "Guardar Cambios" : "Agregar Dirección"}
      </Button>

      <Typography variant="h4" sx={{ mt: 4 }}>
        Método de Pago
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', mt: 2 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: '1rem',
            backgroundColor: 'white',
            borderRadius: '4px',
            mb: 1,
          }}
        >
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedPaymentMethod === 'MercadoPago'}
                onChange={() => handlePaymentMethodChange('MercadoPago')}
                sx={{ '&.Mui-checked': { color: '#FFA500' } }}
              />
            }
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img src={mercadoPagoLogo} alt="Mercado Pago" style={{ width: '50px', marginRight: '8px' }} />
                Mercado Pago
              </Box>
            }
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: '1rem',
            backgroundColor: 'white',
            borderRadius: '4px',
          }}
        >
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedPaymentMethod === 'Binance'}
                onChange={() => handlePaymentMethodChange('Binance')}
                sx={{ '&.Mui-checked': { color: '#FFA500' } }}
              />
            }
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img src={binanceLogo} alt="Binance" style={{ width: '50px', marginRight: '8px' }} />
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











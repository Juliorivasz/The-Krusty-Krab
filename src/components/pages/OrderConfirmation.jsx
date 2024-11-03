/* eslint-disable react/prop-types */
// OrderConfirmation.js
import Typography from '@mui/material/Typography';
import { Box, Paper, Grid } from '@mui/material';
import { Wallet } from "@mercadopago/sdk-react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // Icono para la confirmación

const OrderConfirmation = ({ address, products, methodPaySelect, preferenceId }) => {
  // Calcular el total
  const total = products.reduce((acc, product) => acc + product.product.price * product.units, 0);

  return (
    <Box sx={{ padding: 3, backgroundColor: '#f5f5f5' }}>
      <Paper elevation={6} sx={{ padding: 3, borderRadius: '8px', backgroundColor: '#ffffff' }}>
        <Typography variant="h4" sx={{ marginBottom: 2, color: '#F89604', textAlign: 'center' }}>
          <CheckCircleIcon sx={{ fontSize: 30, color: '#F89604', verticalAlign: 'middle', marginRight: 1 }} />
          Confirmación del Pedido
        </Typography>
        
        <Typography variant="h6" sx={{ marginBottom: 1, color: '#333', fontWeight: 'bold' }}>
          Dirección Elegida:
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 2, color: '#555', fontWeight: 'bold' }}>
          {address}
        </Typography>

        <Typography variant="h6" sx={{ marginBottom: 1, color: '#333', fontWeight: 'bold' }}>
          Productos Elegidos:
        </Typography>

        <Grid container spacing={2}>
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Paper sx={{ padding: 2, borderRadius: '8px', backgroundColor: '#f0f0f0', boxShadow: 1 }}>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  {product.product.title}
                </Typography>
                <Typography variant="body2">
                  Cantidad: {product.units}
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#F89604' }}>
                  Precio Total: ${product.product.price * product.units}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Mostrar el total justo antes del botón de Mercado Pago */}
        <Typography variant="h6" sx={{ marginTop: 2, fontWeight: 'bold', color: '#333' }}>
          Total: ${total}
        </Typography>

        {methodPaySelect === "MercadoPago" && (
          <Box sx={{ marginTop: 2, padding: 2, borderRadius: '8px', backgroundColor: '#e7f3fe', border: '1px solid #2196f3' }}>
            <Typography variant="h6" sx={{ marginBottom: 1, color: '#333' }}>
              Método de Pago:
            </Typography>
            <Wallet initialization={{ preferenceId: preferenceId, redirectMode: 'blank'}} />
          </Box>
        )}
        {/* Agregar el componente de Binance aquí si es necesario */}
      </Paper>
    </Box>
  );
};

export default OrderConfirmation;




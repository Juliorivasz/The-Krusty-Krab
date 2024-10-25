import { useEffect, useState } from 'react';
import { Card, CardMedia, CardContent, Typography, IconButton, Box, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import '../../assets/styles/cart.css';

export const Cart = () => {
  const [cart, setCart] = useState([]);

  // Cargar el carrito desde localStorage al montar el componente
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Guardar el carrito en localStorage cuando cambie
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      localStorage.removeItem('cart'); // Limpiar el localStorage si el carrito está vacío
    }
  }, [cart]);

  // Manejar cambios en la cantidad del producto
  const handleQuantityChange = (item, change) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map(cartItem =>
        cartItem.product.id === item.product.id
          ? { ...cartItem, units: cartItem.units + change }
          : cartItem
      ).filter(cartItem => cartItem.units > 0);
      return updatedCart;
    });
  };

  // Eliminar un producto del carrito
  const handleRemoveFromCart = (item) => {
    setCart(prevCart => prevCart.filter(cartItem => cartItem.product.id !== item.product.id));
  };

  // Actualizar notas del producto
  const handleUpdateNotes = (item, newNotes) => {
    setCart((prevCart) => {
      return prevCart.map(cartItem =>
        cartItem.product.id === item.product.id
          ? { ...cartItem, notes: newNotes }
          : cartItem
      );
    });
  };

  return (
    <div>
      <h2 className='text-3xl font-bold m-1'>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <div className="cart-empty">
          <h2>Tu carrito está vacío</h2>
          <p>Agrega productos para empezar a comprar.</p>
        </div>
      ) : (
        <div>
          <div style={{overflowY: "scroll", maxHeight: "450px"}}>
            {cart.map(item => (
              <Card key={item.product.id} sx={{ display: 'flex', mb: 2 }}>
                <CardMedia
                  component="img"
                  sx={{ width: 150, margin: "auto", padding: "1rem" }}
                  image={item.product.image} // Imagen del producto
                  alt={item.product.name}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <CardContent>
                    <Typography variant="h6">{item.product.title}</Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      Precio: ${item.product.price}
                    </Typography>
                    <Typography variant="subtitle1">
                      Cantidad: {item.units}
                    </Typography>
                    {/* Campo de texto para notas */}
                    <TextField
                      label="Notas"
                      variant="outlined"
                      size="small"
                      value={item.notes || ''}
                      onChange={(e) => handleUpdateNotes(item, e.target.value)}
                      sx={{ marginTop: 1 }}
                    />
                  </CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', pr: 2, pb: 1 }}>
                    {/* Botón para disminuir la cantidad */}
                    <IconButton
                      onClick={() => handleQuantityChange(item, -1)}
                      color="primary"
                    >
                      <RemoveIcon />
                    </IconButton>
                    {/* Botón para aumentar la cantidad */}
                    <IconButton
                      onClick={() => handleQuantityChange(item, 1)}
                      color="primary"
                    >
                      <AddIcon />
                    </IconButton>
                    {/* Botón para eliminar el producto */}
                    <IconButton
                      onClick={() => handleRemoveFromCart(item)}
                      color="secondary"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Card>
            ))}
          </div>
          <div>
            <h3 className='text-2xl font-bold'>Total: ${cart.reduce((total, item) => total + item.product.price * item.units, 0)}</h3>
          </div>
        </div>
      )}
    </div>
  );
};




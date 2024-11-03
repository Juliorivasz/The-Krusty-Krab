import { useState, useEffect } from 'react';
import { getProducts, createProduct, updateProduct, deleteProduct, getProductById } from '../../services/dataProducts';

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Función para cargar los productos
  const loadProducts = async () => {
    setLoading(true);
    try {
      const productsData = await getProducts();
      setProducts(productsData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Crear un nuevo producto
  const addProduct = async (product) => {
    try {
      const newProductId = await createProduct(product);
      setProducts((prevProducts) => [...prevProducts, { id: newProductId, ...product }]);
    } catch (err) {
      setError(err.message);
    }
  };

  // Modificar un producto
  const editProduct = async (productId, updatedProduct) => {
    try {
      await updateProduct(productId, updatedProduct);
      setProducts((prevProducts) =>
        prevProducts.map((prod) => (prod.id === productId ? { ...prod, ...updatedProduct } : prod))
      );
    } catch (err) {
      setError(err.message);
    }
  };

  // Eliminar un producto
  const removeProduct = async (productId) => {
    try {
      await deleteProduct(productId);
      setProducts((prevProducts) => prevProducts.filter((prod) => prod.id !== productId));
    } catch (err) {
      setError(err.message);
    }
  };

  // Obtener un producto por ID
  const getProduct = async (productId) => {
    try {
      return await getProductById(productId);
    } catch (err) {
      setError(err.message);
      throw err; // Propaga el error si es necesario
    }
  };

  // Efecto para cargar los productos al iniciar el hook
  useEffect(() => {
    loadProducts();
  }, []);

  return { products, loading, error, addProduct, editProduct, removeProduct, getProduct };
};

export default useProducts;

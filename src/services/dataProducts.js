import { db } from '../firebaseConfig'; // Asegúrate de que la ruta sea correcta
import { collection, doc, getDoc, setDoc, updateDoc, deleteDoc, getDocs } from 'firebase/firestore';

// Obtener todos los productos
export const getProducts = async () => {
  const productsRef = collection(db, 'products');
  const snapshot = await getDocs(productsRef);
  const products = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return products;
};

// Crear un nuevo producto
export const createProduct = async (product) => {
  const productRef = doc(collection(db, 'products')); // Crea un nuevo documento
  await setDoc(productRef, product);
  return productRef.id; // Retorna el ID del nuevo producto
};

// Modificar un producto existente
export const updateProduct = async (productId, updatedProduct) => {
  const productRef = doc(db, 'products', productId);
  await updateDoc(productRef, updatedProduct);
};

// Eliminar un producto
export const deleteProduct = async (productId) => {
  const productRef = doc(db, 'products', productId);
  await deleteDoc(productRef);
};

// Obtener un solo producto por ID
export const getProductById = async (productId) => {
  const productRef = doc(db, 'products', productId);
  const docSnap = await getDoc(productRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    throw new Error('Producto no encontrado');
  }
};

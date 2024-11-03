import "../../assets/styles/dashboard.css";
import { Categories } from "../admin/categories";
import { Products } from "../admin/Products";
import Banner from "../banner/Banner";
import Footer from "../layouts/Footer";
import { Header } from "../layouts/Header";
import { DetailProduct } from "../modal/DetailProduct";
import { useEffect, useState } from "react";
import useProducts from "../hooks/useProducts"; // Importa el custom hook

export const Menu = () => {
  const { products, loading, error } = useProducts(); // Utiliza el hook
  const [productDetails, setProductDetails] = useState({
    isOpen: false,
    product: null,
  });

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleShowDetail = (product) => {
    setProductDetails({
      isOpen: !productDetails.isOpen,
      product: product || null,
    });
  };

  const handleAddToCart = (product, units, notes) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.product.id === product.id
      );
      if (existingProduct) {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, units: item.units + units, notes }
            : item
        );
      }
      return [...prevCart, { product, units, notes }];
    });
  };

  const handleQuantityChange = (item, change) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (cartItem) => cartItem.product.id === item.product.id
      );
      if (existingProduct) {
        const newUnits = existingProduct.units + change;
        if (newUnits <= 0) {
          return prevCart.filter(
            (cartItem) => cartItem.product.id !== item.product.id
          );
        }
        return prevCart.map((cartItem) =>
          cartItem.product.id === item.product.id
            ? { ...cartItem, units: newUnits }
            : cartItem
        );
      }
      return prevCart;
    });
  };

  const handleRemoveFromCart = (item) => {
    setCart((prevCart) =>
      prevCart.filter((cartItem) => cartItem.product.id !== item.product.id)
    );
  };

  // Agrupamos los productos por categoría
  const categorizedProducts = products.reduce((acc, product) => {
    const category = product.category || "Otros";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {});

  return (
    <>
      <Header
        cartItems={cart}
        handleQuantityChange={handleQuantityChange}
        handleRemoveFromCart={handleRemoveFromCart}
      />
      <Banner />
      <div className="body">
        <div className="container-menu">
          <main className="main-content">
            <h1 className="text-2xl font-bold">Categoría</h1>
            <Categories />
            {loading && <p>Cargando productos...</p>}
            {error && <p>Error: {error}</p>}
            {Object.entries(categorizedProducts).map(([category, items]) => (
              <Products
                key={category}
                typeProducts={category}
                listProducts={items}
                handleShowDetail={handleShowDetail}
              />
            ))}
          </main>
        </div>
        {productDetails.isOpen && (
          <DetailProduct
            product={productDetails.product}
            showDetail={productDetails.isOpen}
            handleShowDetail={() => handleShowDetail(null)}
            handleAddToCart={handleAddToCart}
          />
        )}
      </div>
      <Footer />
    </>
  );
};


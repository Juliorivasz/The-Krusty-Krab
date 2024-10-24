/* eslint-disable react/prop-types */
import closeModal from "../assets/img/icons/close-circle-outline.svg";
import cart from "../assets/img/icons/carritoNaranja.svg";
import { Button } from "../components/ui/Button";
import CounterUnits from "../components/counterUnits";
import trash from "../assets/img/icons/trash.svg";

export const EmptyCart = ({
  emptyCartShow,
  handleShowEmptyCart,
  cartItems = [],
  handleQuantityChange,
  handleRemoveFromCart,
}) => {
  const toggleCart = () => {
    handleShowEmptyCart(!emptyCartShow);
  };

  const handleUnitsChange = (item, newUnits) => {
    handleQuantityChange(item, newUnits - item.units);
  };

  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "#005478",
        top: "70%",
        right: "9.4%",
        width: "300px",
        padding: "0",
        height: emptyCartShow ? "250px" : "0",
        overflow: "hidden",
        transition: "height .3s ease-in-out",
        zIndex: "3"
      }}
    >
      <div
        style={{ overflowY: "scroll", height: emptyCartShow ? "250px" : "0" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "1rem",
            paddingBottom: ".5rem",
            borderBottom: "2px solid white",
          }}
          onClick={toggleCart}
        >
          <p>Mi carrito</p>
          <div style={{ width: "30px", cursor: "pointer" }}>
            <img src={closeModal} alt="Cerrar modal" onClick={toggleCart} />
          </div>
        </div>
        {cartItems.length === 0 ? (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <div style={{ width: "50px" }}>
                <img src={cart} alt="Carrito" />
              </div>
              <div>
                <p style={{ color: "#F89604" }}>Tu carrito está vacío</p>
                <p style={{ width: "150px" }}>¡Elegí lo que más te guste!</p>
              </div>
            </div>
            <Button text="Seguir viendo" color="#fff" />
          </div>
        ) : (
          <div style={{ padding: "1rem" }}>
            {cartItems.map((item, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "1rem",
                  borderBottom: "1px solid white",
                  padding: "0.5rem",
                  display: "flex",
                  alignItems: "center",
                  background: "white",
                  borderRadius: ".5rem",
                  color: "black",
                  gap: ".2rem"
                }}
              >
                <img
                  src={item.product.image}
                  alt={item.product.title}
                  style={{ width: "50px", height: "50px"}}
                />
                <div style={{ flex: 1 , margin: "0 .5rem", maxWidth: "8.5rem"}}>
                  <p style={{ color: "#F89604" }}>{item.product.title}</p>
                  <p>{item.product.price} ARS</p>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <CounterUnits
                      value={item.units}
                      onChange={(newUnits) => handleUnitsChange(item, newUnits)}
                    />
                  </div>
                </div>
                    <div style={{cursor:"pointer", width: "2rem", height: "2rem"}}><img src={trash} alt="eliminar"  onClick={() => handleRemoveFromCart(item)}/></div>
              </div>
            ))}
            <Button text="Ir al carrito" color="#fff" redirection="/cart"/>
          </div>
        )}
      </div>
    </div>
  );
};

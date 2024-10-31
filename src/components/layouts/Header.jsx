/* eslint-disable react/prop-types */
import "../../assets/styles/header.css";
import tkk from "/TKK.svg";
import { Logo } from "../Logo";
import { User } from "../User";
import { Ubication } from "../Ubication";
import { Nav } from "./Nav";
import { Search } from "../Search";
import { Button } from "../ui/Button";
import { useEffect, useState } from "react";
import { EmptyCart } from "../modal/EmptyCart";
import MenuBar from "../MenuBar";
import { Notification } from "../modal/Notification";

export const Header = ({
  isShow = "true",
  cartItems,
  handleQuantityChange,
  handleRemoveFromCart,
}) => {
  const [islogged, setIsLogged] = useState(false);
  const [flat, setFlat] = useState(localStorage.getItem("departamento"));
  const [emptyCartShow, setEmptyCartShow] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    setIsLogged(localStorage.getItem("isLogged"));
    if (!flat) {
      setFlat("Capital");
    }
  }, [islogged, flat]);

  const handleShowEmptyCart = () => {
    setEmptyCartShow(!emptyCartShow);
  };

  return (
    <header>
      <EmptyCart
        emptyCartShow={emptyCartShow}
        handleShowEmptyCart={handleShowEmptyCart}
        cartItems={cartItems}
        handleQuantityChange={handleQuantityChange}
        handleRemoveFromCart={handleRemoveFromCart}
      />
      <Logo urlImage={tkk} />
      <Ubication flat={flat} />
      <Notification
        handleShowNotifications={setShowNotifications}
        notifications={""}
        showNotifications={showNotifications}
      />
      <MenuBar />
      <div className="container-nav-search">
        <Nav islogged={islogged} />
        {isShow ? <Search /> : ""}
      </div>
      {islogged ? (
        <User
          setIsLogged={setIsLogged}
          handleShowEmptyCart={handleShowEmptyCart}
          showNotifications={showNotifications}
          setShowNotifications={setShowNotifications}
        />
      ) : (
        <Button text="Entrar" redirection="/admin" />
      )}
    </header>
  );
};

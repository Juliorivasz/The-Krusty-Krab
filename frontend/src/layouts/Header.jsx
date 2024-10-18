import "../assets/styles/header.css";

import tkk from "/TKK.svg";

import { Logo } from "../components/Logo";
import { User } from "../components/User";
import { Ubication } from "../components/Ubication";
import { Nav } from "./Nav";
import { Search } from "../components/Search";
import { Button } from "../components/button";
import { useEffect, useState } from "react";
import { EmptyCart } from "../modal/EmptyCart";

export const Header = () => {
  const [islogged, setIsLogged] = useState(false);
  const [flat, setFlat] = useState(localStorage.getItem("departamento"));
  const [emptyCartShow, setEmptyCartShow] = useState(true);

  useEffect(() => {
    setIsLogged(localStorage.getItem("Logged"));
    if (!flat) {
      setFlat("Capital");
    }
  }, [islogged, flat]);

  const handleShowEmptyCart = () => {
    setEmptyCartShow(false);
  }

  return (
    <header>
      {emptyCartShow ? '' : <EmptyCart/>}
      <Logo urlImage={tkk} />
      <Ubication flat={flat} />
      <div className="container-nav-search">
        <Nav islogged={islogged} />
        <Search />
      </div>
      {islogged ? (
        <User setIsLogged={setIsLogged} handleShowEmptyCart={handleShowEmptyCart}/>
      ) : (
        <Button text="Entrar" redirection="/admin" />
      )}
    </header>
  );
};

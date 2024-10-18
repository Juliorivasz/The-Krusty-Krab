import "../assets/styles/header.css";

import tkk from "/TKK.svg";

import { Logo } from "../components/Logo";
import { User } from "../components/User";
import { Ubication } from "../components/Ubication";
import { Nav } from "./Nav";
import { Search } from "../components/Search";
import { Button } from "../components/ui/Button";
import { useEffect, useState } from "react";

export const Header = () => {
  const [islogged, setIsLogged] = useState(false);
  const [flat, setFlat] = useState(localStorage.getItem("departamento"));

  useEffect(() => {
    setIsLogged(localStorage.getItem("isLogged"));
    if (!flat) {
      setFlat("Capital");
    }
  }, [islogged, flat]);

  return (
    <header>
      <Logo urlImage={tkk} />
      <Ubication flat={flat} />
      <div className="container-nav-search">
        <Nav islogged={islogged} />
        <Search />
      </div>
      {islogged ? (
        <User setIsLogged={setIsLogged} />
      ) : (
        <Button text="Entrar" redirection="/admin" />
      )}
    </header>
  );
};

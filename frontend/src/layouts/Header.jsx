import "../assets/styles/header.css";

import tkk from "/TKK.svg";

import { Logo } from "../components/Logo";
import { User } from "../components/User";
import { Ubication } from "../components/Ubication";
import { Nav } from "./Nav";
import { Search } from "../components/Search";
import { Button } from "../components/Button";
import { useEffect, useState } from "react";

export const Header = () => {
  const [islogged, setIsLogged] = useState(false);

  useEffect(() => {
    setIsLogged(localStorage.getItem("Logged"));
  }, []);

  return (
    <header>
      <Logo urlImage={tkk} />
      <Ubication />
      <div className="container-nav-search">
        <Nav islogged={islogged} />
        <Search />
      </div>
      {islogged ? <User /> : <Button text="Entrar" redirection="/admin" />}
    </header>
  );
};

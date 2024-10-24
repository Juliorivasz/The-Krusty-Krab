/* eslint-disable react/prop-types */
import "../assets/styles/header.css";
import tkk from "/TKK.svg";
import { Logo } from "../components/Logo";
import { User } from "../components/User";
import { Ubication } from "../components/Ubication";
import { Nav } from "./Nav";
import { Search } from "../components/Search";
import { Button } from "../components/ui/Button";
import { useEffect, useState } from "react";
import { EmptyCart } from "../modal/EmptyCart";
import MenuBar from "../components/MenuBar";

export const Header = ({ isShow = 'true', cartItems, handleQuantityChange, handleRemoveFromCart}) => {
    const [islogged, setIsLogged] = useState(false);
    const [flat, setFlat] = useState(localStorage.getItem("departamento"));
    const [emptyCartShow, setEmptyCartShow] = useState(false);

    useEffect(() => {
        setIsLogged(localStorage.getItem("isLogged"));
        if (!flat) {
            setFlat("Capital");
        }
    }, [islogged, flat]);

    const handleShowEmptyCart = () => {
        setEmptyCartShow(!emptyCartShow);
    }

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
            <MenuBar />
            <div className="container-nav-search">
                <Nav islogged={islogged} />
                {isShow ? <Search /> : ''}
            </div>
            {islogged ? (
                <User setIsLogged={setIsLogged} handleShowEmptyCart={handleShowEmptyCart} />
            ) : (
                <Button text="Entrar" redirection="/admin" />
            )}
        </header>
    );
};


import closeModal from '../assets/img/icons/close-circle-outline.svg';
import cart from '../assets/img/icons/carritoNaranja.svg';
import { Button } from '../components/ui/Button';
// import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export const EmptyCart = ({emptyCartShow, handleShowEmptyCart}) => {

    // const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    handleShowEmptyCart(!emptyCartShow);
  };

  return (
    <div style={{
        position: "absolute", 
        backgroundColor: "#005478", 
        top: "70%", 
        right: "9.4%", 
        width: "300px", 
        padding: "0",  // El padding solo aparece cuando está abierto
        height: emptyCartShow ? "250px" : "0",  // Cambiamos la altura para el despliegue
        overflow: "hidden",  // Oculta el contenido cuando está cerrado
        transition: "height 1s ease-in-out",}}>
        <div style={{display: "flex", justifyContent: "space-between", margin: "1rem", paddingBottom: ".5rem", borderBottom: "2px solid white"}} onClick={toggleCart}>
            <p>
                Mi carrito
            </p>
            <div style={{width: "30px", cursor: "pointer"}}>
                <img src={closeModal} alt="Cerrar modal" onClick={toggleCart}/>
            </div>
        </div>
        <div style={{display: "flex", justifyContent: "space-around", alignItems: "center"}}>
            <div style={{width: "50px"}}>
                <img src={cart} alt="Carrito" />
            </div>
            <div style={{}}>
                <p style={{color: "#F89604"}}>Tu carrito esta vacio</p>
                <p style={{width: "150px"}}>Elegí lo que más te guste!</p>
            </div>
        </div>
        <Button text='Seguir viendo' color='#fff'/>
    </div>
  )
}

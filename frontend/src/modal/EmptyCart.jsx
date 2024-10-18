import closeModal from '../assets/img/icons/close-circle-outline.svg';
import cart from '../assets/img/icons/carritoNaranja.svg';
import { Button } from '../components/button';


export const EmptyCart = () => {
  return (
    <div style={{position: "absolute", backgroundColor: "#005478", top: "70%", right: "9.4%", width: "300px", minHeight: "200px", paddingTop: "0", padding: "1rem", transition: "all 2s ease-in-out"}}>
        <div style={{display: "flex", justifyContent: "space-between", margin: "1rem", paddingBottom: ".5rem", borderBottom: "2px solid white"}}>
            <p>
                Mi carrito
            </p>
            <div style={{width: "30px"}}>
                <img src={closeModal} alt="Cerrar modal" />
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

import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const SucessForm = () => {

    const [isOpen, setIsOpen] = useState(true);
    const navigate = useNavigate();


    const handleClose = () => {
        setIsOpen(false);
        navigate('/admin');

    }

  return (
    <>
    <dialog
        open={isOpen}
        onClose={handleClose}
        style={{zIndex: "1"}}
        className="register-user"
      >
        <h2 id="alert-dialog-title">
          {"Registro Completado"}
        </h2>
        <p>¡Felicidades! Tu registro se ha completado con éxito.</p>
        <div style={{maxWidth: "130px", maxHeightheight: "50px"}}><button onClick={handleClose} autoFocus>Aceptar</button></div>
    </dialog>
    </>
  )
}

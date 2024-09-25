/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import { MessageError } from "../MessageError";
import { CodeRecovery } from "../modal/CodeRecovery";

const dni = {
    email: 'julioandresrivas@gmail.com'
}

export const RecoveryPassword = ({viewRecovery, setViewRecovery}) => {

    const [viewError, setViewError] = useState(false);
    const [forgotEmail, setForgotEmail] = useState('');
    const [isSent, setIsSent] = useState(false);
    
    const changeView = () => {
        setViewRecovery(!viewRecovery);
    }

    const sendRecovery = (e) => {
        e.preventDefault();
        if(dni.email == forgotEmail) {
            setViewError(false);
            setIsSent(true);
        }else {
            setViewError(true);
        }
        return;
    }

  return (
    <>
    <div className="cont-form" id="forgot-password-form">
        <form onSubmit={sendRecovery}>
            <label htmlFor="forgot-email">Email o Número de Teléfono:</label>
            <input type="email" id="forgot-email" name="forgot-email" onChange={(e)=>setForgotEmail(e.target.value)} required/>
            {viewError ? <MessageError message={"Los datos ingresados son incorrectos"} /> : ''}
            <button type="submit">Enviar</button>
        </form>

        <div className="signup-section">
            <p>¿Ya recuerdas tu contraseña?</p>
            <Link className="create-account-btn" to={undefined} onClick={changeView}>Inicia sesión</Link>
        </div>
    </div>
    <CodeRecovery isSent={isSent} setIsSent={setIsSent}/>
    </>
  )
}

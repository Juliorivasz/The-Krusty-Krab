/* eslint-disable react/prop-types */
import alertIconRed from '../../assets/img/icons/icon-alert-red.svg';

export const MessageError = ({message}) => {
  return (
    <>
    <div style={{width: "100%", display: "flex", alignItems: "center", textAlign: "center", margin: "0 0 1rem", fontSize: ".9rem", gap: "5px"}}>
        <div style={{ width: "20px", height: "20px"}}>
            <img src={alertIconRed} alt="icono de invalido" />
        </div>
        <span style={{color:"red", width: "100%"}}>
            {message}
        </span>
    </div>
    </>
  )
}

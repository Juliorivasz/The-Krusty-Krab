// import { useEffect, useState } from "react";

import { Timer } from "../Timer";

// eslint-disable-next-line react/prop-types
export const CodeRecovery = ({isSent, setIsSent}) => {
    
    const handleCode = () =>{
        setIsSent(false);
    }

  return (
    <dialog open={isSent} className="codeDialog">
        <h2 className="codeTitle">Codigo de verificacion</h2>
        <form className="codeForm" onSubmit={handleCode}>
            <input className="codeInput" type="text" maxLength="1" pattern="[0-9]" required/>
            <input className="codeInput" type="text" maxLength="1" pattern="[0-9]" required/>
            <input className="codeInput" type="text" maxLength="1" pattern="[0-9]" required/>
            <input className="codeInput" type="text" maxLength="1" pattern="[0-9]" required/>
        </form>
        <Timer/>
    </dialog>
  )
}

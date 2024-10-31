import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export const Timer = () => {
    const [time, setTime] = useState(60);
    const [hasFinished, setHasFinished] = useState(false)

    const reSend = () => {
        setTime(60);
        setHasFinished(false);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (time > 0) {
                setTime((count) => count - 1);
              } else {
                clearInterval(interval);
                setHasFinished(true);
              }
        }, 1000);
    
        return () => clearInterval(interval);
      }, [time]);

  return (
    <div>
        {hasFinished ? (
            <div style={{marginTop: "3rem"}}>
                <span className="container-codeReSend">
                    ¿Todavia no te llego?
                </span>
                <Link className="codeReSend" onClick={reSend} to={undefined}>Reenviar código</Link>
            </div>
        ) : (
        <h2>00:{time < 10 ? `0${time}` : time}</h2>
        )
        }
    </div>
  )
}

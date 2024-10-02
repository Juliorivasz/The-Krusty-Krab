import '../../assets/css/registerUser.css';

import tkk from '/TKK.svg';
import { useState } from 'react';
import { RecoveryPassword } from './RecoveryPassword';
import { FormLogin } from './FormLogin';

export const Login = () => {
    const [viewRecovery, setViewRecovery] = useState(true);

  return (
    <>
    <div className="container">
        <div className="form-container">
        
            <div className="logo-container">
                <img src={tkk} alt="Logo de la marca" className="brand-logo"/>
            </div>

            {viewRecovery ? 
            <FormLogin 
            viewRecovery={viewRecovery}
            setViewRecovery={setViewRecovery}
            />: 
            <RecoveryPassword
            viewRecovery={viewRecovery}
            setViewRecovery={setViewRecovery}/>
            }
        </div>
    </div>
    </>
  )
}

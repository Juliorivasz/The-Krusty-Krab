import '../assets/styles/registerUser.css';

import tkk from '/TKK.svg';
import { useState } from 'react';
import { RecoveryPassword } from '../admin/RecoveryPassword';
import { FormLogin } from '../admin/FormLogin';

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

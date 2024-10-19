import React from 'react'
import Cupon from './Cupon'
import { cupones } from '../../helpers/cupones'
export default function Cupones() {
   
  return (
    <div className='py-4 flex-col flex gap-y-2'>
        
        {cupones.map((cupon,index)=>(
            <Cupon key={index} cupon={cupon}/>
        ))}

    </div>
  )
}


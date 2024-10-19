import React from 'react'

export default function Cupon({cupon}) {
  return (
    <div className='w-10/12 lg:w-1/3 divide-x-2 divide-gray-400 divide-dotted border-2 border-gray-400 bg-white rounded-xl px-4 grid grid-cols-12 gap-2'>
        <div/>
        <div className='pl-2 py-2 col-span-8 flex flex-col justify-center'>
            <h1 className='text-sm '>{cupon.name}</h1>
            <h1 className='text-sm'> <span className='font-semibold'>${cupon.value}</span> - a partir ${cupon.treshold}</h1>
   
        </div> 
   </div>
  )
}

import React from 'react'
import FullWidthLayout from '../layouts/FullWidthLayout'
import Cupones from '../components/promo/cupones'
import PromosSection from '../components/promo/PromosSection'

export default function Promociones() {
  return (
    <FullWidthLayout>
        <h2 className='text-3xl font-bold'>Cupones</h2>
        <Cupones/>
        <h2 className='text-3xl font-bold'>Promociones</h2>
        <PromosSection/>
    </FullWidthLayout>
  )
}

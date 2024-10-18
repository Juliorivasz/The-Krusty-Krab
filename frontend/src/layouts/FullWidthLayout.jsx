import React from 'react'
import { Header } from './Header'


export default function FullWidthLayout({children}) {
  return (
    <div>
        <Header/>
        <div style={{margin:"30px"}}>{children}</div>
    </div>
  )
}

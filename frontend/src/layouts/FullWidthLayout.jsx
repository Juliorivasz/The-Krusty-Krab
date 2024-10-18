import { Header } from './Header'


// eslint-disable-next-line react/prop-types
export default function FullWidthLayout({children}) {
  return (
    <div>
        <Header/>
        <div style={{padding:"10rem 1rem 1rem 1rem"}}>{children}</div>
    </div>
  )
}

import Footer from './Footer'
import { Header } from './Header'

// eslint-disable-next-line react/prop-types
export default function FullWidthLayout({children}) {
  return (
    <div className="flex flex-col min-h-screen">
      {<Header isShow={false}/>}
      <main className="flex-grow" style={{paddingTop: "10rem"}}>
        {children}
      </main>
      <Footer />
    </div>
  )
}
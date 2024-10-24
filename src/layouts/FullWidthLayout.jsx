import Footer from './Footer'
import { Header } from './Header'

// eslint-disable-next-line react/prop-types
export default function FullWidthLayout({children}) {
  return (
    <div className="flex flex-col min-h-screen">
      {<Header isShow={false}/>}
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}

/*<Header isShow={false}/>
        <div style={{padding:"10rem 1rem 1rem 1rem"}}>{children}</div>*/
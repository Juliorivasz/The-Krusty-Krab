import ProductCard from '../ProductCard'
import { promociones } from '../../helpers/promos'

export default function PromosSection() {
   
  return (
    <div className='grid grid-cols-2 gap-4
    lg:grid-cols-4
    '>
        {
            promociones.map((promo,index)=>(
                <ProductCard promo={promo} key={index}/>
            ))
        }
        
    </div>
  )
}

import { Product } from "./Product"


// eslint-disable-next-line react/prop-types
export const Products = ({openModal}) => {
  return (
    <div className="products">
        <Product/>
        <div className="add-product-card" onClick={openModal}>
            <button>+</button>
        </div>
    </div>
  )
}

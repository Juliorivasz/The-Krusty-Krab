
import PropTypes from 'prop-types';
import { Product } from "./Product"


export const Products = ({typeProducts, listProducts}) => {


  return (
    <>
    <h2 className="typeProduct" id={typeProducts}>{typeProducts}</h2>
    <div className="container-products">
      <div className="products">
        {
          listProducts.map((product, id)=> (
            <Product key={id} product={product}/>
          ))
        }
      </div>
    </div>
    </>
  )
}

Products.propTypes = {
  typeProducts: PropTypes.string,
  listProducts: PropTypes.array
}
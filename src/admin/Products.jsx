import PropTypes from 'prop-types';
import { Product } from "./Product";

export const Products = ({ typeProducts, listProducts, handleShowDetail }) => {
  return (
    <>
      <h2 className="typeProduct text-xl font-bold" id={typeProducts}>{typeProducts}</h2>
      <div className="container-products">
        <div className="products">
          {
            listProducts.map((product, id) => (
              <Product key={id} product={product} handleShowDetail={handleShowDetail} />
            ))
          }
        </div>
      </div>
    </>
  );
};

Products.propTypes = {
  typeProducts: PropTypes.string,
  listProducts: PropTypes.array,
  handleShowDetail: PropTypes.func,
};

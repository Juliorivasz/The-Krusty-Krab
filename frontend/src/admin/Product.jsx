
// import cangreBurgers from '../assets/img/products/cangreburger 2.svg';

// eslint-disable-next-line react/prop-types
export const Product = ({product}) => {
  // eslint-disable-next-line react/prop-types
  const {image, title, detail, price} = product;

  return (
    <div className="product-card">
            <img src={image} alt="Cangreburger"/>
            <div className="product-info">
                <h2 className="product-title">{title}</h2>
                <p className="product-description">{detail}</p>
                <span className="price">${price}</span>
            </div>
        </div>
  )
}

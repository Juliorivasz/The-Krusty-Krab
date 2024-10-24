// eslint-disable-next-line react/prop-types
export const Product = ({ product, handleShowDetail }) => {
  // eslint-disable-next-line react/prop-types
  const { image, title, detail, price } = product;

  return (
    <div className="product-card" onClick={() => handleShowDetail(product)}>
      <img src={image} alt={title} />
      <div className="product-info">
        <h2 className="product-title">{title}</h2>
        <p className="product-description">{detail}</p>
        <span className="price">${price}</span>
      </div>
    </div>
  );
};


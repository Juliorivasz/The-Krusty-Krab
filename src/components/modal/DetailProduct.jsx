/* eslint-disable react/prop-types */

import '../../assets/styles/detailProduct.css';
import { Button } from '../ui/Button';
import closeDetailProduct from '../../assets/img/icons/close-circle-outline-black.svg';
import CounterUnits from '../counterUnits';
import { useState } from 'react';

export const DetailProduct = ({ product, showDetail, handleShowDetail, handleAddToCart}) => {
  const { image, title, detail, price } = product;

   const [units, setUnits] = useState(1);
   const [notes, setNotes] = useState("");


   const handleUnitsChange = (newUnits) => {
     setUnits(newUnits);
   };
   const handleAddToCartClick = () => {
    handleAddToCart(product, units, notes);
    handleShowDetail();
  };

  return (
    <dialog open={showDetail} className="detail-product-dialog">
      <div className="container-detail-product">
        <div className='container-image-detail-product'>
          <img src={image} alt={title} />
        </div>
        <h2 className="detail-product-title">{title}</h2>
        <div className="container-detail-price">
          <p className="detail-product">{detail}</p>
          <span className="price-product">{price*units} ARS</span>
        </div>
        <div className="container-units">
          <p>Unidades</p>
          <CounterUnits value={units} onChange={handleUnitsChange}/>
        </div>
        <div className="container-notes-product">
            <p className="notes-product-title">¿Quieres aclarar algo?</p>
            <textarea
              name="notas"
              id="notes-product"
              placeholder="Notas del producto"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            ></textarea>
        </div>
        <Button text='Agregar al carrito' redirection='' onClick={handleAddToCartClick}/>
        <div className='close-detail-product' onClick={handleShowDetail}>
            <img src={closeDetailProduct} alt='cerrar' />
        </div>
      </div>
    </dialog>
  );
};

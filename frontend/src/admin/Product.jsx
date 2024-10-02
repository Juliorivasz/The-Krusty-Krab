
import cangreBurgers from '../../assets/img/cangreburger 2.svg';
import pencil from '../../assets/img/pencil.svg';
import trash from '../../assets/img/trash.svg';

export const Product = () => {
  return (
    <div className="product-card">
            <img src={cangreBurgers} alt="Cangreburger"/>
            <div className="product-info">
                <h2 className="product-title">Cangreburger simple</h2>
                <p className="product-description">Pan de papa, medallón de carne, cheddar X2, lechuga, tomate, pepino.</p>
                <span className="price">$10.000</span>
            </div>
            <div className="actions">
                <button className="edit-btn"><img src={pencil} alt="editar producto"/></button>
                <button className="delete-btn"><img src={trash} alt="elimnar producto"/></button>
            </div>
        </div>
  )
}

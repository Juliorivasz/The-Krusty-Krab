
import cangreBurgers from '../../assets/img/cangreburger 2.svg';
import pizza from '../../assets/img/pizza 1.svg';
import empanadas from '../../assets/img/empanadas 1.svg';
import snacks from '../../assets/img/snacks 1.svg';
import helado from '../../assets/img/helado 1.svg';
import bebidas from '../../assets/img/bebidas 1.svg';
import iconAddCircle from '../../assets/img/add-circle-outline.svg';
import { Category } from './Category';

export const Categories = () => {
  return (
    <div className="contain-categories">
        <div className="categories">
            <Category name={'Hamburguesas'} urlIcon={cangreBurgers}/>
            <Category name={'Pizza'} urlIcon={pizza}/>
            <Category name={'Empanadas'} urlIcon={empanadas}/>
            <Category name={'Snacks'} urlIcon={snacks}/>
            <Category name={'Helados'} urlIcon={helado}/>
            <Category name={'Bebidas'} urlIcon={bebidas}/>
        </div>
        <button className="add-category-btn"><img src={iconAddCircle} alt="Agregar-Categoria" className="iconosVarios"/></button>
    </div>
  )
}

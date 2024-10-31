
import cangreBurgers from '../../assets/img/products/cangreburger 2.svg';
import pizza from '../../assets/img/products/pizza 1.svg';
import empanadas from '../../assets/img/products/empanadas 1.svg';
import snacks from '../../assets/img/products/snacks 1.svg';
import helado from '../../assets/img/products/helado 1.svg';
import bebidas from '../../assets/img/products/bebidas 1.svg';
import { Category } from './Category';


export const Categories = () => {
  return (
    <div className="contain-categories">
        <div className="categories">
            <Category name={'Hamburguesas'} urlIcon={cangreBurgers}/>
            <Category name={'Pizzas'} urlIcon={pizza}/>
            <Category name={'Empanadas'} urlIcon={empanadas}/>
            <Category name={'Snacks'} urlIcon={snacks}/>
            <Category name={'Helados'} urlIcon={helado}/>
            <Category name={'Bebidas'} urlIcon={bebidas}/>
        </div>
    </div>
  )
}

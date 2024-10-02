import { Link } from 'react-router-dom';
import '../assets/styles/home.css';

import { Logo } from "../components/Logo";

export const Home = () => {
  return (
    <div className='container-home'>
      <h1>Bienvenido a:</h1>
      <Logo w='300' h='300'/>
      <div>
        <p className='select-dp-text'>Selecciona tu departamento</p>
        <ul>
          <li>
            <Link to="/admin/home" className='select-dp-input'>Godoy Cruz</Link>
          </li>
          <li>
            <Link to="#" className='select-dp-input'>Guaymallen</Link>
          </li>
          <li>
            <Link to="#" className='select-dp-input'>Capital</Link>
          </li>
          <li>
            <Link to="#" className='select-dp-input'>Maipu</Link>
          </li>
          <li>
            <Link to="#" className='select-dp-input'>Las heras</Link>
          </li>
          <li>
            <Link to="#" className='select-dp-input'>Lujan de cuyo</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

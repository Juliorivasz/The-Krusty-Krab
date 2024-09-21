import logoTKK from '/TKK.svg';
import homeIcon from '../../assets/img/home-sharp.svg';
import promoIcon from '../../assets/img/pricetag-outline.svg';
import documentIcon from '../../assets/img/document-text-outline.svg';
import leaveIcon from '../../assets/img/log-out-outline.svg';
import { Link } from 'react-router-dom';

export const NavAdmin = () => {
  return (
    <aside className="sidebar">
            <div className="logo">
                <img src={logoTKK} alt="Logo"/>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="#">
                            <img src={homeIcon} alt="Volver al Inicio"/>
                            <p>Inicio</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={promoIcon} alt="Promociones"/>
                            <p>Promociones</p>
                        </a>
                    </li>
                    <li><a href="#">
                        <img src={documentIcon} alt="Pedidos"/>
                        <p>Pedidos</p>
                    </a>
                    </li>
                </ul>
                <ol>
                    <li>
                        <Link to="/admin">
                            <img src={leaveIcon} alt="Salida"/>
                            <p>Salir</p>
                        </Link>
                    </li>
                </ol>
            </nav>
    </aside>
  )
}

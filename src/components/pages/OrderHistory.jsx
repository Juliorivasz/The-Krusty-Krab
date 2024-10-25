import '../../assets/styles/orderHistory.css';
import logo from '/TKK.svg'
import { useState } from "react"
import { Header } from "../layouts/Header"


export const OrderHistory = () => {
    // ocultar la barra de navegacion
    const [isShow, setIsShow] = useState(false);
  return (
    <>
    <Header isShow={isShow}/>
    <section>
        <div style={{padding: "10rem 1rem 1rem 2rem"}}>
            <h2 className='text-3xl font-bold'>
                Mis pedidos
            </h2>
            <div className='orders'>
                <div className="order-list">
                    <div className="order delivered">
                        <img src={logo} alt="Logo Krusty Krab"/>
                        <div>
                            <span className="status">ENTREGADO</span>
                            <span className="date">29 de ago - 16:21 h</span>
                            <h2>The Krusty Krab</h2>
                            <p>$20000 - 2 productos</p>
                        </div>
                    </div>
                    <div className="order canceled">
                        <img src={logo} alt="Logo Krusty Krab"/>
                        <div>
                            <span className="status">CANCELADO</span>
                            <span className="date">18 de ago - 10:21 h</span>
                            <h2>The Krusty Krab</h2>
                            <p>$30000 - 3 productos</p>
                        </div>
                    </div>
                    <div className="order delivered">
                        <img src={logo} alt="Logo Krusty Krab"/>
                        <div>
                            <span className="status">ENTREGADO</span>
                            <span className="date">23 de ago - 11:35 h</span>
                            <h2>The Krusty Krab</h2>
                            <p>$9600 - 1 producto</p>
                        </div>
                    </div>
                </div>
                <aside>
                <div className="filters">
                    <h2>Filtrar por:</h2>
                    <h3>Periodo</h3>
                    <ul className='filter-list'>
                        <li><input type="radio" name="period" id="week"/> Última semana</li>
                        <li><input type="radio" name="period" id="15-days"/> Últimos 15 días</li>
                        <li><input type="radio" name="period" id="month"/> Último mes</li>
                        <li><input type="radio" name="period" id="3-months"/> Últimos 3 meses</li>
                        <li><input type="radio" name="period" id="old-new"/> Del más antiguo al más reciente</li>
                        <li><input type="radio" name="period" id="new-old"/> Del más reciente al más antiguo</li>
                    </ul>
                    <h3>Estado</h3>
                    <ul className='filter-list'>
                        <li><input type="radio" name="status" id="delivered"/> Entregados</li>
                        <li><input type="radio" name="status" id="canceled"/> Cancelados</li>
                    </ul>
                    <button id="clear-filters">Limpiar filtro</button>
                </div>
                </aside>
            </div>
        </div>
    </section>
    </>
  )
}

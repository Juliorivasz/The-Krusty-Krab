import iconAddCircleWhite from '../../assets/img/add-circle-outline-white.svg';
import iconCloseCircle from '../../assets/img/close-circle-outline.svg';

// eslint-disable-next-line react/prop-types
export const RegisterProduct = ({isOpen, setIsOpen}) => {

    const CloseModal = () => {
        setIsOpen(false);
    }

    return (
        <dialog className="myDialog" open={isOpen}>
            <div className="contain-register-product">
                <h2 className="register-title">Registro de Productos</h2>
                <div className="contain-close-dialog" onClick={CloseModal}><img src={iconCloseCircle} alt="Cerrar ventana" className="close-dialog"/></div>
                <form>
                <div className="form-image">
                    <label htmlFor="foto">Foto:</label>
                    <label htmlFor="foto" className="foto-label">+</label>
                    <input type="file" id="foto"/>
                </div>
                <div className="form-dish">
                    <label htmlFor="nombre">Nombre del Plato:</label>
                    <input type="text" id="nombre" placeholder="Ingrese el nombre del plato"/>
                </div>
                <div className="form-price">
                    <label htmlFor="precio">Precio:</label>
                    <input type="number" id="precio" placeholder="Ingrese el precio"/>
                </div>
                <div className="form-description">
                    <label htmlFor="descripcion">Descripción:</label>
                    <textarea id="descripcion" placeholder="Ingrese la descripción del plato"></textarea>
                </div>
                <div className="form-ingredients">
                    <label htmlFor="ingredientes">Ingredientes:</label>
                    <div type="text" id="ingredientes" placeholder="Ingrese los ingredientes">
                        <img src={iconAddCircleWhite} alt="cargar ingrediente"/>
                    </div>
                </div>
                <button type="submit">Cargar Plato</button>
                </form>
            </div>
        </dialog>
    )
}

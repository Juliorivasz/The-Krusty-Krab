import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const Nav = ({ islogged }) => {

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <p>Inicio</p>
          </Link>
        </li>
        <li>
          <Link to="/menu">
            <p>Menu</p>
          </Link>
        </li>
        <li>
          <Link to="/promociones">
            <p>Promociones</p>
          </Link>
        </li>
        {islogged ? (
          <li>
            <Link to="/orderHistory">
              <p>Pedidos</p>
            </Link>
          </li>
        ) : (
          ""
        )}
      </ul>
    </nav>
  );
};

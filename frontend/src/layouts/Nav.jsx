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
          <Link to="#">
            <p>Menu</p>
          </Link>
        </li>
        <li>
          <Link to="#">
            <p>Promociones</p>
          </Link>
        </li>
        {islogged ? (
          <li>
            <Link to="#">
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

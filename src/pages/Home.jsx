import { Link } from "react-router-dom";
import "../assets/styles/home.css";

import { Logo } from "../components/Logo";
import { useState } from "react";

export const Home = () => {
  
  // eslint-disable-next-line no-unused-vars
  const [flats, setFlats] = useState([
    "Godoy Cruz",
    "Guaymallen",
    "Capital",
    "Maipú",
    "Las Heras",
    "Luján de Cuyo",
  ]);

  const saveFlat = (flat) => {
    localStorage.setItem("departamento", flat);
  };

  return (
    <div className="container-home">
      <h1>Bienvenido a:</h1>
      <Logo w="300" h="300" display="block"/>
      <div>
        <p className="select-dp-text">Selecciona tu departamento</p>
        <ul className="list-flat">
          {flats.map((depa, id) => (
            <li key={id} className="item-flat">
              <Link
                to="/menu"
                className="select-dp-input"
                onClick={() => {
                  saveFlat(depa);
                }}
              >
                {depa}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

import burger from "../assets/img/products/cangreburger 2.svg";
import pizza from "../assets/img/products/pizza 1.svg";
import empanada from "../assets/img/products/empanadas 1.svg";
import snack from "../assets/img/products/snacks 1.svg";
import helado from "../assets/img/products/helado 1.svg";
import bebida from "../assets/img/products/bebidas 1.svg";

export const listProducts = {
  listBurgers: [
    {
      id: 1,
      image: burger,
      title: "Big Mac",
      detail: "Pan de papa, medallón de carne, cheddar X2, lechuga, tomate, pepino, zanahoria, remolacha",
      price: 10000,
    },
    {
      id: 2,
      image: burger,
      title: "Bacon Cheddar",
      detail: "Pan de papa, medallón de carne, cheddar X2, lechuga, tomate, pepino.",
      price: 12000,
    },
    {
      id: 3,
      image: burger,
      title: "Deluxe Bacon",
      detail: "Pan de papa, medallón de carne, cheddar X2, lechuga, tomate, pepino.",
      price: 15000,
    },
    {
      id: 4,
      image: burger,
      title: "Big Melt",
      detail: "Pan de papa, medallón de carne, cheddar X2, lechuga, tomate, pepino.",
      price: 8000,
    },
  ],
  listPizzas: [
    {
      id: 5,
      image: pizza,
      title: "Pizza Margherita",
      detail: "Pizza con salsa de tomate, mozzarella y albahaca fresca.",
      price: 10000,
    },
    {
      id: 6,
      image: pizza,
      title: "Pizza Pepperoni",
      detail: "Pizza con salsa de tomate, mozzarella y pepperoni.",
      price: 12000,
    },
    {
      id: 7,
      image: pizza,
      title: "Pizza Cuatro Quesos",
      detail: "Pizza con mozzarella, gorgonzola, parmesano y queso de cabra.",
      price: 15000,
    },
  ],
  listEmpanadas: [
    {
      id: 8,
      title: "Empanada Criolla",
      detail: "Carne picada, cebolla, huevo duro, aceitunas y especias.",
      price: 3500,
      image: empanada,
    },
    {
      id: 9,
      title: "Empanada Salteña",
      detail: "Carne picada, papa, huevo duro y ají.",
      price: 4000,
      image: empanada,
    },
  ],
  listSnacks: [
    {
      id: 10,
      title: "Papas Fritas",
      detail: "Papas cortadas en bastones, crujientes y saladas.",
      price: 2500,
      image: snack,
    },
    {
      id: 11,
      title: "Nachos con Queso",
      detail: "Tortillas de maíz fritas con queso cheddar derretido.",
      price: 3000,
      image: snack,
    },
  ],
  listHelados: [
    {
      id: 12,
      title: "Helado de Vainilla",
      detail: "Clásico helado de vainilla, cremoso y delicioso.",
      price: 2000,
      image: helado,
    },
    {
      id: 13,
      title: "Helado de Chocolate",
      detail: "Intenso helado de chocolate con trocitos de chocolate.",
      price: 2200,
      image: helado,
    },
  ],
  listBebidas: [
    {
      id: 14,
      title: "Gaseosa",
      detail: "Variedad de sabores de gaseosas.",
      price: 1500,
      image: bebida,
    },
    {
      id: 15,
      title: "Jugo Natural",
      detail: "Jugo de naranja, manzana o mixto.",
      price: 1800,
      image: bebida,
    },
  ],
};

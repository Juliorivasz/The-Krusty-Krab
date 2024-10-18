import "../assets/styles/dashboard.css";

import { Categories } from "../admin/categories";
import { Products } from "../admin/Products";
import { Header } from "../layouts/Header";
import { listProducts } from "../helpers/products";
import Banner from "../components/banner/Banner";

export const Menu = () => {
  
  return (
    <>
      <Header />
      <Banner />
      <div className="body">
        <div className="container-menu">
          <main className="main-content">
            <h1>Categoría</h1>
            <Categories />
            <Products typeProducts={"Hamburguesas"} listProducts={listProducts.listBurgers}/>
            <Products typeProducts={"Pizzas"} listProducts={listProducts.listPizzas}/>
            <Products typeProducts={"Empanadas"} listProducts={listProducts.listEmpanadas}/>
            <Products typeProducts={"Snacks"} listProducts={listProducts.listSnacks}/>
            <Products typeProducts={"Helados"} listProducts={listProducts.listHelados}/>
            <Products typeProducts={"Bebidas"} listProducts={listProducts.listBebidas}/>
          </main>
        </div>
      </div>
    </>
  );
};

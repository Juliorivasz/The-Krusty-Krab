import './App.css'


import { Routes, Route } from 'react-router-dom';
import { RegisterUser } from './pages/RegisterUser';
import { AdminRoutes } from './admin/AdminRoutes'
import { Home } from './pages/Home';
import NotFound from './pages/errors/notFound';
import { Menu } from "./pages/Menu";
import Promociones from './pages/Promociones';

import { Cart } from "./pages/Cart";
import { OrderHistory } from "./pages/OrderHistory";


function App() {

  return (
    <>
    <Routes>
        <Route path="*" element={<NotFound/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orderHistory" element={<OrderHistory />} />
        <Route path="/register" element={<RegisterUser/>}></Route>
        <Route path="/admin/*" element={<AdminRoutes/>}></Route>
        <Route path="/promociones/" element={<Promociones/>}></Route>

    </Routes>
    </>
  )
}

export default App

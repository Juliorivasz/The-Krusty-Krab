import './App.css';
import { Routes, Route } from 'react-router-dom';
import { RegisterUser } from './pages/RegisterUser';
import { AdminRoutes } from './admin/AdminRoutes';
import { Home } from './pages/Home';
import NotFound from './pages/errors/notFound';
import { Menu } from "./pages/Menu";
import Promociones from './pages/Promociones';

import { Cart } from "./pages/Cart";
import { OrderHistory } from "./pages/OrderHistory";

import { UserProfile } from './pages/UserProfile'; // Importa el componente UserProfile

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orderHistory" element={<OrderHistory />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/admin/*" element={<AdminRoutes />} />
        <Route path="/userprofile" element={<UserProfile />} /> {/* Ruta para UserProfile */}
        <Route path="/promociones" element={<Promociones />} />
        <Route path="*" element={<NotFound />} /> {/* Esta debe ser la última ruta */}
      </Routes>
    </>
  );
}

export default App;

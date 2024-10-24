import './App.css';
import { Routes, Route } from 'react-router-dom';
import { RegisterUser } from './pages/RegisterUser';
import { AdminRoutes } from './admin/AdminRoutes';
import { Home } from './pages/Home';
import NotFound from './pages/errors/notFound';
import { Menu } from "./pages/Menu";
import Promociones from './pages/Promociones';

import { OrderHistory } from "./pages/OrderHistory";

import { UserProfile } from './pages/UserProfile';
import StepperPay from './components/StepperPay';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<StepperPay />} />
        <Route path="/orderHistory" element={<OrderHistory />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/admin/*" element={<AdminRoutes />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/promociones" element={<Promociones />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import { AdminRoutes } from './components/admin/AdminRoutes';
import './App.css';
import NotFound from './components/pages/errors/NotFound';
import { Home } from './components/pages/Home';
import { Menu } from "./components/pages/Menu";
import Promociones from './components/pages/Promociones';
import { RegisterUser } from './components/user/RegisterUser';

import { OrderHistory } from "./components/pages/OrderHistory";

import { UserProfile } from './components/pages/UserProfile';
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

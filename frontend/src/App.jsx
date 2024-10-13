import './App.css'


import { Routes, Route } from 'react-router-dom';
import { RegisterUser } from './pages/RegisterUser';
import { AdminRoutes } from './admin/AdminRoutes'
import { Home } from './pages/Home';
import NotFound from './pages/errors/notFound';

function App() {

  return (
    <>
    <Routes>
        <Route path="*" element={<NotFound/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/register" element={<RegisterUser/>}></Route>
        <Route path="/admin/*" element={<AdminRoutes/>}></Route>
    </Routes>
    </>
  )
}

export default App

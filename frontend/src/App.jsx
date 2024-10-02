import './App.css'


import { Routes, Route } from 'react-router-dom';
import { RegisterUser } from './pages/RegisterUser';
import { AdminRoutes } from './admin/AdminRoutes'

function App() {

  return (
    <>
    <Routes>
        <Route path="/registerU" element={<RegisterUser/>}></Route>
        <Route path="/admin/*" element={<AdminRoutes/>}></Route>
    </Routes>
    </>
  )
}

export default App

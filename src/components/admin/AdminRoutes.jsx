
import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
// import { RecoveryPassword } from "./RecoveryPassword";
// import { PasswordRecovered } from "./PasswordRecovered";
import PrivateRoute from "./PrivateRoute";

export const AdminRoutes = () => {
  return (
    <Routes>
      <Route index element={<Login />}/>
      <Route path="/*" element={<PrivateRoute/>}>
      </Route>
      {/* <Route path="recoveryPassword/*" element={<PasswordRecovered/>}/>
      <Route path="recoveryPassword" element={<RecoveryPassword/>}/> */}

    </Routes>
  )
}

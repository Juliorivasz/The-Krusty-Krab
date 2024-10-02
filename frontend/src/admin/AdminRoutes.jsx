
import { Route, Routes } from "react-router-dom";
import { Login } from "./Login";
// import { RecoveryPassword } from "./RecoveryPassword";
// import { PasswordRecovered } from "./PasswordRecovered";
import { Dashboard } from "../pages/Dashboard";
import PrivateRoute from "./PrivateRoute";

export const AdminRoutes = () => {
  return (
    <Routes>
      <Route index element={<Login />}/>
      <Route path="/*" element={<PrivateRoute/>}>
        <Route path="home" element={<Dashboard />} />
      </Route>
      {/* <Route path="recoveryPassword/*" element={<PasswordRecovered/>}/>
      <Route path="recoveryPassword" element={<RecoveryPassword/>}/> */}

    </Routes>
  )
}

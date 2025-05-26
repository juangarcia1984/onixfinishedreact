import { Routes, Route } from "react-router-dom"
import Homepages from "./frontend/pages/Homepages"
import Registerpage from "./frontend/pages/Registerpage"
import Loginpage from "./frontend/pages/Loginpage"
import Notfound from "./frontend/pages/Notfoundpage"
import Dashboardpages from "./admin/pages/Dashboardpages"
import '/public/plantilla-onix/css/estilos.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepages />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/register" element={<Registerpage />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Routes>
        <Route path="/dashboard" element={<Dashboardpages />} />
      </Routes>
    </>
  )
}

export default App

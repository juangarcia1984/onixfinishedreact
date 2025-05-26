import { Routes, Route } from "react-router-dom"
import Homepages from "./frontend/pages/Homepages"
import Projectpages from "./frontend/pages/Projectpages"
import Showcasepage from "./frontend/pages/Showcasepage"
import Servicespages from "./frontend/pages/Servicespages"
import Gallerypages from "./frontend/pages/Gallerypages"
import Registerpage from "./frontend/pages/Registerpage"
import Loginpage from "./frontend/pages/Loginpage"
import Notfound from "./frontend/pages/Notfoundpage"
import Dashboardpages from "./admin/pages/Dashboardpages"
import ContactFormpages from "./frontend/pages/ContactFormpages"
import '/public/plantilla-onix/css/estilos.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepages />} />
        <Route path="/showcase" element={<Showcasepage />} />
        <Route path="/project" element={<Projectpages />} />
        <Route path="/services" element={<Servicespages />} />
        <Route path="/gallery" element={<Gallerypages />} />
        <Route path="/contact" element={<ContactFormpages />} />
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

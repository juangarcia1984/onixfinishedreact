import { Routes, Route } from "react-router-dom"
import Homepages from "./frontend/pages/Homepages"
import Projectpages from "./frontend/pages/Projectpages"
import Showcasepage from "./frontend/pages/Showcasepage"
import Servicespages from "./frontend/pages/Servicespages"
import Gallerypages from "./frontend/pages/Gallerypages"
import Footerpages from "./frontend/pages/Footerpages"
import Registerpage from "./frontend/pages/Registerpage"
import Loginpage from "./frontend/pages/Loginpage"
import Notfound from "./frontend/pages/Notfoundpage"
import Dashboardpages from "./admin/pages/Dashboardpages"
import ContactFormpages from "./frontend/pages/ContactFormpages"
import Adminpages from "./admin/pages/Adminpages"
import Userpages from "./admin/pages/Userpages"
import Reportspages from "./admin/pages/Reportspages"
import Publicroutes from "./components/auth/Publicroutes"
import Privateroutes from "./components/auth/Privateroutes"
import Rolesroutes from "./components/auth/Rolesroutes";
import Authcontext from "./context/Authcontext"
import Projectdetails from "./frontend/component/Projectdetails"
import '/public/plantilla-onix/css/estilos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/public/Plantilla dashboard/css/sb-admin-2.css';




function App() {
  return (
    <>
    <Authcontext>
      <Routes>
        <Route element={<Publicroutes />}>
          <Route path="/" element={<Homepages />} />
          <Route path="/showcase" element={<Showcasepage />} />
          <Route path="/project" element={<Projectpages />} />
          <Route path="/projects/:projectId" element={<Projectdetails />} />
          <Route path="/services" element={<Servicespages />} />
          <Route path="/gallery" element={<Gallerypages />} />
          <Route path="/contact" element={<ContactFormpages />} />
          <Route path="/footer" element={<Footerpages />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/register" element={<Registerpage />} />
       </Route>

       <Route element={<Privateroutes />}>
         <Route path="/login" element={<Loginpage />} />
         <Route element={<Rolesroutes allowedroles={['admin']} />}>
           <Route path="/dashboard" element={<Dashboardpages />} />
           <Route path="/dashboard/admin" element={<Adminpages />} />
           <Route path="/dashboard/reports" element={<Reportspages />} />
         </Route>
         <Route element={<Rolesroutes allowedroles={['user']} />}>
           <Route path="/" element={<Userpages />} />
         </Route>
       </Route>

      
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Authcontext>
    </>
  )
}

export default App

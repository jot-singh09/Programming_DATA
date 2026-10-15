
import { BrowserRouter,Routes,Route } from "react-router"
import Register from './pages/Register'

import Openacc from "./pages/admin/Openacc";
import Search from "./pages/admin/Search";
import CheckBal from "./pages/admin/CheckBal";
import CheckHistory from "./pages/admin/CheckHistory";
import Delete from "./pages/admin/Delete";
import Adminlogin from "./pages/Adminlogin";
import Admindashboard from "./pages/Admindashboard";
const App = () => {
  return (
    <div className="bg-[#020C18]">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<Adminlogin />} />
          <Route path="/" element={<Adminlogin />} />
          <Route path="/adminpage" element={<Admindashboard/>} />
          <Route path="/admin/newaccount" element={<Openacc/>} />
          <Route path="/admin/searchaccount" element={<Search />} />
          <Route path="/admin/checkbalance" element={<CheckBal />} />
          <Route path="/admin/viewaccounthistory" element={<CheckHistory />} />
          <Route path="/admin/delete" element={<Delete />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App

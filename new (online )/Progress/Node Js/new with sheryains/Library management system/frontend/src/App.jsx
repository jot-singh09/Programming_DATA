import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Addbook from "./pages/Addbook"
import Issue from "./pages/Issue"
import Return from "./pages/Return"
import Delete from "./pages/Delete"
import Allbooks from "./pages/Allbooks"
import Allhistory from "./pages/Allhistory"
const App = () => {
  return (
    <div className="w-full font-helvetica bg-[#000A14] text-white">
   <BrowserRouter>
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/addbook" element={<Addbook/>} />
      <Route path="/issuebook" element={<Issue/>} />
      <Route path="/returnbook" element={<Return/>} />
      <Route path="/deletebook" element={<Delete/>} />
      <Route path="/allbooks" element={<Allbooks/>} />
      <Route path="/history" element={<Allhistory/>} />
   </Routes>
   </BrowserRouter>
    </div>
  )
}

export default App

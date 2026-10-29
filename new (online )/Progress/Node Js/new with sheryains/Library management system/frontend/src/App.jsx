import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Addbook from "./pages/Addbook"
import Issue from "./pages/Issue"
import Return from "./pages/Return"
import Delete from "./pages/Delete"
import Allbooks from "./pages/Allbooks"
import Allhistory from "./pages/Allhistory"
import Adduser from "./pages/user/Adduser"
const App = () => {
  return (
    
    <div className="w-full font-helvetica bg-[#000A14] text-white">
   <BrowserRouter>
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/stock/add" element={<Addbook/>} />
      <Route path="/books/issue" element={<Issue/>} />
      <Route path="/returnbook" element={<Return/>} />
      <Route path="/deletebook" element={<Delete/>} />
      <Route path="/allbooks" element={<Allbooks/>} />
      <Route path="/transactions" element={<Allhistory/>} />

      {/* user */}
      <Route path="/student/add" element={<Adduser/>} />
      
   </Routes>
   </BrowserRouter>
    </div>
  )
}

export default App

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Error from "./pages/Error";
const App = () => {
  return (
    <div className="font-['Poppins',sans-serif]">
      
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/products" element={<Product/>}/>
          <Route path="/contact" element={<Contact/>}/>
          
          <Route path="*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

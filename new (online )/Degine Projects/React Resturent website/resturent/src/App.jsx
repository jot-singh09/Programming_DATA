import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Menu from "./pages/Menu";
import Profile from "./pages/Profile";
import Mycart from "./pages/Mycart";
import Errorpage from "./pages/Errorpage";
const App = () => {
  return (
    <div className="bg-zinc-950  h-100 w-full">
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/order" element={<Order/>}/>
        <Route path="/mycart" element={<Mycart/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="*" element={<Errorpage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

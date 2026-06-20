import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TeamTree from "./pages/TeamTree";
import Trade from "./pages/Trade";
import Errorpage from "./pages/Errorpage";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <div className="font-[helvetica]">
      
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/trade" element={<Trade />} />
          <Route path="/teamtree" element={<TeamTree />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/auth" element={<Auth/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="*" element={<Errorpage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

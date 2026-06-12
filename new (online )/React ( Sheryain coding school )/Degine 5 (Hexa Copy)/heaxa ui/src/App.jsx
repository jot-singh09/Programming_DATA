import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TeamTree from "./pages/TeamTree";
import Trade from "./pages/Trade";

const App = () => {
  return (
    <div className="font-[helvetica]">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/trade" element={<Trade />} />
          <Route path="/teamtree" element={<TeamTree />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

// import { useContext } from "react"
// import { Datauseprovider } from "./ContextAPi/Datauseprovider"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { useEffect, useContext } from "react"
import { Datauseprovider } from "./ContextAPi/Datauseprovider"
import Home from "./Pages/Home."
import Dashboard from "./Pages/Dashboard"
import Auth from "./Pages/Auth"
import Trade from "./Pages/Trade"
import Create from "./Pages/Create"
import Teamtree from "./Pages/Teamtree"
import Error from "./Pages/Error"

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const { setopennav } = useContext(Datauseprovider);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (setopennav) setopennav("h-0");
  }, [pathname, setopennav]);

  return null;
};

const App = () => {
  return (
    <div className="selection:bg-purple-700 bg-[#EDF1FB]">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/auth" element={<Auth/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/trade" element={<Trade/>}/>
          <Route path="/create" element={<Create/>}/>
          <Route path="/team" element={<Teamtree/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
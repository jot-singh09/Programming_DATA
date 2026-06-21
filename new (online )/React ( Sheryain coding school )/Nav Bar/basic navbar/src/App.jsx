
import Mobilena from "./Mobilena"
import Pcnav from "./Pcnav"
// import "remixicon/fonts/remixicon.css";
const App = () => {
  return (
    <div>
     <div className="max-lg:hidden">
      <Pcnav/>

     </div>
     <div className="lg:hidden">
      <Mobilena/>
     </div>
     </div>
  )
};

export default App

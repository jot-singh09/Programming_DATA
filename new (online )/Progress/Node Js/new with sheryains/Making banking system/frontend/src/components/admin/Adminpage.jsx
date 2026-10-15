import Navbar from "../navbar/Navbar";
import Middle from "./Middle";
import Upper from "./Upper";

const Adminpage = () => {
  return (
    <div>
      <Navbar />
      <div className="text-white pt-20 pb-25 ">
        <Upper />
        <Middle />
      </div>
    </div>
  );
};

export default Adminpage;

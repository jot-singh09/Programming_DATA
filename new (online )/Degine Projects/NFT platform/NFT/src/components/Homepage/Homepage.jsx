import Navbar from "../navbar/Navbar";
// import Down from "./Down";
// import Middle from "./Middle";
import Upper from "./Upper";

const Homepage = () => {
  return (
    <div>
      <Navbar />

      <div className="md:px-10 pt-10 max-md:px-1.5  bg-[#EDF1FB]">
      <Upper/>
      {/* <Middle/> */}
      {/* <Down/> */}
      </div>
    </div>
  );
};

export default Homepage;

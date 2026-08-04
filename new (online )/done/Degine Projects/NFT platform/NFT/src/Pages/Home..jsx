import Homepage from "../components/Homepage/Homepage";
import { useContext, useEffect } from 'react';
import { Datauseprovider } from "../ContextAPi/Datauseprovider";
import WelcomeAnimation from "./WelcomeAnimation";

const Home = () => {
const { setaniamtion, animation, setstopaniamtion, stopanimation } = useContext(Datauseprovider);

useEffect(() => {
  setaniamtion("visible");
  setstopaniamtion("hidden");
}, [setaniamtion, setstopaniamtion]);

  return (
    <div className="bg-[#070A18] min-h-screen">
      <div className={`${animation || "visible"} duration-1000 transition-all ease-in-out`}>
        <Homepage />
      </div>
      {stopanimation === "visible" && (
        <div className={`${stopanimation}`}>
          <WelcomeAnimation/>
        </div>
      )}
    </div>
  );
};

export default Home;
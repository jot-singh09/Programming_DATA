import Homepage from "../components/Homepage/Homepage";
import { useContext, useEffect } from 'react';
import { Datauseprovider } from "../ContextAPi/Datauseprovider";
import WelcomeAnimation from "./WelcomeAnimation";

const Home = () => {
const {setaniamtion , animation ,setstopaniamtion ,stopaniamtion} = useContext(Datauseprovider)
useEffect(() => {
  const timer = setTimeout(() => {
    setaniamtion("visible")
    setstopaniamtion("invisible")
  }, 100); // 10000ms = 10 seconds

  return () => clearTimeout(timer);
}, []);
  return (
    <div className="bg-[#070A18] min-h-screen">
      <div className={`${animation} duration-1000 transition-all ease-in-out  `}>
      <Homepage />
      </div>
      <div className={`${stopaniamtion}`}>
      <WelcomeAnimation/>
      </div>

    </div>
  );
};

export default Home;
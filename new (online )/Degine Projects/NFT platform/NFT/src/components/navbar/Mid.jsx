import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
const Mid = () => {
  const location = useLocation();
  const [Home, setHome] = useState("w-full")
  const [dis, setdis] = useState("hidden")
  const [Trade, setTrade] = useState("w-full")
  const [Create, setCreate] = useState("w-full")
  const [Dashboard, setDashboard] = useState("w-full")
  const [Teamtree, setTeamtree] = useState("w-full")
  console.log(location.pathname);
  
useEffect(() => {
  // Reset ALL to hidden first
  setHome("w-0");
  setDashboard("w-0");
  setTrade("w-0");
  setCreate("w-0");
  setTeamtree("w-0");

  // Set the active page to visible
  if (location.pathname === '/') {
    setHome("w-full");
  }
  else if (location.pathname === '/dashboard') {
    setDashboard("w-full");
  } else if (location.pathname === '/trade') {
    setTrade("w-full");
  } else if (location.pathname === '/create') {
    setCreate("w-full");
  } else if (location.pathname === '/teamtree') {
    setTeamtree("w-full");
  }
  if (location.pathname !== '/'){
    setdis("flex")
  }
}, [location.pathname]);


  return (
    <div className={`${dis} pl-30 gap-8`}>
      <a
        href="/"
        className={`text-blue-950 text-lg font-bold  after:w-0 after:duration-300 after:transition-all after:ease-in-out hover:after:w-full after:bg-blue-900 relative after:absolute after:h-0.5 after:bottom-0 after:left-0`}
      >
        Home
      </a>
      <a
        href="/dashboard"
        className={`text-blue-950 text-lg font-bold  after:${Dashboard} after:duration-300 after:transition-all after:ease-in-out hover:after:w-full after:bg-blue-900 relative after:absolute after:h-0.5 after:bottom-0 after:left-0`}
      >
        Dashboard
      </a>
      <a
        href="/trade"
        className={`text-blue-950 text-lg font-bold  after:${Trade} after:duration-300 after:transition-all after:ease-in-out hover:after:w-full after:bg-blue-900 relative after:absolute after:h-0.5 after:bottom-0 after:left-0`}
      >
        Trade
      </a>
      <a
        href="/create"
        className={`text-blue-950 text-lg font-bold  after:${Create} after:duration-300 after:transition-all after:ease-in-out hover:after:w-full after:bg-blue-900 relative after:absolute after:h-0.5 after:bottom-0 after:left-0`}
      >
        Create
      </a>
      <a
        href="/team"
        className={`text-blue-950 text-lg font-bold  after:${Teamtree} after:duration-300 after:transition-all after:ease-in-out hover:after:w-full after:bg-blue-900 relative after:absolute after:h-0.5 after:bottom-0 after:left-0`}
      >
        Tree
      </a>
    </div>
  );
};

export default Mid;

import {  useState } from "react";

const Mobilena = () => {
  const [isActive, setIsActive] = useState(false);

  const opennav = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <style>{`
        @keyframes slideIn {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0%);
            opacity: 1;
          }
        }
        @keyframes slideOut {
          0% {
            transform: translateX(0%);
            opacity: 1;
          }
          100% {
            transform: translateX(-100%);
            opacity: 0;
          }
        }
      `}</style>

      <div className="bg-[#222] text-white w-full h-10 flex justify-between items-center">
        <div className="px-10 max-lg:px-2">
          <h1 className="text-2xl font-bold max-lg:text-xl">WebPractice</h1>
        </div>

        <div className="px-10">
          <h1 
            className="px-10 text-sm p-2 rounded"
            onClick={opennav}
          >
            {isActive ? 'Close' : 'Menu'}
          </h1>
        </div>
      </div>

      <div
        className={`bg-[#444] py-10 flex-col gap-5 px-4 underline text-white h-300 w-full ${
          isActive 
            ? 'flex animate-[slideIn_0.5s_ease-out_forwards]' 
            : 'flex animate-[slideOut_0.5s_ease-out_forwards]'
        }`}
      >
        <h4>Home</h4>
        <h4>About</h4>
        <h4 className="pb-5">Contact</h4>
      </div>
    </div>
  );
};

export default Mobilena;
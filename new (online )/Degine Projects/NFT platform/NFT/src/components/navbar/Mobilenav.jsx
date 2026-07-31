import { useContext } from "react";
import { Datauseprovider } from "../../ContextAPi/Datauseprovider";
import home from "../../assets/home.svg";
import arrow from "../../assets/navarrow.svg";
import dashboard from "../../assets/dashboard.svg";
import marketplace from "../../assets/marketplace.svg";
import create from "../../assets/create.svg";
import tree from "../../assets/teamtree.svg";
import wallet from '../../assets/wallet.svg'
const Mobilenav = () => {
  const { setw, opennav } = useContext(Datauseprovider);
  return (
    <div
      className={`overflow-hidden ${opennav}  duration-700 transition-all ease-in-out `}
    >
        <div
          className={`bg-linear-to-b from-white to-blue-100  pt-5   h-full justify-between flex flex-col`}
          >
            <div className="flex flex-col gap-5 px-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <img src={home} className="w-7" alt="" />
              <a
                href="/"
                className={`text-blue-950 text-lg font-bold  after:w-0 after:duration-300 after:transition-all after:ease-in-out hover:after:w-full after:bg-blue-900 relative after:absolute after:h-0.5 after:bottom-0 after:left-0`}
              >
                Home
              </a>
            </div>
            <div className="pr-3">
              <img src={arrow} className="w-5" alt="" />
            </div>
          </div>

          <div className="flex gap-1 items-center justify-between">
            <div className="flex items-center gap-1">
              <img src={dashboard} className="w-7" alt="" />
              <a
                href="/dashboard"
                className={`text-blue-950 text-lg font-bold   after:duration-300 after:transition-all after:ease-in-out hover:after:w-full after:bg-blue-900 relative after:absolute after:h-0.5 after:bottom-0 after:left-0`}
              >
                Dashboard
              </a>
            </div>
            <div className="pr-3">
              <img src={arrow} className="w-5" alt="" />
            </div>
          </div>
          <div className="flex gap-1 items-center justify-between">
            <div className="flex items-center gap-1">
              <img src={marketplace} className="w-7" alt="" />
              <a
                href="/trade"
                className={`text-blue-950 text-lg font-bold  after:duration-300 after:transition-all after:ease-in-out hover:after:w-full after:bg-blue-900 relative after:absolute after:h-0.5 after:bottom-0 after:left-0`}
              >
                Trade
              </a>
            </div>
            <div className="pr-3">
              <img src={arrow} className="w-5" alt="" />
            </div>
          </div>
          <div className="flex gap-1 items-center justify-between">
            <div className="flex items-center gap-1">
              <img src={create} className="w-7" alt="" />
              <a
                href="/create"
                className={`text-blue-950 text-lg font-bold after:duration-300 after:transition-all after:ease-in-out hover:after:w-full after:bg-blue-900 relative after:absolute after:h-0.5 after:bottom-0 after:left-0`}
              >
                Create
              </a>
            </div>

            <div className="pr-3">
              <img src={arrow} className="w-5" alt="" />
            </div>
          </div>
          <div className="flex gap-1 items-center justify-between">
            <div className="flex items-center gap-1">
              <img src={tree} className="w-7" alt="" />
              <a
                href="/team"
                className={`text-blue-950 text-lg font-bold   after:duration-300 after:transition-all after:ease-in-out hover:after:w-full after:bg-blue-900 relative after:absolute after:h-0.5 after:bottom-0 after:left-0`}
              >
                Tree
              </a>
            </div>

            <div className="pr-3">
              <img src={arrow} className="w-5" alt="" />
            </div>
          </div>
        </div>
      <div className="pb-2 pl-1.5 pt-6 px-3 flex items-center justify-center">
        <button className="bg-[#3A23B8] text-lg rounded-md text-white flex gap-4 w-full  justify-center px-3 py-2 "> <img className="w-6" src={wallet} alt="" />
            Connect Wallet
        </button>
      </div>
      </div>

    </div>
  );
};

export default Mobilenav;

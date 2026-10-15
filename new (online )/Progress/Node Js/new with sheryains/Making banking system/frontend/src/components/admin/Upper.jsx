import icon from "../../assets/calendar.svg";
import multiperson from "../../assets/multipleperson.svg";
import singleperosn from "../../assets/singleadd.svg";
import totalacc from "../../assets/Totalacc.svg";
import totalearning from "../../assets/toalearning.svg";
import Delete from "../../assets/deletebin.svg";
import arrow from "../../assets/arrow.svg";
import search from "../../assets/search.svg";
import wallet from "../../assets/wallet.svg";
import clock from "../../assets/clock.svg";
import axios from "axios";
import { useEffect, useState } from "react";
const Upper = () => {
  const [Accounts, setAccounts] = useState([]);
    const [balance, setbalance] = useState(0);
  const API = import.meta.env.VITE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API}/admin/data`);
       
        setAccounts(res.data.accounts);
        setbalance(res.data.amo)
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  let currentacc = Accounts.filter((acc) =>
    acc.acctype.toLowerCase().includes("current"),
  );
  let savingacc = Accounts.filter((acc) =>
    acc.acctype.toLowerCase().includes("saving"),
  );
  
 
  

  const now = new Date();
  let day = new Date().toLocaleDateString("en-US", { weekday: "long" }); // "Sunday"
  return (
    <div className="">
      <div className="flex w-full justify-between px-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-black">Welcome back to Admin!</h1>
          <h1 className=" font-light text-gray-500  ">
            Here's an overview of our banking system
          </h1>
        </div>
        <div className="bg-[#020D1A] flex  px-2 border border-gray-800 w-fit rounded-lg">
          <img src={icon} className="w-6" alt="" />
          <div className="p-2">
            <div className="font-bold">Today</div>
            <div className="flex gap-2">
              <h1>{now.toLocaleDateString()} ,</h1>
              <h1>{day}</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-8 pt-10 pl-17 flex-wrap">
        <div className="bg-linear-to-tl p-4 h-28 flex gap-2 w-70 from-[#020D1C] border border-[#013476] rounded-md to-[#031F45]">
          <div className=" p-2  rounded-lg h-fit bg-[#0056FB] shadow shadow-[#003CB1]">
            <img src={multiperson} className="w-13" alt="" />
          </div>
          <div className="pl-4 flex flex-col gap-1">
            <h1 className="text-lg font-bold">Total Users</h1>
            <h1 className="text-2xl font-bold">{Accounts.length}</h1>
          </div>
        </div>

        <div className="bg-linear-to-tl p-4 h-28 flex gap-2 w-70 from-[#033D36]  to-[#032E2F] border border-[#023831] rounded-md">
          <div className=" p-2  rounded-lg h-fit bg-[#02B27A] shadow shadow-[#036648]">
            <img src={singleperosn} className="w-13" alt="" />
          </div>
          <div className="pl-4 flex flex-col gap-1">
            <h1 className="text-lg font-bold">Total Curr Acc</h1>
            <h1 className="text-2xl font-bold">{currentacc.length}</h1>
          </div>
        </div>

        <div className="bg-linear-to-tl p-4 h-28 flex gap-2 w-70 from-[#1E1362] border border-purple-900 rounded-md to-[#1E1659]">
          <div className=" p-2  rounded-lg h-fit bg-[#6638FB] shadow shadow-[#371BA2]">
            <img src={totalacc} className="w-13" alt="" />
          </div>
          <div className="pl-4 flex flex-col gap-1">
            <h1 className="text-lg font-bold">Total Saving Acc</h1>
            <h1 className="text-2xl font-bold">{savingacc.length}</h1>
          </div>
        </div>

        <div className="bg-linear-to-tl p-4 h-28 flex gap-2 w-70 from-[#513C18] border border-yellow-900 rounded-md to-[#2F2719]">
          <div className=" p-2  rounded-lg h-fit bg-[#D99719] shadow shadow-[#003CB1]">
            <img src={totalearning} className="w-13" alt="" />
          </div>
          <div className="pl-4 flex flex-col gap-1">
            <h1 className="text-lg font-bold">Total Balance</h1>
            <h1 className="text-2xl font-bold">{balance}</h1>
          </div>
        </div>
      </div>

      <div className="flex  gap-8 pt-10 pl-12 flex-wrap  ">
        <a
          href="/admin/newaccount"
          className="items-center bg-linear-to-tl p-4 h-18 flex gap-2 w-57 from-[#020D1C] border border-[#013476] rounded-md to-[#0145AD]"
        >
          <div className=" p-2 flex gap-5 rounded-lg h-fit bg-[#0056FB] shadow shadow-[#003CB1]">
            <img src={singleperosn} className="w-6" alt="" />
          </div>
          <div className="pl-3 flex items-center justify-between w-full">
            <h1 className="font-black">Open New Account</h1>
            <img src={arrow} className="w-5" alt="" />
          </div>
        </a>

        <a
          href="/admin/searchaccount"
          className="items-center bg-linear-to-tl p-4 h-18 flex gap-2 w-57 from-[#033D36] border border-[#023E38] rounded-md to-[#022e2e]"
        >
          <div className=" p-2 flex gap-5 rounded-lg h-fit bg-[#01B379] shadow shadow-[#01B379]">
            <img src={search} className="w-6" alt="" />
          </div>
          <div className="pl-3 flex items-center justify-between w-full">
            <h1 className="font-black">Search Account</h1>
            <img src={arrow} className="w-5" alt="" />
          </div>
        </a>

        <a
          href="/admin/checkbalance"
          className="items-center bg-linear-to-tl p-4 h-18 flex gap-2 w-57 from-[#020D1C] border border-[#2F2182] rounded-md to-[#331F96]"
        >
          <div className=" p-2 flex gap-5 rounded-lg h-fit bg-[#683CFC] shadow shadow-[#2F2182]">
            <img src={wallet} className="w-6" alt="" />
          </div>
          <div className="pl-3 flex items-center justify-between w-full">
            <h1 className="font-black">Check Balance</h1>
            <img src={arrow} className="w-5" alt="" />
          </div>
        </a>

        <a
          href="/admin/viewaccounthistory"
          className="items-center bg-linear-to-tl p-4 h-18 flex gap-2 w-57 from-[#EC6D3D] border border-[#93492A] rounded-md to-[#A94C2D]"
        >
          <div className=" p-2 flex gap-5 rounded-lg h-fit bg-[#FC7744] shadow shadow-[#FC7744]">
            <img src={clock} className="w-6" alt="" />
          </div>
          <div className="pl-3 flex items-center justify-between w-full">
            <h1 className="font-black">View Account History</h1>
            <img src={arrow} className="w-5" alt="" />
          </div>
        </a>

        <a
          href="/admin/delete"
          className="items-center bg-linear-to-tl p-4 h-18 flex gap-2 w-57 from-red-800 border border-red-900 rounded-md to-red-900"
        >
          <div className=" p-2 flex gap-5 rounded-lg h-fit bg-red-800 shadow shadow-red-700">
            <img src={Delete} className="w-6" alt="" />
          </div>
          <div className="pl-3 flex items-center justify-between w-full">
            <h1 className="font-black">View Account History</h1>
            <img src={arrow} className="w-5" alt="" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Upper;

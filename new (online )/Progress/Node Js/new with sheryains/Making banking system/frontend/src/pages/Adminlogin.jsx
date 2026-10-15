import React, { useEffect, useState } from "react";
import img from "../assets/registerpage.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Adminlogin = () => {
    const navigate = useNavigate(); 
    const [name, setName] = useState("");
    const [passward, setPassward] = useState("");
    const API = import.meta.env.VITE_URL;
    axios.defaults.withCredentials = true;
  async function login(e) {
    e.preventDefault();
    try {
      let data = await axios.post(API + "/adminlogin", {
        name,
        passward,
      });

      const fetchData = async () => {
        try {
            const res = await axios.get(`${API}/checklogin`);
           
            if (res.data.isok == true) {
              navigate("/adminpage" );
            }
            else {
                console.log(err)
            }
        } catch (err) {
          console.log(err);
        }
      };
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="flex gap-2">
      <div>
        <img src={img} className="w-180" alt="" />
      </div>

      <div className="pt-20 pl-15">
        <div className="bg-[#01238F] text-white pt-2 pb-5 rounded-lg border border-blue-800 px-3">
          <h1 className="text-3xl font-black">Login to Admin</h1>
          <div>
            <form onSubmit={login} className="flex flex-col gap-5 pt-5">
              <input
                type="text"
                placeholder="Enter the User name"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter the User name"
                onChange={(e) => setPassward(e.target.value)}
              />
              <button>submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adminlogin;

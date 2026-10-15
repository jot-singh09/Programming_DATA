import React, { useState } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;  
const Right = () => {
const API = import.meta.env.VITE_URL;
  const [name, setName] = useState("");
  const [passward, setpassward] = useState("");
  const [email, setemail] = useState("");
  const [age, setage] = useState("");
  const [acctype, setacctype] = useState("saving");
  let postdata = async (e) => {
    e.preventDefault();
    try {
      let data = await axios.post(API+'/register', {
        name,
        email,
        passward,
        age,
        acctype
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="px-4 pb-5 text-white bg-[#050A16] absolute right-20 border border-gray-900 rounded-lg top-20 pr-20">
      <h1 className="text-white text-3xl  pt-4 font-black w-full">
        Welcome to Our bank
      </h1>
      <h1 className="pt-3 text-gray-500 font-light">
        Sign up in your Secrurebank
      </h1>

      <form
        className="  pt-5 pr-30 flex flex-col gap-2 w-full "
        onSubmit={postdata}
      >
        <div className="w-full">
          <h1 className="p-1 text-gray-300">Name</h1>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your fullname"
            className="text-white outline-none bg-[#0B1322] border border-gray-500 rounded-md py-2 px-3 p-1"
          />{" "}
        </div>

        <div>
          <h1 className="p-1 text-gray-300">Email</h1>
          <input
            type="text"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            placeholder="Enter your fullname"
            className="text-white outline-none bg-[#0B1322] border border-gray-500 rounded-md py-2 px-3 p-1"
          />{" "}
        </div>

        <div>
          <h1 className="p-1 text-gray-300">Age</h1>
          <input
            type="number"
            value={age}
            onChange={(e) => setage(e.target.value)}
            placeholder="Enter your age"
            className="text-white outline-none bg-[#0B1322] border border-gray-500 rounded-md py-2 px-3 p-1"
          />{" "}
        </div>

        <div className="w-full">
          <h1 className="p-1 text-gray-300">Passward</h1>
          <input
            type="text"
            value={passward}
            onChange={(e) => setpassward(e.target.value)}
            placeholder="Enter your fullname"
            className="text-white outline-none bg-[#0B1322] border border-gray-500 rounded-md py-2 px-3 "
          />{" "}
        </div>
        <div>
          {/* <h1 className="p-1 text-gray-300">Passward</h1> */}
          <select
            required
            onChange={(e) => {
              setacctype(e.target.value);
            }}
            className="text-white outline-none bg-[#0B1322] border border-gray-500 rounded-md py-2 px-5 w-full"
          >
            <option>Select</option>
            <option value="saving">Saving</option>
            <option value="current">Current</option>
          </select>
        </div>
        <div>
        
        </div>
        <button
          type="submit"
          className="bg-[#0E6AFD] py-2 px-25 rounded-md mt-5"
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Right;

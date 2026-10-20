import img from "../assets/loginui.png";
import logo from "../assets/Logo.png";
import bar from "../assets/bar.svg";
import book from "../assets/book.svg";
import people from "../assets/people.svg";
import date from "../assets/date.svg";
import axios from 'axios'
import email from "../assets/email.svg";
import pass from "../assets/pass.svg";
import arrow from "../assets/arrow.svg";
import eyehide from "../assets/eyehide.svg";
import eyeshow from "../assets/eye.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
   const navigate = useNavigate();
  async  function islogin (e){
       e.preventDefault()
      let res = await  axios.post('http://localhost:5000/adminlogin',{username,passward})
      if (res.data.message===true){
        navigate('/addbook')
      }
    }
    const [username, setUsername] = useState('')
    const [passward, setpassward] = useState('')
    const [show, setShow] = useState(false);
    const [eye, seteye] = useState(eyehide)
    const [isactive, setisactive] = useState(false)
  return (
    <div>
      <div>
        <img src={img} className="w-screen h-screen object-cover" alt="" />
      </div>
      
      <div className="absolute top-6 left-10">
        <div className="pb-10">
          <img src={logo} className="w-50" alt="" />
        </div>
        <div className="flex flex-col gap-1.5">
          <h1 className="font-bold text-5xl   text-white">
            Manage books
          </h1>
          <h1 className="font-bold text-5xl   text-white">
            Build <span className="text-[#F49B1C]">Knowledge</span>
          </h1>
        </div>
        <div className="pt-3">
          <h1 className="text-white font-medium ">
            A smart and simple library management system for students
          </h1>
          <h1 className="text-white font-medium ">,staff and administrators</h1>
        </div>

        <div className="flex gap-5 pt-5 ">
          <div className="flex flex-col gap-1.5 items-center">
            <div className="bg-[#351E0A] w-fit p-2 shadow-md shadow-[#D08512] rounded-full">
              <img src={book} className="w-8 " alt="" />
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-gray-300 font-semibold">Book </h1>
              <h1 className="text-gray-300 font-semibold">Management</h1>
            </div>
          </div>
          <div className="flex flex-col gap-1.5 items-center">
            <div className="bg-[#07223A] w-fit p-2 shadow-md shadow-[#30B9FA] rounded-full">
              <img src={people} className="w-8 " alt="" />
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-gray-300 font-semibold">Member </h1>
              <h1 className="text-gray-300 font-semibold">Management</h1>
            </div>
          </div>
          <div className="flex flex-col gap-1.5 items-center">
            <div className="bg-[#053222] w-fit p-2 shadow-md shadow-[#33F08B] rounded-full">
              <img src={date} className="w-8 " alt="" />
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-gray-300 font-semibold">Issue & Return </h1>
              <h1 className="text-gray-300 font-semibold">Tracking</h1>
            </div>
          </div>
          <div className="flex flex-col gap-1.5     items-center">
            <div className="bg-[#2B1E4D] w-fit p-2 shadow-md shadow-[#C389FB] rounded-full">
              <img src={bar} className="w-8 " alt="" />
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-gray-300 font-semibold">Report & </h1>
              <h1 className="text-gray-300 font-semibold">Analytics</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-30 right-32 border px-10 pb-15 rounded-xl border-gray-500  bg-[#0D131B]">
        <div className="pb-5 pt-5 flex flex-col gap-2">
          <h1 className="font-helvetica text-3xl text-gray-300 font-black">
            Welcome back!
          </h1>
          <h1 className=" text-lg  text-gray-300 font-medium">
            Login to acess your liabrary account
          </h1>
        </div>
        <form className="flex flex-col gap-6 " onSubmit={islogin}>
          <div className="flex gap-3 border border-gray-600 bg-[#0E1825] py-2 px-3 text-white rounded-md w-90">
            <img src={email} className="w-6" alt="" />
            <input
            onChange={(e)=>{
                setUsername(e.target.value)
            }}
              className="outline-none w-full"
              type="text"
              placeholder="Enter the username"
              value={username}
              />
          </div>

          <div className="flex gap-3 border border-gray-600 bg-[#0E1825] py-2 px-3 text-white rounded-md w-90">
            <img src={pass} className="w-6" alt="" />
            <input
            onChange={(e)=>{
                setpassward(e.target.value)
            }}
              className="outline-none w-full"
               type={show ? 'text' : 'password'}
              placeholder="Enter the passward"
              value={passward}
            />
        <img src={eye}  className="w-6 " onClick={() => {
            setShow(!show)
            if (isactive==false){
                seteye(eyeshow)
                setisactive(true)
            }
            else{
                
                seteye(eyehide)
                setisactive(false)
            }
            
        }} alt="" />
          </div>

          <button className="bg-[#F59315] flex gap-3 items-center justify-center font-bold text-black py-2.5 rounded-lg pt-3 mt-3">
            Login
            <img src={arrow} className="w-6" alt="" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;

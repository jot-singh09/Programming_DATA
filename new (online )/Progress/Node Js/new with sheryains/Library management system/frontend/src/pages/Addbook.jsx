import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import book from "../assets/book.svg";
import person from "../assets/person.svg";
import layer from "../assets/layer.svg";
import axios from 'axios'
const Addbook = () => {
  const [author, setauthor] = useState("");
  const [Booktitle, setBooktitle] = useState("");
  const [desc, setdesc] = useState("");
  const [copies, setcopies] = useState("");
  let createbook = async (e)=>{
    e.preventDefault()
   let res = axios.post('http://localhost:5000/add-book',{author,Booktitle,desc,copies}).catch((err)=>{
    console.log(err);
    
   })
  }
  return (
    <div className="">
      <Navbar />
      <div className="pl-70 pt-15 w-full">
        <div>
          <h1 className="text-4xl font-bold">Add New Book</h1>
          <h1 className="pt-2 ">Add new book to your library collection</h1>
        </div>

        <div className="pb-20 pt-10 flex gap-3 rounded-lg  w-full">
          <div className="border border-gray-500/50 w-180 h-screen rounded-lg">
            <form onSubmit={createbook} className="flex px-4 pt-10 text-white gap-9 flex-wrap ">
              <div>
                <h1 className="font-semibold pb-0.5">
                  Book Title <span className="text-red-700">*</span>
                </h1>
                <div className="border bg-[#0B1C2B] w-75 py-1.5 rounded-sm border-gray-600 flex px-2 gap-0.5">
                  <img src={book} className="w-6" alt="" />
                  <input
                    className="outline-none w-full px-3"
                    type="text"
                    name=""
                    id=""
                    value={Booktitle}
                    onChange={(e) => {
                      setBooktitle(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div>
                <h1 className="font-semibold pb-0.5">
                  Author <span className="text-red-700">*</span>
                </h1>
                <div className="border bg-[#0B1C2B] w-75 py-1.5 rounded-sm border-gray-600 flex px-2 gap-0.5">
                  <img src={person} className="w-6" alt="" />
                  <input
                    className="outline-none w-full px-3"
                    type="text"
                    name=""
                    id=""
                    value={author}
                    onChange={(e) => {
                      setauthor(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div>
                <h1 className="font-semibold pb-0.5">
                  Available Coppies <span className="text-red-700">*</span>
                </h1>
                <div className="border bg-[#0B1C2B] w-75 py-1.5 rounded-sm border-gray-600 flex px-2 gap-0.5">
                  <img src={layer} className="w-6" alt="" />
                  <input
                    className="outline-none w-full px-3"
                    type="text"
                    name=""
                    id=""
                    value={copies}
                    onChange={(e) => {
                      setcopies(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div>
                <h1 className="font-semibold pb-1 text-gray-200 text-sm">
                  Description
                </h1>

                <div className="bg-[#0B1C2B] relative w-75 max-w-md h-24 rounded-md border border-gray-600 flex flex-col p-3 transition-colors focus-within:border-blue-500">
                  <textarea
                    className="bg-transparent   text-gray-300 outline-none w-full h-full resize-none placeholder-gray-400 text-sm"
                    placeholder="Enter book description (optional)"
                    name="description"
                    id="description"
                    value={desc}
                    onChange={(e) => {
                      setdesc(e.target.value);
                    }}
                  />
                </div>
              </div>
                <button className="w-full text-black bg-[#FDB93E] py-2 rounded-lg px-2">AddBook</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addbook;

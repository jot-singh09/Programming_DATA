import React, { useEffect, useState } from "react";
import {
  FaExchangeAlt,
  FaSearch,
  FaFilter,
  FaArrowRight,
  FaBook,
  FaUser,
  FaCalendarAlt,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import axios from 'axios'

const Allhistory = () => {
  
    const [history, sethistory] = useState([])
    const [search, setsearch] = useState('')

    useEffect(()=>{
      const getdata = async()=>{
        try{
  
          const res = await axios.get('http://localhost:5000/dashboard')
          sethistory(res.data.history)
        }catch{(err)=>{
          console.log(err)
        }}
      }
      getdata()
    },[])
    let data = history.filter((data)=> data.bookname.toLowerCase().includes(search) ) 
  
    
        
       
  return (
    <div>
      <Navbar/>
    <div className="min-h-screen bg-[#020C18] text-white p-8 font-sans ml-64">
      
      {/* --- Header Section --- */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <FaExchangeAlt className="text-[#F5B041]" /> Transactions
          </h1>
          <p className="text-gray-400 mt-2">View and manage all book issues and returns.</p>
        </div>
      </div>

      {/* --- Filters and Search --- */}
      <div className="bg-[#0A1828] rounded-xl p-4 mb-6 border border-gray-800 flex justify-between items-center">
        
        {/* Search Bar */}
        <div className="relative w-96">
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            value={search}
            onChange={(e)=>[
              setsearch(e.target.value)
            ]}
            placeholder="Search by book name......."
            className="w-full bg-[#04121E] text-white border border-gray-700 rounded-lg py-2.5 pl-10 pr-4 focus:outline-none focus:border-[#F5B041] transition-colors"
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-2 bg-[#04121E] p-1 rounded-lg border border-gray-700">
          <button onclick={(e)=>{
            setfilter('All')
          }} className="px-4 py-1.5 rounded-md text-sm font-medium bg-[#F5B041] text-black transition">
            All
          </button>
          <button onclick={(e)=>{
            setfilter('issued')
          }} className="px-4 py-1.5 rounded-md text-sm font-medium text-gray-400 hover:text-white transition">
            Issued
          </button>
          <button onclick={(e)=>{
            setfilter('returned')
          }} className="px-4 py-1.5 rounded-md text-sm font-medium text-gray-400 hover:text-white transition">
            Returned
          </button>
          <button onclick={(e)=>{
            setfilter('New book')
          }}  className="px-4 py-1.5 rounded-md text-sm font-medium text-red-400 hover:text-red-300 transition">
            New Stock
          </button>
        </div>
      </div>

      {/* --- Transactions Table --- */}
      <div className="bg-[#0A1828] rounded-xl border border-gray-800 overflow-hidden shadow-lg">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#04121E] text-gray-400 border-b border-gray-800">
            <tr>
              <th className="py-4 px-6 font-medium">Transaction ID</th>
              <th className="py-4 px-6 font-medium">Book Details</th>
              <th className="py-4 px-6 font-medium">Author</th>
              <th className="py-4 px-6 font-medium">Type</th>
            
              <th className="py-4 px-6 font-medium text-right">Action</th>
            </tr>
          </thead>
         

   {data.length == 0 ?(
    <div className="pl-20">
     <tr>
      <td colSpan="7" className="py-8 text-center text-gray-500">
        No transactions found.
      </td>
    </tr>
    </div>
   ) : ( data.map((data)=>{
    return(
               <tbody className="divide-y divide-gray-800/50">
            
            {/* Row 1 - Issued */}
            <tr className="hover:bg-white/5 transition">
              <td className="py-4 px-6 text-gray-400 font-mono text-xs">#{data._id}</td>
              <td className="py-4 px-6">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-900/30 p-2 rounded text-blue-400"><FaBook /></div>
                  <div>
                    <p className="font-semibold text-white">{data.bookname}</p>
                    <p className="text-xs text-gray-500">{data.type}</p>
                  </div>
                </div>
              </td>
              <td className="py-4 px-6">
                <div className="flex items-center gap-2">
                  <FaUser className="text-gray-500" />
                  <span>{data.name}</span>
                </div>
              </td>
              <td className="py-4 px-6">
                <span className="px-2.5 py-1 rounded text-xs bg-yellow-900/30 text-yellow-500 font-medium">
                  {data.type}
                </span>
              </td>
              <td className="py-4 px-6 text-gray-400">
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-gray-500" /> {data.date.split('T')[0]}
                </div>
              </td>
              <td className="py-4 px-6">
               
              </td>
              <td className="py-4 px-6 text-right">
               
              </td>
            </tr>

          
           

          </tbody> 
            )
   }))}
        </table>
        
        {/* --- Pagination Footer (Optional) --- */}
        <div className="bg-[#04121E] p-4 border-t border-gray-800 flex justify-between items-center text-sm text-gray-400">
          <span>Showing {history.length} transactions</span>
         
        </div>
      </div>
      </div>

    </div>
  );
};

export default Allhistory;
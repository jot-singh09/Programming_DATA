import React, { useEffect, useState } from "react";
import axios from 'axios'
import {
  FaBook,
  FaBookOpen,
  FaBookReader,
  FaUsers,
  FaPlus,
  FaSignOutAlt,
  FaSignInAlt,
  FaTrashAlt,
  FaEllipsisV,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";


const Dashboard = () => {
  
   const [user, setuser] = useState([])
  const [book, setbook] = useState([])
  const [history, sethistory] = useState([])
  useEffect(()=>{
    const getdata = async()=>{
      try{

        const res = await axios.get('http://localhost:5000/dashboard')
        setbook(res.data.book)
        setuser(res.data.user)
        sethistory(res.data.history)
     
      }catch{(err)=>{
        console.log(err)
      }}
    }
    getdata()
  },[])

    
    
  
  return (
    <div>
      <Navbar/>
    <div>
      <div className="min-h-screen bg-[#020C18] text-white p-8 font-sans ml-64">
        
        {/* --- Header Section --- */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-2">
              Welcome Back, Admin <span className="text-yellow-500">👋</span>
            </h1>
            <p className="text-gray-400 mt-1">Manage your library, books, members and transactions easily.</p>
          </div>
          <div className="text-right">
            <p className="text-gray-300 font-medium">Friday, 18 Oct 2026</p>
            <p className="text-gray-500 text-sm flex items-center justify-end gap-1 mt-1">
              <FaClock /> 10:24 AM
            </p>
          </div>
        </div>

        {/* --- Stats Cards (Hardcoded) --- */}
        <div className="grid grid-cols-4 gap-6 mb-6">
          {/* Card 1 */}
          <div className="bg-[#0A1828] p-5 rounded-xl border border-gray-800 flex items-center justify-between shadow-lg">
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-full bg-[#5C401A] text-[#F5B041] text-xl">
                <FaBook />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Total Books</p>
                <h3 className="text-2xl font-bold">{book.length}</h3>
                <p className="text-gray-500 text-xs mt-1">All books in library</p>
              </div>
            </div>
            <div className="bg-gray-800/50 p-1.5 rounded-full text-gray-400 hover:text-white cursor-pointer transition">
              <FaArrowRight className="text-xs" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#0A1828] p-5 rounded-xl border border-gray-800 flex items-center justify-between shadow-lg">
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-full bg-[#1A3F30] text-[#2ECC71] text-xl">
                <FaBookOpen />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Available Books</p>
                <h3 className="text-2xl font-bold">820</h3>
                <p className="text-gray-500 text-xs mt-1">Currently in stock</p>
              </div>
            </div>
            <div className="bg-gray-800/50 p-1.5 rounded-full text-gray-400 hover:text-white cursor-pointer transition">
              <FaArrowRight className="text-xs" />
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#0A1828] p-5 rounded-xl border border-gray-800 flex items-center justify-between shadow-lg">
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-full bg-[#4A1C24] text-[#E74C3C] text-xl">
                <FaBookReader />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Issued Books</p>
                <h3 className="text-2xl font-bold">380</h3>
                <p className="text-gray-500 text-xs mt-1">With students</p>
              </div>
            </div>
            <div className="bg-gray-800/50 p-1.5 rounded-full text-gray-400 hover:text-white cursor-pointer transition">
              <FaArrowRight className="text-xs" />
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-[#0A1828] p-5 rounded-xl border border-gray-800 flex items-center justify-between shadow-lg">
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-full bg-[#2B214D] text-[#9B59B6] text-xl">
                <FaUsers />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Total Members</p>
                <h3 className="text-2xl font-bold">{user.length}</h3>
                <p className="text-gray-500 text-xs mt-1">Students & Staff</p>
              </div>
            </div>
            <div className="bg-gray-800/50 p-1.5 rounded-full text-gray-400 hover:text-white cursor-pointer transition">
              <FaArrowRight className="text-xs" />
            </div>
          </div>
        </div>

        {/* --- Quick Actions (Hardcoded) --- */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {/* Action 1 */}
          <button className="flex items-center gap-4 p-4 rounded-xl text-left transition transform hover:scale-[1.02] bg-[#F5B041] text-black">
            <div className="bg-black/10 p-3 rounded-full text-xl">
              <FaPlus />
            </div>
            <div>
              <h4 className="font-bold">Add New Book</h4>
              <p className="text-xs opacity-80 mt-0.5">Add books to library</p>
            </div>
          </button>

          {/* Action 2 */}
          <button className="flex items-center gap-4 p-4 rounded-xl text-left transition transform hover:scale-[1.02] bg-[#D6EAF8] text-[#2874A6]">
            <div className="bg-black/10 p-3 rounded-full text-xl">
              <FaSignOutAlt />
            </div>
            <div>
              <h4 className="font-bold">Issue Book</h4>
              <p className="text-xs opacity-80 mt-0.5">Give to a student</p>
            </div>
          </button>

          {/* Action 3 */}
          <button className="flex items-center gap-4 p-4 rounded-xl text-left transition transform hover:scale-[1.02] bg-[#D5F5E3] text-[#239B56]">
            <div className="bg-black/10 p-3 rounded-full text-xl">
              <FaSignInAlt />
            </div>
            <div>
              <h4 className="font-bold">Return Book</h4>
              <p className="text-xs opacity-80 mt-0.5">Receive from student</p>
            </div>
          </button>

          {/* Action 4 */}
          <button className="flex items-center gap-4 p-4 rounded-xl text-left transition transform hover:scale-[1.02] bg-[#FADBD8] text-[#CB4335]">
            <div className="bg-black/10 p-3 rounded-full text-xl">
              <FaTrashAlt />
            </div>
            <div>
              <h4 className="font-bold">Delete Book</h4>
              <p className="text-xs opacity-80 mt-0.5">Remove from library</p>
            </div>
          </button>
        </div>

        {/* --- Recent Added Books (Hardcoded Cards) --- */}
        <div className="bg-[#0A1828] rounded-xl p-6 mb-8 border border-gray-800">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <FaBookOpen className="text-[#F5B041]" />
              <h2 className="text-lg font-semibold">Recently Added Books</h2>
            </div>
            <Link to="/books" className="text-sm text-[#F5B041] hover:underline flex items-center gap-1">
              View All <FaArrowRight className="text-xs" />
            </Link>
          </div>

          <div className="grid grid-cols-4 gap-4">
          
          
           {book.map((data)=>{
            return(
              <div  className="bg-[#04121E] p-4 rounded-lg border border-gray-800/50 flex gap-4 relative">
                   <FaEllipsisV className="absolute top-4 right-4 text-gray-500 cursor-pointer hover:text-white" />
              <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=100&h=150&fit=crop" alt="Clean Code" className="w-20 h-28 object-cover rounded-md shadow-md" />
              <div className="flex flex-col justify-between py-1">
                <div>
                  <h3 className="font-semibold text-sm leading-tight">{data.name}</h3>
                  <p className="text-gray-400 text-xs mt-1">{data.author}</p>
                <div>
                </div>
                  <span className="inline-block bg-gray-800 mt-3 text-gray-300 text-[10px] px-2 py-1 rounded-lg mb-2">{data.type}</span>
                  <p className="text-xs ml-1 text-gray-400">Stock:<span className="text-white font-medium">{data.stock} </span></p>
                </div>
              </div>
                </div>
            )
           })}
           

          </div>
        </div>

        {/* --- Bottom Section (Tables Hardcoded) --- */}
        <div className="grid grid-cols-2 gap-6">
          
          {/* Recent Transactions */}
          <div className="bg-[#0A1828] rounded-xl p-6 border border-gray-800">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <FaClock className="text-[#F5B041]" />
                <h2 className="text-lg font-semibold">Recent Transactions</h2>
              </div>
              <Link to="/transactions" className="text-sm text-[#F5B041] hover:underline flex items-center gap-1">
                View All <FaArrowRight className="text-xs" />
              </Link>
            </div>
            
            <table className="w-full text-left text-sm">
              <thead className="text-gray-400 border-b border-gray-800">
                <tr>
              
                  <th className="pb-3 font-medium">Book Title</th>
                  <th className="pb-3 font-medium">Member Name</th>
                  <th className="pb-3 font-medium">Type</th>
                  <th className="pb-3 font-medium">Date</th>
                  <th className="pb-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800/50">
           {history.map((data)=>{
              return(
            
                <tr className="hover:bg-white/5 transition">
                 
                  <td className="py-3">{data.bookname}</td>
                  <td className="py-3 text-gray-300">{data.name}</td>
                  <td className="py-3"><span className="px-2 py-1 rounded text-xs bg-yellow-900/30 text-yellow-500">{data.type}</span></td>
                  <td className="py-3 text-gray-400">{data.date.split('T')[0]}</td>
                  <td className="py-3"><span className="px-2 py-1 rounded-full text-[10px] font-medium bg-green-900/30 text-green-500">{data.status}</span></td>
                </tr>
            
               
              )
            })}
            </tbody>
            </table>
          </div>

          {/* Low Stock Books */}
          <div className="bg-[#0A1828] rounded-xl p-6 border border-gray-800">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-red-500 font-bold text-lg">!</span>
                <h2 className="text-lg font-semibold">Low Stock Books</h2>
              </div>
              <Link to="/stock" className="text-sm text-[#F5B041] hover:underline flex items-center gap-1">
                View All <FaArrowRight className="text-xs" />
              </Link>
            </div>
            
            <table className="w-full text-left text-sm">
              <thead className="text-gray-400 border-b border-gray-800">
                <tr>
               
                  <th className="pb-3 font-medium">Book Title</th>
                  <th className="pb-3 font-medium text-center">Available</th>
                  <th className="pb-3 font-medium text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800/50">
            
               {book.filter((data) => data.stock<=10).map((data)=>{
                 return(
                
                    <tr className="hover:bg-white/5 transition">
                   
                  <td className="py-3">{data.name}</td>
                  <td className="py-3 text-center">
                    <span className="bg-red-900/30 text-red-500 font-bold px-2 py-1 rounded text-xs">{data.stock}</span>
                  </td>
                  <td className="py-3 text-right">
                    <a href="/stock/add" className="bg-[#F5B041] hover:bg-yellow-500 text-black text-xs font-bold px-3 py-1.5 rounded transition">Add Stock</a>
                  </td>
                </tr>
                  
                )
               })}
                
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
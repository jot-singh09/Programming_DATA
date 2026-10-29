import React, { useEffect, useState } from "react";
import {
  FaBook,
  FaUser,
  FaCalendarAlt,
  FaCheckCircle,
  FaUndoAlt,
  FaInfoCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import axios from "axios";
const Issue = () => {
  const [user, setuser] = useState([]);
  const [book, setbook] = useState([]);
  const [bookid, setbookid] = useState("");
  const [userid, setuserid] = useState("");
  const [history, sethistory] = useState([]);
  useEffect(() => {
    const getdata = async () => {
      try {
        const res = await axios.get("http://localhost:5000/dashboard");
        setbook(res.data.book);
        setuser(res.data.user);
        sethistory(res.data.history);
      } catch {
        (err) => {
          console.log(err);
        };
      }
    };
    getdata();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-[#020C18] text-white p-8 font-sans ml-64">
        {/* --- Header Section --- */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <FaBook className="text-[#F5B041]" /> Issue Book
            </h1>
            <p className="text-gray-400 mt-2">
              Assign a book to a student or staff member.
            </p>
          </div>
          <Link
            to="/transactions"
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition text-sm font-medium"
          >
            <FaUndoAlt /> View History
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* --- Left Side: Issue Form --- */}
          <div className="col-span-2 bg-[#0A1828] rounded-xl p-8 border border-gray-800 shadow-lg">
            <h2 className="text-xl font-semibold mb-6 border-b border-gray-800 pb-4">
              Issue Details
            </h2>

            <form className="space-y-6">
              {/* Select Book */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Select Book
                </label>
                <div className="relative">
                  <FaBook className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <select
                    onChange={(e) => {
                      setbookid(e.target.value);
                    }}
                    className="w-full bg-[#04121E] text-white border border-gray-700 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:border-[#F5B041] appearance-none cursor-pointer"
                  >
                    <option value="None">-- Choose a book --</option>
                    {book.map((data) => {
                      return (
                        <div>
                          <option value={data._id}>
                            {data.name} (Available: {data.stock})
                          </option>
                        </div>
                      );
                    })}
                  </select>
                </div>
              </div>

              {/* Select Member */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Select Member
                </label>
                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <select
                    onChange={(e) => {
                      setuserid(e.target.value);
                    }}
                    className="w-full bg-[#04121E] text-white border border-gray-700 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:border-[#F5B041] appearance-none cursor-pointer"
                  >
                    <option value="">-- Choose a member --</option>
                    {user.map((data) => {
                      return (
                        <div>
                          <option value={data._id}>{data.name} </option>
                        </div>
                      );
                    })}
                  </select>
                </div>
              </div>

              {/* Dates Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Issue Date
                  </label>
                  <div className="relative">
                    <FaCalendarAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    <input
                      type="date"
                      className="w-full bg-[#04121E] text-white border border-gray-700 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:border-[#F5B041] [color-scheme:dark]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Due Date
                  </label>
                  <div className="relative">
                    <FaCalendarAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    <input
                      type="date"
                      className="w-full bg-[#04121E] text-white border border-gray-700 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:border-[#F5B041] [color-scheme:dark]"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4 border-t border-gray-800 flex justify-end">
                <button
                  type="submit"
                  className="bg-[#F5B041] hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-lg transition shadow-lg shadow-yellow-500/20 flex items-center gap-2"
                >
                  <FaCheckCircle /> Confirm Issue
                </button>
              </div>
            </form>
          </div>

          {/* --- Right Side: Summary / Info --- */}
          <div className="space-y-6">
            {/* Info Box */}
            <div className="bg-[#04121E] rounded-xl p-6 border border-blue-900/50">
              <h3 className="text-blue-400 font-semibold flex items-center gap-2 mb-3">
                <FaInfoCircle /> Issuing Rules
              </h3>
              <ul className="text-sm text-gray-400 space-y-2 list-disc list-inside">
                <li>Books can be kept for a maximum of 14 days.</li>
                <li>A fine of ₹10/day will be applied for late returns.</li>
                <li>Students can only issue 2 books at a time.</li>
              </ul>
            </div>

            {/* Preview Box */}
            <div className="bg-[#0A1828] rounded-xl p-6 border border-gray-800">
              <h3 className="text-lg font-semibold mb-4">Summary Preview</h3>

              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center pb-3 border-b border-gray-800">
                  <span className="text-gray-400 text-sm">Book Selected</span>
                 {book
  .filter((data) => data._id.includes(bookid)).map((data) => {
    return (
    <span key={data._id} className="font-semibold text-white">
      {data.name}
    </span>
  )
  })}
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-800">
                  <span className="text-gray-400 text-sm">Member Name</span>
                  <span className="font-semibold text-white">Priya Kaur</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-800">
                  <span className="text-gray-400 text-sm">Duration</span>
                  <span className="font-semibold text-white">14 Days</span>
                </div>

                <div className="bg-[#04121E] p-4 rounded-lg mt-2 flex items-center gap-3 text-sm text-green-500">
                  <FaCheckCircle className="text-lg" />
                  <p>Stock is available. Ready to issue.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Issue;

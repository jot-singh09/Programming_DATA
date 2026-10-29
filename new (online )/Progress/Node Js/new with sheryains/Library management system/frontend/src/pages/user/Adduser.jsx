import React, { useState } from "react";
import Navbar from "../../navbar/Navbar";
import book from "../../assets/book.svg";
import person from "../../assets/person.svg";
import layer from "../../assets/layer.svg";
import axios from 'axios';
import { FaUserPlus, FaInfoCircle, FaCheckCircle } from "react-icons/fa"; 

const Addbook = () => {
  const [name, setname] = useState("");
  const [course, setcourse] = useState("");
  const [About, setAbout] = useState("Hey! Student here.");
  const [email, setemail] = useState("");
  const [phoneno, setphoneno] = useState("");
  const [payment, setpayment] = useState("");
  const [loading, setLoading] = useState(false); // Added for UI feedback

  let createbook = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Added 'await' so the UI knows when the request finishes
      await axios.post('http://localhost:5000/add-student', {
        name, course, About, email, phoneno, payment
      });
      
      // Clear form on success
      setname(""); setcourse(""); setemail(""); setphoneno(""); setpayment("");
      alert("Student added successfully!");
      
    } catch (err) {
      console.log(err);
      alert("Failed to add student.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#020C18] text-white font-sans">
      <Navbar />
      
      {/* Main Content Area (Offset by ml-64 for the Navbar) */}
      <div className="ml-64 p-10 w-full max-w-5xl">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <FaUserPlus className="text-[#F5B041]" /> Add New Student
          </h1>
          <p className="text-gray-400 mt-2">Add a new student to your library system.</p>
        </div>

        <div className="flex gap-6">
          
          {/* --- Main Form Card --- */}
          <div className="bg-[#0A1828] border border-gray-800 rounded-xl p-8 shadow-lg flex-1">
            <form onSubmit={createbook} className="flex flex-col gap-6">
              
              {/* Grid for Inputs */}
              <div className="grid grid-cols-2 gap-6">
                
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <div className="bg-[#04121E] border border-gray-700 rounded-lg flex items-center px-3 py-2.5 focus-within:border-[#F5B041] transition-colors">
                    <img src={person} className="w-5 opacity-50" alt="person icon" />
                    <input
                      className="bg-transparent outline-none w-full px-3 text-white placeholder-gray-500"
                      type="text"
                      placeholder="e.g. Priya Kaur"
                      value={name}
                      onChange={(e) => setname(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Course */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Course <span className="text-red-500">*</span>
                  </label>
                  <div className="bg-[#04121E] border border-gray-700 rounded-lg flex items-center px-3 py-2.5 focus-within:border-[#F5B041] transition-colors">
                    <img src={book} className="w-5 opacity-50" alt="book icon" />
                    <input
                      className="bg-transparent outline-none w-full px-3 text-white placeholder-gray-500"
                      type="text"
                      placeholder="e.g. B.C.A"
                      value={course}
                      onChange={(e) => setcourse(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <div className="bg-[#04121E] border border-gray-700 rounded-lg flex items-center px-3 py-2.5 focus-within:border-[#F5B041] transition-colors">
                    <img src={layer} className="w-5 opacity-50" alt="icon" />
                    <input
                      className="bg-transparent outline-none w-full px-3 text-white placeholder-gray-500"
                      type="email"
                      placeholder="e.g. student@email.com"
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <div className="bg-[#04121E] border border-gray-700 rounded-lg flex items-center px-3 py-2.5 focus-within:border-[#F5B041] transition-colors">
                    <img src={layer} className="w-5 opacity-50" alt="icon" />
                    <input
                      className="bg-transparent outline-none w-full px-3 text-white placeholder-gray-500"
                      type="tel"
                      placeholder="e.g. 9876543210"
                      value={phoneno}
                      maxLength={10}
                      onChange={(e) => setphoneno(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Deposit */}
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Security Deposit (₹) <span className="text-red-500">*</span>
                  </label>
                  <div className="bg-[#04121E] border border-gray-700 rounded-lg flex items-center px-3 py-2.5 focus-within:border-[#F5B041] transition-colors">
                    <span className="text-gray-500 font-bold px-2">₹</span>
                    <input
                      className="bg-transparent outline-none w-full px-3 text-white placeholder-gray-500"
                      type="number"
                      placeholder="e.g. 500"
                      value={payment}
                      onChange={(e) => setpayment(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* About / Description */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  About Student
                </label>
                <div className="bg-[#04121E] border border-gray-700 rounded-lg p-3 focus-within:border-[#F5B041] transition-colors">
                  <textarea
                    className="bg-transparent text-white outline-none w-full h-24 resize-none placeholder-gray-500 text-sm"
                    placeholder="Enter notes about the student (optional)"
                    value={About}
                    onChange={(e) => setAbout(e.target.value)}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4 border-t border-gray-800">
                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full text-black bg-[#F5B041] hover:bg-yellow-500 disabled:opacity-50 py-3 rounded-lg font-bold transition-colors shadow-lg shadow-yellow-500/10 flex items-center justify-center gap-2"
                >
                  <FaCheckCircle />
                  Add Student to Library
                </button>
              </div>
            </form>
          </div>

          {/* --- Right Side Info Panel --- */}
          <div className="w-80">
            <div className="bg-[#04121E] border border-blue-900/50 rounded-xl p-6 sticky top-10">
              <h3 className="text-blue-400 font-semibold flex items-center gap-2 mb-4">
                <FaInfoCircle /> Student Registration Rules
              </h3>
              <ul className="text-sm text-gray-400 space-y-3 list-disc list-inside">
                <li>Ensure the <strong>Name</strong> matches the student's official ID card.</li>
                <li>The <strong>Course</strong> field helps categorize students (e.g., BCA, B.Tech, MCA).</li>
                <li>A valid <strong>Email</strong> is required for sending due-date reminders.</li>
                <li>The <strong>Security Deposit</strong> is refundable when the student leaves the library.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Addbook;
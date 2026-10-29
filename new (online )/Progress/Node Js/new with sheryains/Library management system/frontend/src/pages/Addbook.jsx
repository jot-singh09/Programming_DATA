import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import book from "../assets/book.svg";
import person from "../assets/person.svg";
import layer from "../assets/layer.svg";
import axios from 'axios';
import { FaPlusCircle, FaInfoCircle } from "react-icons/fa"; // Added some icons for the UI

const Addbook = () => {
  const [author, setauthor] = useState("");
  const [Booktitle, setBooktitle] = useState("");
  const [desc, setdesc] = useState("");
  const [copies, setcopies] = useState("");
  const [type, settype] = useState("");
  const [loading, setLoading] = useState(false); // Added for UI feedback

  let createbook = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Added 'await' here so the UI waits for the database to finish
      await axios.post('http://localhost:5000/add-book', {
        author, Booktitle, desc, copies, type
      });
      
      // Optional: Clear form after success
      setauthor(""); setBooktitle(""); setdesc(""); setcopies(""); settype("");
      alert("Book added successfully!");
      
    } catch (err) {
      console.log(err);
      alert("Failed to add book.");
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
            <FaPlusCircle className="text-[#F5B041]" /> Add New Book
          </h1>
          <p className="text-gray-400 mt-2">Add a new book to your library collection.</p>
        </div>

        <div className="flex gap-6">
          
          {/* --- Main Form Card --- */}
          <div className="bg-[#0A1828] border border-gray-800 rounded-xl p-8 shadow-lg flex-1">
            <form onSubmit={createbook} className="flex flex-col gap-6">
              
              {/* Grid for Top Inputs */}
              <div className="grid grid-cols-2 gap-6">
                
                {/* Book Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Book Title <span className="text-red-500">*</span>
                  </label>
                  <div className="bg-[#04121E] border border-gray-700 rounded-lg flex items-center px-3 py-2.5 focus-within:border-[#F5B041] transition-colors">
                    <img src={book} className="w-5 opacity-50" alt="book icon" />
                    <input
                      className="bg-transparent outline-none w-full px-3 text-white placeholder-gray-500"
                      type="text"
                      placeholder="e.g. Clean Code"
                      value={Booktitle}
                      onChange={(e) => setBooktitle(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Author */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Author <span className="text-red-500">*</span>
                  </label>
                  <div className="bg-[#04121E] border border-gray-700 rounded-lg flex items-center px-3 py-2.5 focus-within:border-[#F5B041] transition-colors">
                    <img src={person} className="w-5 opacity-50" alt="person icon" />
                    <input
                      className="bg-transparent outline-none w-full px-3 text-white placeholder-gray-500"
                      type="text"
                      placeholder="e.g. Robert C. Martin"
                      value={author}
                      onChange={(e) => setauthor(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Copies */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Available Copies <span className="text-red-500">*</span>
                  </label>
                  <div className="bg-[#04121E] border border-gray-700 rounded-lg flex items-center px-3 py-2.5 focus-within:border-[#F5B041] transition-colors">
                    <img src={layer} className="w-5 opacity-50" alt="layer icon" />
                    <input
                      className="bg-transparent outline-none w-full px-3 text-white placeholder-gray-500"
                      type="number"
                      placeholder="e.g. 10"
                      value={copies}
                      onChange={(e) => setcopies(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Type / Category <span className="text-red-500">*</span>
                  </label>
                  <div className="bg-[#04121E] border border-gray-700 rounded-lg flex items-center px-3 py-2.5 focus-within:border-[#F5B041] transition-colors">
                    <img src={layer} className="w-5 opacity-50" alt="layer icon" />
                    <input
                      className="bg-transparent outline-none w-full px-3 text-white placeholder-gray-500"
                      type="text"
                      placeholder="e.g. Programming"
                      value={type}
                      onChange={(e) => settype(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Description
                </label>
                <div className="bg-[#04121E] border border-gray-700 rounded-lg p-3 focus-within:border-[#F5B041] transition-colors">
                  <textarea
                    className="bg-transparent text-white outline-none w-full h-28 resize-none placeholder-gray-500 text-sm"
                    placeholder="Enter book description (optional)"
                    value={desc}
                    onChange={(e) => setdesc(e.target.value)}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4 border-t border-gray-800">
                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full text-black bg-[#F5B041] hover:bg-yellow-500 disabled:opacity-50 py-3 rounded-lg font-bold transition-colors shadow-lg shadow-yellow-500/10"
                >
                  Add Book to Library
                </button>
              </div>
            </form>
          </div>

          {/* --- Right Side Info Panel --- */}
          <div className="w-80">
            <div className="bg-[#04121E] border border-blue-900/50 rounded-xl p-6 sticky top-10">
              <h3 className="text-blue-400 font-semibold flex items-center gap-2 mb-4">
                <FaInfoCircle /> Tips for Adding Books
              </h3>
              <ul className="text-sm text-gray-400 space-y-3 list-disc list-inside">
                <li>Make sure the <strong>Book Title</strong> and <strong>Author</strong> match the physical cover exactly.</li>
                <li>Set the correct number of available copies so the issue system doesn't fail.</li>
                <li>Categories (Type) help students filter books later (e.g. Fiction, Science, Programming).</li>
                <li>Descriptions are optional but highly recommended for better search results.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Addbook;
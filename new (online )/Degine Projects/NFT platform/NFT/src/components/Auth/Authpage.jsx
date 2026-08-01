import Left from "./Left"
import RIght from "./RIght"
import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

const Authpage = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-[#F4F6FD] py-6 sm:py-10 px-4 md:px-8 flex flex-col items-center justify-center font-sans">
      <div className="max-w-6xl w-full flex justify-start mb-3">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-600 hover:text-[#6F2CEE] bg-white px-4 py-2 rounded-xl border border-slate-200/80 shadow-xs transition-all hover:-translate-x-0.5 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-[#6F2CEE]" />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl shadow-purple-900/10 grid grid-cols-1 lg:grid-cols-2 overflow-hidden border border-slate-100/80">
        <Left />
        <RIght />
      </div>
    </div>
  )
}

export default Authpage
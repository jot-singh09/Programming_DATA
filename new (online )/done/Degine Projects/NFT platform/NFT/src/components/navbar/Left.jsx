import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Left = () => {
  return (
    <Link to="/" className="flex items-center gap-2 cursor-pointer group">
      <div className="relative">
        <div className="absolute -inset-1 bg-linear-to-r from-purple-600 to-indigo-600 rounded-xl blur-sm opacity-19 group-hover:opacity-55 transition duration-300"></div>
        <img src={logo} className="relative size-10 object-contain" alt="HEXAWAY Logo" />
      </div>
      <span className="font-extrabold text-xl md:text-2xl  tracking-tight font-sans text-[#070A18]">
        HEXAWAY
      </span>
    </Link>
  );
};

export default Left;
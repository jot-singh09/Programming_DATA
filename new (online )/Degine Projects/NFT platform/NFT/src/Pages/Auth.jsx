import Authpage from "../components/Auth/Authpage";
import Navbar from "../components/navbar/Navbar";
import Down from "../components/Homepage/Down";

const Auth = () => {
  return (
    <div className="min-h-screen bg-[#F4F6FD] flex flex-col justify-between">
      <div>
        <Navbar />
        <Authpage />
      </div>
      <Down />
    </div>
  );
};

export default Auth;
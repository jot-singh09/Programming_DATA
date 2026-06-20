const Login = () => {
  function runreg() {
    let login = document.querySelector("#Login");
    let reg = document.querySelector("#Register");
    login.style.display = "none";
    reg.style.display = "block";
    
    let regbtn = document.querySelector("#regbtn");
    let logbtn = document.querySelector("#logbtn");
    regbtn.style.backgroundColor = "#6540E7";
    logbtn.style.backgroundColor = "transparent";
    logbtn.style.color = "#222";
    regbtn.style.color = "#fff";

    // Add hover effects for regbtn
    regbtn.onmouseover = function() {
        this.style.backgroundColor = "#5438C7"; // darker shade on hover
        this.style.color = "#fff";
        this.style.cursor = "pointer";
    };
    regbtn.onmouseout = function() {
        this.style.backgroundColor = "#6540E7"; // revert to original
        this.style.color = "#fff";
    };

    // Add hover effects for logbtn
    logbtn.onmouseover = function() {
        this.style.backgroundColor = "#f0f0f0"; // light hover effect
        this.style.color = "#6540E7";
        this.style.cursor = "pointer";
    };
    logbtn.onmouseout = function() {
        this.style.backgroundColor = "transparent";
        this.style.color = "#222";
    };
}

function runlog() {
    let login = document.querySelector("#Login");
    let reg = document.querySelector("#Register");
    login.style.display = "block";
    reg.style.display = "none";

    let regbtn = document.querySelector("#regbtn");
    let logbtn = document.querySelector("#logbtn");
    regbtn.style.backgroundColor = "transparent";
    logbtn.style.backgroundColor = "#6540E7";
    logbtn.style.color = "#fff";
    regbtn.style.color = "#222";

    // Add hover effects for logbtn
    logbtn.onmouseover = function() {
        this.style.backgroundColor = "#5438C7"; // darker shade on hover
        this.style.color = "#fff";
        this.style.cursor = "pointer";
    };
    logbtn.onmouseout = function() {
        this.style.backgroundColor = "#6540E7"; // revert to original
        this.style.color = "#fff";
    };

    // Add hover effects for regbtn
    regbtn.onmouseover = function() {
        this.style.backgroundColor = "#6540E7"; // light hover effect
        this.style.color = "#fff";
        this.style.cursor = "pointer";
    };
    regbtn.onmouseout = function() {
        this.style.backgroundColor = "transparent";
        this.style.color = "#222";
    };
}
  return (
    <div className="h-200  max-lg:flex max-lg:justify-center">
      <div className="bg-[#fff9] border border-gray-300 rounded-xl max-lg:w-[80%]">
        <div className="flex px-13 py-8 gap-5 max-lg:gap-4 max-lg:px-5">
          <a
            className="hover:bg-[#6540E7] hover:text-white bg-[#6540E7] border border-[#6540E7] rounded-lg py-2 px-13 text-white font-black max-lg:px-7"
            href="#Register" id="regbtn"
            onClick={runreg}
          >
            {" "}
            Register
          </a>
          <a
            className="hover:bg-[#6540E7] hover:text-white bg-transparent border border-[#6540E7] rounded-lg py-2 px-13 text-gray-900 font-black max-lg:px-7"
            href="#Login" id="logbtn"
            onClick={runlog}
          >
            {" "}
            Login
          </a>
        </div>

        {/* register */}
        <div id="Register">
          <div className="flex flex-col px-15 py-3 gap-2 max-lg:px-7">
            <label className="text-[18px] text-gray-700" htmlFor="username">
              Username
            </label>
            <input
              className="py-1.5 px-5 max-lg:px-2  border-gray-700 border rounded-lg  bg-white"
              type="text"
              placeholder="Enter the username"
              name="username"
              id="username"
            />
          </div>

          <div className="flex flex-col px-15 py-3 gap-2 max-lg:px-7">
            <label className="text-[18px] text-gray-700" htmlFor="username">
              Email
            </label>
            <input
              className="py-1.5 px-5 border-gray-700 border rounded-lg max-lg:px-2  bg-white"
              type="email"
              placeholder="Enter the email"
              name="email"
              id="email"
            />
          </div>

          <div className="flex flex-col px-15 py-3 gap-2 max-lg:px-7">
            <label className="text-[18px] text-gray-700" htmlFor="username">
              Referred By (Optional)
            </label>
            <input
              className="py-1.5 px-5 border-gray-700 border rounded-lg max-lg:px-2  bg-white"
              type="text"
              placeholder="Enter the referral link"
              name="referred"
              id="referred"
            />
          </div>

          <div className="flex flex-col px-15 py-3 gap-2 max-lg:px-7">
            <label className="text-[18px] text-gray-700" htmlFor="username">
              Wallet Address
            </label>
            <input
              className="py-1.5 px-5 border-gray-700 border rounded-lg bg-white"
              type="text"
              placeholder="0x.."
              name="walet"
              id="wallet"
            />
            <div className="py-7 flex flex-col gap-5 max-lg:px-10">
              <a
                className="bg-[#6540E7] self-center py-3 px-30 max-lg:px-25 max-lg:py-1  max-lg:text-sm border border-[#6540E7] rounded-md text-white text-[16px] "
                href="/dashboard"
              >
                Create Account
              </a>
              <a
                className="bg-transparent self-center py-3 max-lg:px-25 max-lg:py-1 max-lg:text-sm px-30 border border-gray-400 rounded-md text-black text-[16px]"
                href="/dashboard"
              >
                Connect Wallet
              </a>
            </div>
          </div>
        </div>

        {/* Login */}
        <div className="hidden" id="Login">
          <div className="flex flex-col px-15 py-3 gap-2 max-lg:px-7">
            <label className="text-[18px] text-gray-700" htmlFor="username">
              Wallet Adress
            </label>
            <input
              className="py-1.5 px-5 border-gray-700 border rounded-lg bg-white"
              placeholder="0x..."
              type="text"
              name="Wallet"
              id="Wallet"
            />
          </div>
          <div className="py-7 flex flex-col gap-5 max-lg:px-10">
            <a
              className="bg-[#6540E7] self-center py-3 px-35 max-lg:px-25 max-lg:py-3 border border-[#6540E7] rounded-md text-white text-[16px] "
              href="/dashboard"
            >
              Login
            </a>
            <a
              className="bg-transparent self-center py-3 max-lg:px-23.5 max-lg:py-1 max-lg:text-sm px-27 border border-gray-400 rounded-md text-black text-[16px]"
              href="/dashboard"
            >
              Connect Wallet
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

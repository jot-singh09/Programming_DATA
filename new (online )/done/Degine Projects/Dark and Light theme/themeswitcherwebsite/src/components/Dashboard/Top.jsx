import dark from '../../assets/DARK.png'
import light from '../../assets/LIGHT.png'
const Top = ({}) => {
  return (
    <div className="duration-1000 transition-all ease-in-out lg:flex justify-between max-md:py-12 w-full">
      <div className="flex flex-col gap-2 w-[50%] max-lg:gap-3.5">
        <div className="flex flex-col gap-4">

        <h1 className="text-[#8E0EFF] max-md:text-sm max-lg:px-2 bg-[#F0EAFE] px-5 py-0.5 w-fit rounded-full shadow-sm shadow-purple-400 dark:text-[#544784] dark:bg-[#131325] font-poppins dark:shadow-purple-950 duration-1000 transition-all font-semibold ease-in-out">
          BUILD FASTER, GROW SMATER
        </h1>
        <h1 className="text-6xl max-lg:text-4xl  font-black leading- dark:text-white text-black font-poppins">
          Digital Solutions That Drive Real{" "}
          <span className="text-[#6135F0] dark:text-[#834DF8]">
            Business Growth
          </span>
        </h1>
        </div>
        <div>
          <h1 className=" font-helvetica text-gray-800 dark:text-gray-100 lg:pl-1 lg:w-120 lg:text-lg">
            We help startups and enterprises build beautiful, scalable and high
            digital products.
          </h1>
          <div className="flex gap-2  lg:gap-5 items-center pt-5 text-black dark:text-white">
            <button className="bg-[#9114FF] px-5 py-2.5 hover:scale-110 active:scale-85 duration-500 transition-all ease-in-out font-medium rounded-md text-white lg:text-lg">Get Started</button>
            <button className="flex gap-3  border font-medium border-gray-300 dark:border-gray-600 px-5 py-2.5 rounded-md lg:text-lg hover:scale-110 active:scale-85 duration-500 transition-all ease-in-out items-center"> 
              Explore Services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-purple-600 dark:text-purple-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 8 16 12 12 16" />
                <line x1="8" y1="12" x2="16" y2="12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="dark:hidden block">
        <img src={light} className='lg:size-115' alt="" />
      </div>
      <div className='hidden dark:block'>
        <img src={dark} className='lg:size-115' alt="" />
      </div>
    </div>
  );
};

export default Top;

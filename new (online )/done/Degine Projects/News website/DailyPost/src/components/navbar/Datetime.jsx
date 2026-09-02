
const Datetime = () => {
  const currentDate = new Date();
    return (
    <div className="flex justify-between py-2 text-gray-700 dark:text-gray-300">
        <h1>{currentDate.toDateString()}</h1>  
        <div className="flex gap-3">
            <h1>Trending:</h1>
            <h1>#Election2026</h1>
            <h1>#IPL2026</h1>
            <h1>#AI</h1>
            <h1>#Markets</h1>
        </div>
        <div>
            <h1 className="flex  gap-2">New Delhi,  32°C  
                 <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    class="w-6 h-6"
    fill="none"
  >

    <circle cx="42" cy="22" r="9" fill="#FBBF24"/>

    
    <path
      d="M42 7v4M42 33v4M27 22h4M53 22h4
         M31.4 11.4l2.8 2.8M49.8 29.8l2.8 2.8
         M52.6 11.4l-2.8 2.8M34.2 29.8l-2.8 2.8"
      stroke="#FBBF24"
      stroke-width="3"
      stroke-linecap="round"
    />


    <path
      d="M16 45h30a10 10 0 0 0 0-20
         12 12 0 0 0-23-2
         9 9 0 0 0-7 22Z"
      fill="white"
      stroke="#94A3B8"
      stroke-width="4"
      stroke-linejoin="round"
    />
  </svg>
            </h1>
        </div>
    </div>
  )
}

export default Datetime
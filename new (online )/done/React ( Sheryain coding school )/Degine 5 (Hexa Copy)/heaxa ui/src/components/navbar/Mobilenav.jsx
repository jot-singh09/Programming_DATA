const Mobilenav = () => {

  return (
    <div>

    <div className="bg-white px-5 flex flex-col pt-17 gap-4 ">
      
      <h1 className="border-b border-b-[#222]"><a href="/trade">Trade</a> </h1>
      <h1 className="border-b border-b-[#222]"><a href="/create">Create</a> </h1>
      <h1 className="border-b border-b-[#222]"><a href="/assets">Assets</a> </h1>
      <h1 className="border-b border-b-[#222]"><a href="/teamtree">TeamTree</a> </h1>
        <a
          href="/auth"
          className="bg-[#5F2ECC] hover:text-black text-white px-5.5 py-1.5 border-[#5F2ECC] rounded-[5px] border-2 inline-block text-center no-underline"
        >
          Get Started
        </a>
    
    </div>
  
    </div>
  )
}

export default Mobilenav

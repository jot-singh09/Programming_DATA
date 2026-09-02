
const Mobile = ({navactive}) => {
     const URL = [
        {name : 'Home',path : '/'},
        {name : 'About us',path : '/aboutus'},
        {name : 'Shop',path : '/shop'},
        {name : 'Blog',path : '/blog'},
        {name : 'Contact',path : '/contact'},
    ]
    let path = location.pathname;
  return (
    <div className=" duration-1000 transition-all pt-3 pl-2 pr-2 ease-in-out">
        <div className={`flex flex-col gap-2 ${navactive}  duration-1000 transition-all ease-in-out overflow-hidden  `}>
            {URL.map((val)=>{
                return(
                    <div className={`${path === val.path ? 'bg-green-700/77 font-bold' : 'font-medium'} py-1 px-2 rounded-md ${path === val.path ? 'text-white':''}   `}>
                        <a href={val.path}>{val.name}</a>
                    </div>
                )
            })}
            <button className="bg-green-700 px-5 py-2 rounded-sm text-white font-medium font-poppins ">Book Conclusion</button>
        </div>
    </div>
  )
}

export default Mobile
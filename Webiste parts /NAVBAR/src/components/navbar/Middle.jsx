
const Middle = () => {
    const URL = [
        {name : 'Home',path : '/'},
        {name : 'About us',path : '/aboutus'},
        {name : 'Shop',path : '/shop'},
        {name : 'Blog',path : '/blog'},
        {name : 'Contact',path : '/contact'},
    ]
    let path = location.pathname;
   
  return (
    <div className="mr-15 flex gap-5 font-medium font-poppins">
    {URL.map((val,key)=>{
        return(
            <div key={key} className="">
                <a href={val.path}  className={`${path === val.path ? 'text-green-900' : 'text-black'} relative after:absolute after:bottom-0 after:left-0 tracking-wide after:h-0.5 after:bg-green-900 ${path === val.path ? ' after:w-full' : 'after:w-0'} after:transition-all after:duration-300 after:ease-in-out hover:after:w-full`} >{val.name}</a>
            </div>
        )
    })}
    </div>
  )
}

export default Middle
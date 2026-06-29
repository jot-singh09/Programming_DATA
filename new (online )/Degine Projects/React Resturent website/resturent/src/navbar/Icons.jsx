import search from '../assets/searchicon.svg'
import shop from '../assets/shop.svg'
import profile from '../assets/profile.svg'
const Icons = () => {
  return (
    <div className="px-7">
       <div className="text-white flex gap-5">
        <img className='w-6 max-md:hidden' src={search} alt="" />
        <img className='w-6' src={shop} alt="" />
        <img  className='w-6 max-md:hidden border-white rounded-full border-2'src={profile} alt="" />
        
      </div>
    </div>
  )
}

export default Icons

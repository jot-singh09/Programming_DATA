import Left from './Left'
import Mid from './Mid'
import Right from './Right'

const Navbar = () => {
  return (
    <div className='flex justify-between px-5 pt-1.5 max-md:px-2 border-b border-gray-200 pb-2 items-center  bg-[#FFFEFE]'>
        <Left/>
        <div className='max-md:hidden'>
        <Mid/>
        </div>
          
        <Right/>
    </div>
  )
}

export default Navbar
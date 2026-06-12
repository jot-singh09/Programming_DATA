import Buttons from './Buttons'
import Logo from './Logo'

const Navbar = () => {
  return (
    <div className='flex  bg-[#020C1A] items-center w-full justify-between py-2 '>
      <Logo/>
      <Buttons/>
    </div>
  )
}

export default Navbar

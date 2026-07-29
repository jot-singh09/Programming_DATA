import Navbar from '../../navbar/Navbar'
import Down from './Down'
import Middle from './Middle'
import Upper from './Upper'

const Cartpage = () => {
  return (
    <div className='bg-zinc-950 w-full h-full'>
      <Navbar/>
      <div className="py-5 max-md:px-4 px-10">

      <Upper/>
      <Middle/>
      <Down/>
      </div>
    </div>
  )
}

export default Cartpage

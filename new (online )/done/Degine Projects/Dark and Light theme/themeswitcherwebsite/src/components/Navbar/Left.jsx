import { useContext } from 'react'
import logo from '../../assets/logo.png'

const Left = ({theme}) => {
   
  return (
    <div className={`dark:text-white text-black ${theme}`}>
        <div className="flex items-center gap-1 max-lg:gap-0">
            <img src={logo} className='size-14 max-lg:size-10' alt="" />
            <h1 className="text-xl font-bold max-lg:text-lg">NexoCraft</h1>
        </div>
    </div>
  )
}

export default Left
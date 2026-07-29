import search from '../../assets/search.svg'
import wallet from '../../assets/wallet.svg'
import wallet2 from '../../assets/wallet-line.svg'
const Right = () => {
  return (
    <div  className='flex items-center gap-5'>
      <img src={search} className='w-6 max-md:hidden' alt="" />
     
      <button className='flex bg-[#5139E6] active:scale-110 active:bg-blue-900 max-md:text-sm text-white px-3 py-1.5 rounded-md gap-2 duration-500  transition-all ease-in-out hover:bg-blue-900'><img src={wallet} className='w-5 max-md:w-4' alt="" />Connect Wallet</button>
    </div>
  )
}

export default Right
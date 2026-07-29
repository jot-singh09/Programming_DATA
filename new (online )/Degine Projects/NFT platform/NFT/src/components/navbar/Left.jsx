import logo from '../../assets/logo.png'
const Left = () => {
  return (
    <div className='flex gap-1 items-center'>
        <img src={logo} className='w-8.5 max-md:w-7.5' alt="" />
        <h1 className='font-black text-2xl text-blue-950 max-md:text-lg'>HEXAWAY</h1>
    </div>
  )
}

export default Left
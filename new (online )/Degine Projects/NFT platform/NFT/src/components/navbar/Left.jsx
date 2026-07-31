import logo from '../../assets/logo.png'
const Left = () => {
  return (
    <div className='flex gap-2 items-center max-md:px-2 pt-1'>
        <img src={logo} className='w-8.5 max-md:w-7.5 md:mt-1  ' alt="" />
        <h1 className='font-semibold text-2xl text-gray-200 max-md:text-lg'>HEXAWAY</h1>
    </div>
  )
}

export default Left
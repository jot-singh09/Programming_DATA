import logo from '../../assets/logo.png'
const Logo = () => {
  return (
    <div>
      <div className='flex items-center px-5 max-lg:px-2'>
        <a href="#">

        <img className='w-45  ' src={logo} alt="logo" />
        </a>
        
      </div>
    </div>
  )
}

export default Logo

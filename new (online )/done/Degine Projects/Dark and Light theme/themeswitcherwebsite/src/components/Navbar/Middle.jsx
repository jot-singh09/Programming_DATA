
const Middle = () => {
  return (
    <div className="dark:text-white  text-gray-800 flex gap-6 pr-10 cursor-pointer">
        <p className="relative after:absolute after:h-0.5 after:w-full hover:after:w-full after:bg-purple-700 after:-bottom-1 dark:after:bg-[#8D10FD] after:left-0 after:duration-300 after:transition-all after:ease-in-out font-bold">
            Home
        </p>
        <a className="relative after:absolute after:h-0.5 after:w-0 hover:after:w-full after:bg-purple-700 after:-bottom-1 dark:after:bg-[#8D10FD] after:left-0 after:duration-300 after:transition-all after:ease-in-out font-medium">
            Features
        </a>
        <a className="relative after:absolute after:h-0.5 after:w-0 hover:after:w-full after:bg-purple-700 after:-bottom-1 dark:after:bg-[#8D10FD] after:left-0 after:duration-300 after:transition-all after:ease-in-out font-medium">
            Services
        </a>
        <a className="relative after:absolute after:h-0.5 after:w-0 hover:after:w-full after:bg-purple-700 after:-bottom-1 dark:after:bg-[#8D10FD] after:left-0 after:duration-300 after:transition-all after:ease-in-out font-medium">
            Pricing
        </a>
        <a className="relative after:absolute after:h-0.5 after:w-0 hover:after:w-full after:bg-purple-700 after:-bottom-1 dark:after:bg-[#8D10FD] after:left-0 after:duration-300 after:transition-all after:ease-in-out font-medium">
            Testimonlals
        </a>
        <a className="relative after:absolute after:h-0.5 after:w-0 hover:after:w-full after:bg-purple-700 after:-bottom-1 dark:after:bg-[#8D10FD] after:left-0 after:duration-300 after:transition-all after:ease-in-out font-medium">
            Contact
        </a>
    </div>
  )
}

export default Middle
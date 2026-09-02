
const Mid = () => {
    const URL = [
        {name:'Home'},
        {name:'India'},
        {name:'World'},
        {name:'Business'},
        {name:'Technology'},
        {name:'Sports'},
    ]
  return (
    <div className="flex gap-5 items-center tracking-wide" >
        {URL.map((val,key)=>{
            return(
                <div key={key}>
                    <h1 className={ `after:bg-blue-700  transition-all duration-1000 ease-in-out  after:absolute relative after:-bottom-0.5  after:h-0.5 after:scale-0 after:w-full after:origin-left ${val.name === 'Home' ? ' text-blue-700  after:ease-in-out font-semibold after:scale-100' :'hover:after:scale-100 after:duration-500 after:transition-all after:ease-in-out hover:text-blue-900 after:bg-blue-900 hover:dark:text-blue-700 dark:text-white dark:after:bg-blue-700' } transition-colors ease-in-out duration-500  after:left-0 after:px-5`}>{val.name}</h1>
                </div>
            )
        })}
    </div>
  )
}

export default Mid
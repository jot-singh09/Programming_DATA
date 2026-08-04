const Card = (props) => {

    console.dir(props);
  return (
    //   <div className="card">
        <div className="show">

          <img src="https://images.unsplash.com/photo-1776053517196-19a14579d82b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExMHxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8" alt="" />
        <h1>{props.user}</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, nesciunt.</p>
        <button>Get Started</button>

        </div>
       

    //   </div>
    
  )
}

export default Card

import Card from "./components/Card"
import Navbar from "./components/Navbar"

const App = () => {
  const name='karan'
  return (
    <div>
        <Navbar/>
    <div className="heading">
      <Card />
      <h1>hello world</h1>
      <h1>Hello {name} This is my first react app</h1>
    </div>
    </div>
  )
}

export default App

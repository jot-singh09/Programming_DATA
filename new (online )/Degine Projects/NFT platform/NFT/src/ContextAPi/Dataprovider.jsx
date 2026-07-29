// import { Datauseprovider } from "./Datauseprovider";
import { Datauseprovider } from "./Datauseprovider"
const Dataprovider = (props) => {
    let name ='karan'
  return (
   <div>
      <Datauseprovider.Provider value={{name}}>
        {props.children}
      </Datauseprovider.Provider>
    </div> 
  )
}

export default Dataprovider
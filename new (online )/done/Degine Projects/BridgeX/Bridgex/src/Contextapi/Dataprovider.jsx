import { Datauseprovider } from "./Datauseprovider"

const Dataprovider = (props) => {
    let name ='karn'
  return (
    <div>
        <Datauseprovider value={{name}}>
            {props.children}
        </Datauseprovider>
    </div>
  )
}

export default Dataprovider
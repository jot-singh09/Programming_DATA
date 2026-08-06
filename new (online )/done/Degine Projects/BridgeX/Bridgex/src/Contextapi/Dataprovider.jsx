import { Datauseprovider } from "./Datauseprovider"

const Dataprovider = (props) => {
    const token =[
      {'name':'USDT','price':97},
      {'name':'ETH','price':13000}
    ]
  return (
    <div>
        <Datauseprovider value={{token}}>
            {props.children}
        </Datauseprovider>
    </div>
  )
}

export default Dataprovider
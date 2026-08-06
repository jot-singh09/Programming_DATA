import React, { useContext } from 'react'
import { Datauseprovider } from '../Contextapi/Datauseprovider'

const Selectpopup = () => {
    const {token} = useContext(Datauseprovider)
  return (
    <div className='absolute top-[50%] left-[50%]'>
        <div className='flex flex-col border'>

        {token.map((key,val)=>{
            return(
                <div className='text-black'>
                    <h1>asdlkfjl</h1>
                </div>
            )
        })}
        </div>
    </div>
  )
}

export default Selectpopup
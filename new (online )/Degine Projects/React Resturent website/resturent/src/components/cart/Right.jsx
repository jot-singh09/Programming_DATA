import RDown from "./RDown"
import RUpper from "./RUpper"

const Right = () => {
  return (
    <div className="py-6.5 xl:pl-15 items-center flex flex-col gap-7">
     <RUpper/>
      <RDown/>
    </div>
  )
}

export default Right

import Left from "./Left"
import Right from "./Right"

const Down = () => {
  return (
    <div className="flex gap-3 max-xl:gap-1 bg-zinc-950">
      <Left/>
      <Right/>
    </div>
  )
}

export default Down

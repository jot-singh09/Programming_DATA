import { useEffect, useState } from "react";

const App = () => {
  const [maping, Setmaping] = useState([]);
  const [title, settitle] = useState('')
useEffect(() => {
  const storage  = localStorage.getItem('task')
  if (storage==null){
    localStorage.setItem('task',0)
    
  }
  else {
    const paras = JSON.parse(storage)
    Setmaping(paras)
  }
  
  
}, [])


const addtask = (e)=>{
    e.preventDefault();
  // const storage  = localStorage.getItem('task')
  // const paras = JSON.parse(storage)
  const updatetask = [...maping, title];
    Setmaping(updatetask);
    localStorage.setItem('task', JSON.stringify(updatetask));
    settitle(''); // ✅ Clear input after adding
  }

  const dlt = (e)=>{
    const val = [...maping]
    if ('karan'!= val){
      
      console.log(maping)
    }
  }
  return (
    
    
    
    <div className="px-15 py-10 flex flex-col gap-5">
    <div>
      <form action="submit">
        <input className="border px-3 py-2 " type="text" name="title" id="title" placeholder="Enter the title of todo" value={title} onChange={(event)=>{
          settitle(event.target.value)
        }} />

        <button onClick={addtask}>submit</button>
      </form>
    </div>

       {maping.length === 0 ? (<div><h1>No To-Do added</h1></div>) : (maping.map((val,key)=>{
        return(

          <div key={key}>
          <h1 onClick={(e)=>{
            dlt(key)
          }}>{val}</h1>
        </div>
        )
       })) }
    </div>
  );
};

export default App;

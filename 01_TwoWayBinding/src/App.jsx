import { useState } from 'react'
import './App.css'

function App() {

  //const data = "" => React not read this type of variables // change happen directly on real-dom
  
  // React change in virtual dom then change happen in Real dom
  const [data, setData] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
    setData("")
  }

  return (
    <>
    <form onSubmit={submitHandler}>
      <label htmlFor="">Name : </label>
      <input type="text"
      placeholder='Enter Name'
      value={data}
      onChange={(e) => {
        setData(e.target.value)
        console.log(e.target.value)
      }}      
      />
      <button>Submit</button>   
    
    </form>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'

function App() {

  const [Data, setData] = useState("")
  const [Todo, setTodo] = useState([])

  function handleSubmit(e) {
     e.preventDefault()
     setTodo([... Todo, { Data }])

     setData("")
     console.log(Todo)
  }

  function deleteHandler(i) {
    let copyTodo = [...Todo]
    copyTodo.splice(i, 1)
    setTodo(copyTodo)
  }

  let renderTask = <h2>Task</h2>

 renderTask =  Todo.map((t, i) => {
    return (
        <li key={i}>
          <div>
          <h5>{t.Data}</h5>
          </div>
          <button onClick={() => deleteHandler(i)} >Delete</button>
        </li>        
    )
  })

  return (
    <>
     <h1>TODO</h1>

     <form onSubmit={handleSubmit}>
      <input 
      type="text"
      placeholder='Enter Task'
      value={Data}
      onChange={(e) => setData(e.target.value)}
      />
      <button type="submit">Add</button>
     </form>

     <hr />

     <div>
      <ul>
        {renderTask}
      </ul>
     </div>
    </>
  )
}

export default App

import { useState } from 'react'
import axios from 'axios'

import './App.css'

function App() {

  const [Images, setImages] = useState([])

  const getImages = async () => {
    try {
      const response = await axios.get('https://picsum.photos/v2/list')
      const data = response.data
      setImages(data)
      console.log(Images) // Array of Object
      
    } catch (error) {
      console.log("Error in Fetching Data :", error)      
    }
    
  } 
  

  return (
    <>
    <button onClick={getImages}>Get Images</button>
    <div>
      <div>{Images.map((ele, i) => {
      return <img 
      key={i}
      src={ele.download_url}
      height={500}
      width={500} 
      alt="Images"
      />

    })}
    </div>
      
    </div>    
     
    </>
  )
}

export default App

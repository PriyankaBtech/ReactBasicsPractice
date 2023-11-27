import { useState, useEffect } from 'react';
import axios from 'axios';

function ListItems() {
  const [items, setItems] = useState([])

  useEffect(() => {
    // Fetch data from an API and update the state
    axios.get('https://picsum.photos/v2/list')
      .then(response => {
        // data in response.data
        setItems(response.data)
        console.log(response.data)
      })
      .catch(error => {
        console.error('Error fetching data:', error)
      })
  }, [])

  return (
    <>
      <ul>
        {items.map(ele => (
          // return the JSX elements from the map function
          <li key={ele.id}>{ele.author}</li>
        ))}
      </ul>
    </>
  )
}

export default ListItems

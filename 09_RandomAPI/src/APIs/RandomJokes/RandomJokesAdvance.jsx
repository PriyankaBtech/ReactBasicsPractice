import React, { useEffect, useState } from 'react'

function RandomJokesAdvance() {
    const [jokes, setJokes] = useState(null)

    const fetchJokes = () =>  {
        fetch("https://api.chucknorris.io/jokes/random")
        .then(response => response.json())
        .then(data => setJokes(data))
        .catch(error => console.error('Error fetching data:', error))
    }

    useEffect(() => {
        fetchJokes()
    }, [])

  return (
    <>
      {jokes && (
        <div key={jokes.id}>
          <h3>{jokes.value}</h3>
        </div>
      )}

      <button onClick={fetchJokes}>Get Jokes</button>
    </>
  )
}

export default RandomJokesAdvance
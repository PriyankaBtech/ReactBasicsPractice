import React, { useEffect, useState } from 'react';

function RandomJokes() {
  const [joke, setJoke] = useState(null);

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then(response => response.json())
      .then(data => setJoke(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      {joke && (
        <div key={joke.id}>
          <h3>{joke.value}</h3>
        </div>
      )}
    </>
  );
}

export default RandomJokes;

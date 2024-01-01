import React, { useEffect, useState } from 'react'

function CatImages() {

    const [images, setImages] = useState([])

    useEffect(() => {
        fetch("https://api.thecatapi.com/v1/images/search")
        .then(response => response.json())
        .then(data => setImages(data))
        .catch(error => console.error("Error in fetching data", error))

    }, [])


  return (
    <>
      <h2>Handle Cat Image API</h2>
      {images.length > 0 && (
        images.map(image => (
          <div key={image.id}>
            <img
              src={image.url}
              height={500}
              width={500}
              alt="Cat Image"
            />
          </div>
        ))
      )}
    </>
  )
}

export default CatImages
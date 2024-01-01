import React, { useEffect, useState } from 'react'

function CatImagesAdvance() {

    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchCatImages = () => {
        setLoading(true)
        
        fetch("https://api.thecatapi.com/v1/images/search")
        .then(response => response.json())
        .then(data => {
            setImages(data)
            setLoading(false)
        })
        .catch(error => {
            console.error("Error in Fetching Data", error)
            setLoading(false)
        })
    }

    useEffect(() => {
        fetchCatImages()
    }, [])


  return (
   <>
   <h2>Handle Cat Image API</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
      images.length > 0 && (
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
      )
    )}

   <button onClick={fetchCatImages}>Click</button>
   </>
  )
}

export default CatImagesAdvance
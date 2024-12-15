import React, { useEffect, useState } from 'react'
import { BreedsSelect } from './BreedsSelect'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([])
  const [selectedBreed, setSelectedBreed] = useState('retriever')
  const [dogImages, setDogImages] = useState([])

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then(data => setBreeds(Object.keys(data.message)))
  }, [])

  const handleBreedChange = breed => {
    setSelectedBreed(breed)
  }

  const fetchDogImages = () => {
    if (!selectedBreed) {
      alert('犬種を選択してください！')
      return
    }
    fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/12`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then(data => {
        if (data.status === 'success') {
          setDogImages(data.message.slice(1, 12))
        }
      })
      .catch(error => {
        console.error('画像取得エラー:', error)
      })
  }
  useEffect(() => {
    fetchDogImages()
  }, [])

  return (
    <div>
      <h1>犬種一覧</h1>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <BreedsSelect
          breeds={breeds}
          selectedBreed={selectedBreed}
          onBreedChange={handleBreedChange}
        />
        <button onClick={fetchDogImages}>表示</button>
      </div>

      {dogImages.length > 0 && (
        <div>
          <h2>{selectedBreed}の画像</h2>
          <ul
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '10px',
            }}
          >
            {dogImages.map(image => (
              <li key={image} style={{ listStyle: 'none' }}>
                <img src={image} style={{ width: 200 }} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

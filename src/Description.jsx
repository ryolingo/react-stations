import { DogImage } from './DogImage'
import { useState } from 'react'

export const Description = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg',
  )

  const fetchDogImage = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        setDogUrl(data.message)
      })
      .catch(error => {
        console.error('Error:', error)
      })
  }
  return (
    <>
      <p>犬の画像を表示するサイトです</p>
      <DogImage url={dogUrl} />
      <button onClick={fetchDogImage} className="button">
        更新
      </button>
    </>
  )
}

// DO NOT DELETE

import './App.css'
import { useState } from 'react'
import { Header } from './Header'
import { Description } from './Description'
import { DogListContainer } from './DogListContainer'
/**
 * @type {() => JSX.Element}
 */

export const App = () => {
  const [url, setUrl] = useState(
    'https://images.dog.ceo/breeds/hound-english/n02089973_1132.jpg',
  )

  const DogImageChange = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        if (data && data.message) {
          setUrl(data.message)
        }
      })
      .catch(error => console.error('Error fetching dog image:', error))
  }

  return (
    <div>
      <Header />
      {/* <Description url={url} DogImageChange={DogImageChange} /> */}
      <DogListContainer />
    </div>
  )
}

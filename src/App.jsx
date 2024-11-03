// DO NOT DELETE

import './App.css'
import React, { useState, useEffect } from 'react'
/**
 * @type {() => JSX.Element}
 */

const header = ' Dog アプリ'

export const App = () => {
  const [dogImage, setDogImage] = useState('')

  useEffect(() => {
    const fetchDoGImage = async () => {
      const response = await fetch('https://dog.ceo/api/breeds/image/random')
      const data = await response.json()
      setDogImage(data.message)
    }
    fetchDoGImage()
  }, [])

  return (
    <>
      <header>
        <div>
          <h2>{header}</h2>
        </div>
      </header>
      <div>
        <p>犬の画像を表示するサイトです</p>
        <img src={dogImage} alt="dog" />
      </div>
    </>
  )
}

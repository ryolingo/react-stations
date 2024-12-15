import React from 'react'

export const BreedsSelect = ({ breeds, selectedBreed, onBreedChange }) => {
  return (
    <select value={selectedBreed} onChange={e => onBreedChange(e.target.value)}>
      <option value="">-- 犬種を選択してください --</option>
      {breeds.map(breed => (
        <option key={breed} value={breed}>
          {breed}
        </option>
      ))}
    </select>
  )
}

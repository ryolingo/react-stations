export const DogImage = ({ imageUrl }) => {
  return (
    <img
      src={imageUrl || 'https://via.placeholder.com/300'} // デフォルト画像を設定
      alt="A random dog"
      style={{ width: '300px', height: 'auto' }}
    />
  )
}

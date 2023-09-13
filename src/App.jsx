import { useState } from 'react'
import './App.css'
import { EmojiPickerInput } from './components/EmojiPickerInput'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <EmojiPickerInput></EmojiPickerInput>
    </>
  )
}

export default App

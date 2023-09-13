import React from 'react'
import './buttons.css'

export const Emojibutton = ({ emoji, onClick }) => {

    const handleOnClick = () => {
        onClick(emoji)
    }
  return (
    <>
    <button onClick={handleOnClick}>{emoji.symbol}</button>
    </>
  )
}

import React from "react";
import { forwardRef } from "react";
import { data as emojiList } from "./data";
import { useState } from "react";
import { EmojiSearch } from "./EmojiSearch";
import { Emojibutton } from "./Emojibutton";

///forwardRef sirve para recibir refs desde otros componentes

export const EmojiPicker = forwardRef((props, inputRef) => {
  const [isOpen, setIsOpen] = useState(false);
  const [emojis, setEmojis] = useState([...emojiList]);

  const handleOnSearch = (e) => {
    const q = e;

    if (!!q) {
      ///!! == exists
      const search = emojiList.filter((emoji) => {
        return emoji.name.toLowerCase().includes(q);
      }); ///includes es que incluya el caracter, no que sea igual a el string completo
      setEmojis(search);
    } else {
      setEmojis(emojiList);
    }
  };

  const handleClickOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleOnClickEmoji = (emoji) => {
    const cursorPos = inputRef.current.selectionStart ///retorna la posicion del cursor
    const text = inputRef.current.value
    const prev = text.slice(0, cursorPos) ///parte el texto desde la pos 0 hasta donde este el cursor de escritura
    const next = text.slice(cursorPos) ///desde el cursor hasta el final
    inputRef.current.value = prev + emoji.symbol + next
    ///coloca el emoji donde este el cursor luego dde clickear el boton de dicho emoji
    inputRef.current.focus() 
    
}

  return (
    <>
      <div>
        <button onClick={handleClickOpen}>🎡</button>
        {isOpen ? (
          <div>
            <EmojiSearch onSearch={handleOnSearch} />
            <div>
              {emojis.map((emoji) => (
                <div>
                  <Emojibutton key={emoji.symbol} emoji={emoji} onClick={handleOnClickEmoji}/>
                </div>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
});



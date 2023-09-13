import React from "react";
import { EmojiPicker } from "./EmojiPicker";
import { useRef } from "react";

///useRef es un estilo de getelement de js
///asignamos una etiqueta html a una variable para manipularla

export const EmojiPickerInput = () => {
  const inputRef = useRef(null);
  return (
    <div>
      <input ref={inputRef} />
      <EmojiPicker ref={inputRef} />
    </div>
  );
}

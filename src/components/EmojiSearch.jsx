import React from "react";
import { useState } from "react";

export const EmojiSearch = ({ onSearch }) => {
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
    onSearch(e.target.value);
  }

  return (
    <>
      <input type="text" onChange={handleChange} value={value} />
    </>
  );
};

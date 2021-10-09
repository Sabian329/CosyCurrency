import React, { useState } from "react";
import { UnmountClosed } from "react-collapse";

const CurrencyDrop = ({ value, mid }) => {
  const [inputValue, setInputValue] = useState("");
  const [IsOpen, setIsOpen] = useState(false);

  return (
    <div>
      <p>how much money you want to exchange</p>
      <UnmountClosed isOpened={IsOpen}>
        <input type="number" onChange={(e) => setInputValue(e.target.value)} />
        <div>{Math.round((inputValue / value) * 100) / 100}</div>
      </UnmountClosed>
      {IsOpen ? (
        <button onClick={() => setIsOpen(!IsOpen)}>close</button>
      ) : (
        <button onClick={() => setIsOpen(!IsOpen)}>open</button>
      )}
    </div>
  );
};

export default CurrencyDrop;

import React, { useState } from "react";
import { UnmountClosed } from "react-collapse";
import { arrows } from "../../Constants/arrows";
import { Wrapper } from "./CurrencyDropStyled";

const CurrencyDrop = ({ value, short }) => {
  const [inputValue, setInputValue] = useState("");
  const [IsOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <p>add to favourites</p>
      <button>add</button>
      <p>exchange</p>
      <UnmountClosed isOpened={IsOpen}>
        <input
          type="number"
          placeholder="PLN"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div>{Math.round((inputValue / value) * 100) / 100 + ` ` + short}</div>
      </UnmountClosed>
      {IsOpen ? (
        <button
          onClick={() => setIsOpen(!IsOpen)}
        >{`close${arrows.up}`}</button>
      ) : (
        <button
          onClick={() => setIsOpen(!IsOpen)}
        >{`open${arrows.down}`}</button>
      )}
    </Wrapper>
  );
};

export default CurrencyDrop;

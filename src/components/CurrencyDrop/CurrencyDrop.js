import React, { useState } from "react";
import { UnmountClosed } from "react-collapse";
import { arrows } from "../../Constants/arrows";
import { Wrapper } from "./CurrencyDropStyled";

const CurrencyDrop = ({ value, short, favourites, setFavourites }) => {
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const deleteFav = () => favourites.filter((crr) => crr !== short);
  return (
    <Wrapper>
      <p>add to favourites</p>
      <button
        onClick={() =>
          favourites.includes(short)
            ? setFavourites(deleteFav())
            : setFavourites([...favourites, short])
        }
      >
        add
      </button>
      <p>exchange</p>
      <UnmountClosed isOpened={isOpen}>
        <input
          type="number"
          placeholder="PLN"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div>{Math.round((inputValue / value) * 100) / 100 + ` ` + short}</div>
      </UnmountClosed>
      {isOpen ? (
        <button
          onClick={() => setIsOpen(!isOpen)}
        >{`close${arrows.up}`}</button>
      ) : (
        <button
          onClick={() => setIsOpen(!isOpen)}
        >{`open${arrows.down}`}</button>
      )}
    </Wrapper>
  );
};

export default CurrencyDrop;

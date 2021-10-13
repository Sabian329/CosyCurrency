import React, { useState } from "react";
import { UnmountClosed } from "react-collapse";
import { arrows } from "../../Constants/arrows";
import { FavBtn, OpenBtn, OptionWrapper, Wrapper } from "./CurrencyDropStyled";
import heart from "../../Asets/heart2.png";
import heartRed from "../../Asets/heart3.png";

const CurrencyDrop = ({ value, short, favourites, setFavourites }) => {
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const deleteFav = () => favourites.filter((crr) => crr !== short);

  return (
    <Wrapper>
      <OptionWrapper>
        <p>add to favourites</p>
        <FavBtn
          onClick={() =>
            favourites.includes(short)
              ? setFavourites(deleteFav())
              : setFavourites([...favourites, short])
          }
        >
          {favourites.includes(short) ? (
            <img src={heartRed} alt="heart" />
          ) : (
            <img src={heart} alt="heart" />
          )}
        </FavBtn>
      </OptionWrapper>
      <OptionWrapper>
        <p>exchange</p>
        {isOpen ? (
          <OpenBtn
            onClick={() => setIsOpen(!isOpen)}
          >{`close${arrows.up}`}</OpenBtn>
        ) : (
          <OpenBtn
            onClick={() => setIsOpen(!isOpen)}
          >{`open${arrows.down}`}</OpenBtn>
        )}
      </OptionWrapper>
      <UnmountClosed isOpened={isOpen}>
        <input
          type="number"
          placeholder="PLN"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div>{Math.round((inputValue / value) * 100) / 100 + ` ` + short}</div>
      </UnmountClosed>
    </Wrapper>
  );
};

export default CurrencyDrop;

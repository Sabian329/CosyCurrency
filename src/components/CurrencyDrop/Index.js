import React, { useState } from "react";
import { UnmountClosed } from "react-collapse";
import { arrows } from "../../Constants/arrows";
import { FavBtn, OpenBtn, OptionWrapper, Wrapper } from "./Styled";
import heart from "../../Asets/heart22.png";
import heartRed from "../../Asets/heart33.png";
import { CalculateDrop } from "../CalculateDrop/Index";

export const CurrencyDrop = ({
  value,
  short,
  favourites,
  setFavourites,
  isEnglish,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const deleteFav = () => favourites.filter((crr) => crr !== short);

  return (
    <Wrapper>
      <OptionWrapper>
        <p>{isEnglish ? "add to favourites" : "dodaj do ulubionych"}</p>
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
        <p>{isEnglish ? "exchange" : "wymiana"}</p>
        {isOpen ? (
          <OpenBtn onClick={() => setIsOpen(!isOpen)}>
            {isEnglish ? `close${arrows.up}` : `zamknij${arrows.up}`}
          </OpenBtn>
        ) : (
          <OpenBtn onClick={() => setIsOpen(!isOpen)}>
            {isEnglish ? `open${arrows.down}` : `otwórz${arrows.down}`}
          </OpenBtn>
        )}
      </OptionWrapper>
      <UnmountClosed isOpened={isOpen}>
        <CalculateDrop
          value={value}
          short={short}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      </UnmountClosed>
    </Wrapper>
  );
};

import React, { useEffect, useState } from "react";
import {
  CrrItemWrapper,
  Item,
  ItemValue,
  ItemShort,
  Flag,
  MainWrapper,
  ItemsWrapper,
} from "../CurrencyWrapper/Styled";
import { names } from "../../Constants/currencyNames";
import moneylogo from "../../Asets/moneylogo.png";
import { UnmountClosed } from "react-collapse";
import { CurrencyDrop } from "../CurrencyDrop/Index";
export const CurrencyItem = ({
  favourites,
  setFavourites,
  currency,
  code: short,
  mid: value,
  isEnglish,
  index,
  ind,
  setInd,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => setIsOpen(ind === index ? true : false), [ind]);

  const swithDrop = () => {
    setInd(index);
    setIsOpen(!isOpen);
  };

  return (
    <MainWrapper onClick={(proxy) => proxy.stopPropagation()}>
      <CrrItemWrapper onClick={() => swithDrop()}>
        {short.slice(0, -2) === "X" ? (
          <Flag src={moneylogo} alt="Flag" />
        ) : (
          <Flag
            src={`https://www.countryflags.io/${short.slice(
              0,
              -1
            )}/flat/64.png`}
            alt="Flag"
          />
        )}
        <ItemsWrapper>
          <ItemShort>{short}</ItemShort>
          {isEnglish ? (
            <Item>{names[short.toLowerCase()]}</Item>
          ) : (
            <Item>{currency}</Item>
          )}
        </ItemsWrapper>
        <ItemsWrapper>
          <ItemValue>{Math.round(value * 10000) / 10000}</ItemValue>
          <ItemValue>PLN</ItemValue>
        </ItemsWrapper>
      </CrrItemWrapper>
      <UnmountClosed isOpened={isOpen}>
        <CurrencyDrop
          isEnglish={isEnglish}
          favourites={favourites}
          setFavourites={setFavourites}
          value={value}
          short={short}
        />
      </UnmountClosed>
    </MainWrapper>
  );
};
import React, { useEffect, useState } from "react";
import {
  CrrItemWrapper,
  Item,
  ItemValue,
  ItemShort,
  Flag,
  MainWrapper,
  ItemsWrapper,
  ItemsWrapperPln,
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
  id,
  currentId,
  setCurrentId,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => setIsOpen(currentId === id ? true : false), [currentId, id]);

  const swithDrop = () => {
    setIsOpen(!isOpen);
    setCurrentId(id);
  };

  return (
    <MainWrapper onClick={(proxy) => proxy.stopPropagation()}>
      <CrrItemWrapper onClick={() => swithDrop()}>
        {short.slice(0, -2) === "X" ? (
          <Flag src={moneylogo} alt="Flag" />
        ) : (
          <Flag
            src={`https://flagicons.lipis.dev/flags/4x3/${short
              .toLowerCase()
              .slice(0, -1)}.svg`}
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
        <ItemsWrapperPln>
          <ItemValue>{`${Math.round(value * 10000) / 10000} PLN`}</ItemValue>
        </ItemsWrapperPln>
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

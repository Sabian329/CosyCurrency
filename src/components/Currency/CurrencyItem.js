import React, { useState } from "react";
import {
  CrrItemWrapper,
  Item,
  ItemValue,
  ItemShort,
  SmallWrapper,
  Flag,
  DropWrapper,
  MainWrapper,
} from "./CurrncyStyled";
import { names } from "../../Constants/currencyNames";
import moneylogo from "../../Asets/moneylogo.png";
import { UnmountClosed } from "react-collapse";
import CurrencyDrop from "../CurrencyDrop/CurrencyDrop";
const CurrencyItem = ({ currency, code: short, mid: value, isEnglish }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MainWrapper>
      <CrrItemWrapper onClick={() => setIsOpen(!isOpen)}>
        {short == "XDR" ? (
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
        <SmallWrapper>
          <ItemShort>{short}</ItemShort>
          {isEnglish ? (
            <Item>{names[short.toLowerCase()]}</Item>
          ) : (
            <Item>{currency}</Item>
          )}
        </SmallWrapper>
        <SmallWrapper>
          <ItemValue>{Math.round(value * 10000) / 10000}</ItemValue>
          <ItemValue>PLN</ItemValue>
        </SmallWrapper>
      </CrrItemWrapper>
      <UnmountClosed isOpened={isOpen}>
        <DropWrapper>
          <CurrencyDrop value={value} />
        </DropWrapper>
      </UnmountClosed>
    </MainWrapper>
  );
};
export default CurrencyItem;

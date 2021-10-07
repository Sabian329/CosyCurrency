import React from "react";
import styled from "styled-components";
import { CrrItemWrapper, Item, ItemValue, ItemShort } from "./CurrncyStyled";
import { names } from "../../Constants/currencyNames";
import moneylogo from "../../Asets/moneylogo.png";

const CurrencyItem = ({ currency, code: short, mid: value, isEnglish }) => (
  <CrrItemWrapper>
    {short == "XDR" ? (
      <img src={moneylogo} />
    ) : (
      <img
        src={`https://www.countryflags.io/${short.slice(0, -1)}/flat/64.png`}
      />
    )}
    <div>
      <ItemShort>{short}</ItemShort>
      {isEnglish ? (
        <Item>{names[short.toLowerCase()]}</Item>
      ) : (
        <Item>{currency}</Item>
      )}
    </div>
    <div>
      <ItemValue>{Math.round(value * 10000) / 10000}</ItemValue>
      <ItemValue>PLN</ItemValue>
    </div>
  </CrrItemWrapper>
);
export default CurrencyItem;

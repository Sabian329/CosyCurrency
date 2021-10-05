import React from "react";
import styled from "styled-components";
import { CrrItemWrapper, Item, ItemValue, ItemShort } from "./CurrncyStyled";
import { names } from "../../Constants/currencyNames";
import moneylogo from "../../Asets/moneylogo.png";

const CurrencyItem = ({ code: short, mid: value }) => (
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
      <Item>{names[short.toLowerCase()]}</Item>
    </div>
    <div>
      <ItemValue>{Math.round(value * 10000) / 10000}</ItemValue>
      <ItemValue>PLN</ItemValue>
    </div>
  </CrrItemWrapper>
);
export default CurrencyItem;

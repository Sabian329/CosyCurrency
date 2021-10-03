import React from "react";
import styled from "styled-components";
import { CrrItemWrapper, CrrItemP } from "./CurrncyStyled";
import { names } from "../../Constants/currencyNames";

const CurrencyItem = ({ index, currency, code: short, mid: value }) => (
  <CrrItemWrapper>
    <CrrItemP>{index}</CrrItemP>
    <CrrItemP>{names[short.toLowerCase()]}</CrrItemP>
    <CrrItemP> {short}</CrrItemP>
    <CrrItemP>{`${value} PLN`}</CrrItemP>

    <img
      src={`https://www.countryflags.io/${short.slice(0, -1)}/shiny/64.png`}
      alt="Flag"
    />
  </CrrItemWrapper>
);
export default CurrencyItem;

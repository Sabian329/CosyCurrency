import React from "react";
import styled from "styled-components";

const CurrencyItem = ({ index, currency, code, mid }) => (
  <>
    <CrrItemWrapper>
      <CrrItemP>{index}</CrrItemP>
      <CrrItemP>{currency}</CrrItemP>
      <CrrItemP> {code}</CrrItemP>
      <CrrItemP>{`${mid} PLN`}</CrrItemP>

      <img
        src={`https://www.countryflags.io/${code.slice(0, -1)}/shiny/64.png`}
        alt="Flag"
      />
    </CrrItemWrapper>
  </>
);
export default CurrencyItem;

const CrrItemWrapper = styled.div`
  background-color: rgb(100, 106, 221);
  margin-bottom: 1rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  -webkit-box-shadow: 5px 9px 17px -5px #000000;
  box-shadow: 5px 9px 17px -5px #000000;
`;
const CrrItemP = styled.p`
  margin-left: 2rem;
`;

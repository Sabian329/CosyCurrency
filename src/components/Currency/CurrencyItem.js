import React from "react";
import styled from "styled-components";

const CurrencyItem = ({ currency, code, mid }) => (
  <>
    <CrrItemWrapper>
      <CrrItemP>{currency}</CrrItemP>
      <CrrItemP> {code}</CrrItemP>
      <CrrItemP>{mid}</CrrItemP>
    </CrrItemWrapper>
  </>
);
export default CurrencyItem;

const CrrItemWrapper = styled.div`
  background-color: rgb(100, 106, 221);
  margin-bottom: 1rem;
  padding: 1rem;
  display: flex;
  -webkit-box-shadow: 5px 9px 17px -5px #000000;
  box-shadow: 5px 9px 17px -5px #000000;
`;
const CrrItemP = styled.p`
  margin-left: 2rem;
`;

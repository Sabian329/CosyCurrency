import React from "react";
import styled from "styled-components";
import CurrencyItem from "./CurrencyItem";

const CurrencyWrapper = (props) => (
  <>
    <CrrWrapper>
      {props.items.map((item) => (
        <CurrencyItem key={item.mid} {...item} />
      ))}
    </CrrWrapper>
  </>
);

export default CurrencyWrapper;

const CrrWrapper = styled.div`
  padding: 1rem;
`;

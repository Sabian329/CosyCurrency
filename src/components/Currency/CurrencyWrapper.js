import React from "react";
import { CrrWrapper } from "./CurrncyStyled";
import CurrencyItem from "./CurrencyItem";

const CurrencyWrapper = ({ items, isEnglish }) => (
  <CrrWrapper>
    {items.map((item, index) => (
      <CurrencyItem
        isEnglish={isEnglish}
        index={index + 1}
        key={item.mid}
        {...item}
      />
    ))}
  </CrrWrapper>
);

export default CurrencyWrapper;

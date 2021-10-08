import React, { useEffect, useState } from "react";
import { CrrItemWrapper, Item, ItemValue, ItemShort } from "./CurrncyStyled";
import { names } from "../../Constants/currencyNames";
import moneylogo from "../../Asets/moneylogo.png";
const CurrencyItem = ({ currency, code: short, mid: value, isEnglish }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  return (
    <CrrItemWrapper onClick={() => setIsOpen(!isOpen)}>
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
};
export default CurrencyItem;

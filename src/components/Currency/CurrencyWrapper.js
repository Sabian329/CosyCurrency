import React, { useEffect, useState } from "react";
import { CrrWrapper } from "./CurrncyStyled";
import CurrencyItem from "./CurrencyItem";

const CurrencyWrapper = ({ items, isEnglish }) => {
  const [favourites, setFavourites] = useState(
    localStorage.getItem("favs") ? JSON.parse(localStorage.getItem("favs")) : []
  );

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favourites));
    console.log(favourites);
  }, [favourites]);

  return (
    <CrrWrapper>
      {items.map((item, index) => (
        <CurrencyItem
          favourites={favourites}
          setFavourites={setFavourites}
          isEnglish={isEnglish}
          index={index + 1}
          key={item.mid}
          {...item}
        />
      ))}
    </CrrWrapper>
  );
};

export default CurrencyWrapper;

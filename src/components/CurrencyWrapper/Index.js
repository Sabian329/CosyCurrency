import React, { useState } from "react";
import { CrrWrapper } from "./Styled";
import { CurrencyItem } from "../CurrencyItem/Index";
import { NoFavourites } from "../NoFavourites/Index";

export const CurrencyWrapper = ({
  items,
  isEnglish,
  favourites,
  setFavourites,
  isFiltered,
  filterApi,
  setIsFiltered,
}) => {
  const [ind, setInd] = useState();
  let filterLeng = filterApi().length;

  const closeByWrapper = () => {
    setInd(0);
  };

  return (
    <CrrWrapper onClick={() => closeByWrapper()}>
      {isFiltered ? (
        filterLeng === 0 ? (
          <NoFavourites isEnglish={isEnglish} setIsFiltered={setIsFiltered} />
        ) : (
          filterApi().map((item, index) => (
            <CurrencyItem
              ind={ind}
              setInd={setInd}
              favourites={favourites}
              setFavourites={setFavourites}
              isEnglish={isEnglish}
              index={index + 1}
              key={item.mid}
              {...item}
            />
          ))
        )
      ) : (
        items.map((item, index) => (
          <CurrencyItem
            ind={ind}
            setInd={setInd}
            favourites={favourites}
            setFavourites={setFavourites}
            isEnglish={isEnglish}
            index={index + 1}
            key={item.mid}
            {...item}
          />
        ))
      )}
    </CrrWrapper>
  );
};
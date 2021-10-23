import React, { useEffect, useState } from "react";
import { CrrWrapper } from "./Styled";
import { CurrencyItem } from "../CurrencyItem/Index";
import { NoFavourites } from "../NoFavourites/Index";
import { NoResult } from "../NoResult/Index";

export const CurrencyWrapper = ({
  isEnglish,
  favourites,
  setFavourites,
  isFiltered,
  filterApi,
  setIsFiltered,
  showSearch,
}) => {
  const [currentId, setCurrentId] = useState(NaN);
  let filterLeng = filterApi().length;

  useEffect(() => isFiltered && setCurrentId(NaN), [isFiltered]);

  const closeByWrapper = () => {
    setCurrentId(NaN);
  };

  return (
    <CrrWrapper onClick={() => closeByWrapper()}>
      {isFiltered ? (
        filterLeng === 0 ? (
          <NoFavourites isEnglish={isEnglish} setIsFiltered={setIsFiltered} />
        ) : (
          filterApi().map((item) => (
            <CurrencyItem
              setCurrentId={setCurrentId}
              currentId={currentId}
              favourites={favourites}
              setFavourites={setFavourites}
              isEnglish={isEnglish}
              key={item.mid}
              {...item}
            />
          ))
        )
      ) : showSearch().length ? (
        showSearch().map((item) => (
          <CurrencyItem
            setCurrentId={setCurrentId}
            currentId={currentId}
            favourites={favourites}
            setFavourites={setFavourites}
            isEnglish={isEnglish}
            key={item.mid}
            {...item}
          />
        ))
      ) : (
        <NoResult isEnglish={isEnglish} />
      )}
    </CrrWrapper>
  );
};

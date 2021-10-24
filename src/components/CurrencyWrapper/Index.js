import React, { useEffect, useState } from "react";
import { CrrWrapper } from "./Styled";
import { CurrencyItem } from "../CurrencyItem/Index";
import { NoFavourites } from "../NoFavourites/Index";
import { NoResult } from "../NoResult/Index";
import { Loading } from "../Loading/Index";

export const CurrencyWrapper = ({
  isEnglish,
  favourites,
  setFavourites,
  isFiltered,
  filterApi,
  setIsFiltered,
  showSearch,
  inputValue,
}) => {
  const [currentId, setCurrentId] = useState(NaN);
  let filterLeng = filterApi().length;

  useEffect(
    () => showSearch().length === 0 && setCurrentId(NaN),
    [showSearch, currentId]
  );

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
      ) : inputValue ? (
        <NoResult isEnglish={isEnglish} />
      ) : (
        <Loading />
      )}
    </CrrWrapper>
  );
};

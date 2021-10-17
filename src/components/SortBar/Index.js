import React, { useState } from "react";
import { Wrapper } from "./Styled";
import { arrows } from "../../Constants/arrows";

export const SortBar = ({
  sortBy,
  isEnglish,
  sortDirect,
  setIsFiltered,
  isFiltered,
  closeModalFunc,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [arrow, setArrow] = useState(false);

  let ar = sortDirect ? arrows.down : arrows.up;
  let empty = "";

  const nameFunc = () => {
    setArrow(true);
    sortBy("code");
  };
  const valueFunc = () => {
    setArrow(false);
    sortBy("mid");
  };

  const closeAndFilter = () => {
    closeModalFunc();
    setIsFiltered(!isFiltered);
  };

  return (
    <Wrapper>
      <button onClick={() => nameFunc()}>
        {isEnglish ? (
          <p>{`sort by name${arrow ? ar : empty}`}</p>
        ) : (
          <p>{`sortój według nazwy${arrow ? ar : empty}`}</p>
        )}
      </button>
      <button onClick={() => valueFunc()}>
        {isEnglish ? (
          <p>{`sort by value${arrow ? empty : ar}`}</p>
        ) : (
          <p>{`sortuj według wartości${arrow ? empty : ar}`}</p>
        )}
      </button>
      <button onClick={() => closeAndFilter()}>
        {isFiltered ? (
          isEnglish ? (
            <p>show all</p>
          ) : (
            <p>wszystkie</p>
          )
        ) : isEnglish ? (
          <p>favourites</p>
        ) : (
          <p>ulubione</p>
        )}
      </button>
    </Wrapper>
  );
};

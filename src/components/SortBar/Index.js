import React, { useState } from "react";
import { Wrapper } from "./Styled";
import { arrows } from "../../Constants/arrows";

export const SortBar = ({
  sortBy,
  isEnglish,
  sortDirect,
  setIsFiltered,
  isFiltered,
  closeModal,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [arrow, setArrow] = useState(false);

  let ar = sortDirect ? arrows.down : arrows.up;
  let empty = "";

  const sortByName = () => {
    setArrow(true);
    sortBy("code");
  };
  const sortByValue = () => {
    setArrow(false);
    sortBy("mid");
  };

  const closeModalByFilter = () => {
    closeModal();
    setIsFiltered(!isFiltered);
  };

  return (
    <Wrapper>
      <button onClick={() => sortByName()}>
        {isEnglish ? (
          <p>{`sort by name${arrow ? ar : empty}`}</p>
        ) : (
          <p>{`sortuj według nazwy${arrow ? ar : empty}`}</p>
        )}
      </button>
      <button onClick={() => sortByValue()}>
        {isEnglish ? (
          <p>{`sort by value${arrow ? empty : ar}`}</p>
        ) : (
          <p>{`sortuj według wartości${arrow ? empty : ar}`}</p>
        )}
      </button>
      <button onClick={() => closeModalByFilter()}>
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

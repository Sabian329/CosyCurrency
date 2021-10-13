import React, { useState } from "react";
import { UnmountClosed } from "react-collapse";
import { Wrapper, BtnsWrapper } from "./SortBarStyled";
import { arrows } from "../../Constants/arrows";

const SortBar = ({
  sortBy,
  isEnglish,
  sortDirect,
  setIsFiltered,
  isFiltered,
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
  return (
    <Wrapper>
      {isEnglish ? (
        <p onClick={() => setIsOpen(!isOpen)}>{`more${
          isOpen ? arrows.up : arrows.down
        }`}</p>
      ) : (
        <p onClick={() => setIsOpen(!isOpen)}>{`więcej${
          isOpen ? arrows.up : arrows.down
        }`}</p>
      )}
      <UnmountClosed isOpened={isOpen}>
        <BtnsWrapper>
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
          <button onClick={() => setIsFiltered(!isFiltered)}>
            {isFiltered ? (
              isEnglish ? (
                <p>show all</p>
              ) : (
                <p>pokaż wszystkie</p>
              )
            ) : isEnglish ? (
              <p>show favourites</p>
            ) : (
              <p>pokaż ulubione</p>
            )}
          </button>
        </BtnsWrapper>
      </UnmountClosed>
    </Wrapper>
  );
};

export default SortBar;

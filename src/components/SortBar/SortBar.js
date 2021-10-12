import React, { useState } from "react";
import { UnmountClosed } from "react-collapse";
import { Wrapper, BtnsWrapper } from "./SortBarStyled";
import { arrows } from "../../Constants/arrows";

const SortBar = ({ sortBy, isEnglish, sortDirect }) => {
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
        <p onClick={() => setIsOpen(!isOpen)}>{`sort by${
          isOpen ? arrows.up : arrows.down
        }`}</p>
      ) : (
        <p onClick={() => setIsOpen(!isOpen)}>{`sotuj według${
          isOpen ? arrows.up : arrows.down
        }`}</p>
      )}
      <UnmountClosed isOpened={isOpen}>
        <BtnsWrapper>
          <button onClick={() => nameFunc()}>
            {isEnglish ? (
              <p>{`name${arrow ? ar : empty}`}</p>
            ) : (
              <p>{`nazwy${arrow ? ar : empty}`}</p>
            )}
          </button>
          <button onClick={() => valueFunc()}>
            {isEnglish ? (
              <p>{`value${arrow ? empty : ar}`}</p>
            ) : (
              <p>{`wartości${arrow ? empty : ar}`}</p>
            )}
          </button>
          <button>{isEnglish ? <p>favourites</p> : <p>ulubione</p>}</button>
        </BtnsWrapper>
      </UnmountClosed>
    </Wrapper>
  );
};

export default SortBar;

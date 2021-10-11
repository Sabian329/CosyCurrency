import React, { useState } from "react";
import { UnmountClosed } from "react-collapse";
import { Wrapper, BtnsWrapper } from "./SortBarStyled";
import { arrows } from "../../Constants/arrows";

const SortBar = ({
  sortByValue,
  sortByName,
  isEnglish,
  sortDirect,
  sortDirectV,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  let ar = sortDirectV ? arrows.down : arrows.up;
  let aro = sortDirect ? arrows.down : arrows.up;

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
          <button onClick={sortByName}>
            {isEnglish ? <p>{`name${aro}`}</p> : <p>{`nazwy${ar}`}</p>}
          </button>
          <button onClick={sortByValue}>
            {isEnglish ? <p>{`value${ar}`}</p> : <p>{`wartości${ar}`}</p>}
          </button>
        </BtnsWrapper>
      </UnmountClosed>
    </Wrapper>
  );
};

export default SortBar;

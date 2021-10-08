import React, { useState } from "react";
import { UnmountClosed } from "react-collapse";
import { Wrapper, BtnsWrapper } from "./SortBarStyled";
import { arrows } from "../../Constants/arrows";

const SortBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      {props.isEnglish ? (
        <p onClick={() => setIsOpen(!isOpen)}>{`sort by${
          isOpen ? arrows.up : arrows.down
        }`}</p>
      ) : (
        <p onClick={() => setIsOpen(!isOpen)}>{`sotuj wedłóg${
          isOpen ? arrows.up : arrows.down
        }`}</p>
      )}
      <UnmountClosed isOpened={isOpen}>
        <BtnsWrapper>
          <button onClick={props.native}>
            {props.isEnglish ? <p>default</p> : <p>domyślnie</p>}
          </button>

          <button onClick={props.sortingByName}>
            {props.isEnglish ? <p>name</p> : <p>nazwy</p>}
          </button>

          <button onClick={props.sortingByValue}>
            {props.isEnglish ? <p>value</p> : <p>wartości</p>}
          </button>
        </BtnsWrapper>
      </UnmountClosed>
    </Wrapper>
  );
};

export default SortBar;

import React from "react";
import { Wrapper } from "./SortBarStyled";

const SortBar = (props) => (
  <Wrapper>
    {props.isEnglish ? <p>Sort by</p> : <p>Sortuj według</p>}

    <button onClick={props.native}>
      {props.isEnglish ? <p>default</p> : <p>domyślnie</p>}
    </button>

    <button onClick={props.sortingByName}>
      {props.isEnglish ? <p>name</p> : <p>nazwy</p>}
    </button>

    <button onClick={props.sortingByValue}>
      {props.isEnglish ? <p>value</p> : <p>wartości</p>}
    </button>
  </Wrapper>
);

export default SortBar;

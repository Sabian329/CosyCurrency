import React from "react";
import { Wrapper, Container, WrapperMain } from "./SortBarStyled";

const SortBar = (props) => (
  <>
    <WrapperMain>
      {props.isEnglish ? <p>Sort by</p> : <p>Sortuj według</p>}
      <Wrapper>
        <Container>
          {props.isEnglish ? <p>NBP</p> : <p>Narodowy Bank Polski</p>}
          <input
            type="radio"
            name="radio"
            defaultChecked="true"
            onClick={props.native}
          />
          <span></span>
        </Container>
        <Container>
          {props.isEnglish ? <p>name</p> : <p>nazwy</p>}
          <input type="radio" name="radio" onClick={props.sortingByName} />
          <span></span>
        </Container>
        <Container>
          {props.isEnglish ? <p>value</p> : <p>wartości</p>}
          <input type="radio" name="radio" onClick={props.sortingByValue} />
          <span></span>
        </Container>
      </Wrapper>
    </WrapperMain>
  </>
);

export default SortBar;

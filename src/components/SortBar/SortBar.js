import React from "react";
import styled from "styled-components";
import { Wrapper, Container, WrapperMain } from "./SortBarStyled";

const SortBar = (props) => (
  <WrapperMain>
    <p>Sort by</p>
    <Wrapper>
      <Container>
        Native
        <input
          type="radio"
          name="radio"
          defaultChecked="true"
          onClick={props.native}
        />
        <span></span>
      </Container>
      <Container>
        Name
        <input type="radio" name="radio" onClick={props.sortingByName} />
        <span></span>
      </Container>
      <Container>
        Value
        <input type="radio" name="radio" onClick={props.sortingByValue} />
        <span></span>
      </Container>
    </Wrapper>
  </WrapperMain>
);

export default SortBar;

import React from "react";
import styled from "styled-components";
import HeaderNav from "../Header/HeaderNav";
import SortDropDown from "../SortDropDown/SortDropDown";
import ModalNav from "./ModalNav";
import { Wrapper, CloseButton, MainWrapper } from "./ModalStyle";

const Modal = ({ closeModalFunc }) => (
  <MainWrapper onClick={closeModalFunc}>
    <Wrapper onClick="event.stopPropagation();">
      <div>No money !?</div>
      <ModalNav />
      <p>Sort By</p>
      <SortDropDown />
    </Wrapper>
  </MainWrapper>
);

export default Modal;

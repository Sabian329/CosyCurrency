import React from "react";
import styled from "styled-components";

import ModalNav from "./ModalNav";
import { Wrapper, CloseButton, MainWrapper } from "./ModalStyle";

const Modal = ({ closeModalFunc }) => (
  <MainWrapper onClick={closeModalFunc}>
    <Wrapper onClick="event.stopPropagation();">
      <div>No money !?</div>
      <ModalNav />
    </Wrapper>
  </MainWrapper>
);

export default Modal;

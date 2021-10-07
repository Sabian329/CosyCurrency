import React from "react";
import LangButton from "../LangButton/LangButton";
import SortBar from "../SortBar/SortBar";
import { Wrapper, MainWrapper } from "./ModalStyle";

const Modal = ({
  closeModalFunc,
  isEnglish,
  lang,
  native,
  sortingByName,
  sortingByValue,
}) => (
  <MainWrapper onClick={closeModalFunc}>
    <Wrapper onClick={(proxy) => proxy.stopPropagation()}>
      <div>No money !?</div>
      <LangButton isEnglish={isEnglish} lang={lang} />
      <SortBar
        isEnglish={isEnglish}
        native={native}
        sortingByValue={sortingByValue}
        sortingByName={sortingByName}
      />
    </Wrapper>
  </MainWrapper>
);

export default Modal;

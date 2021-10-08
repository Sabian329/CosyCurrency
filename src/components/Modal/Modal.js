import React from "react";
import LangButton from "../LangButton/LangButton";
import SortBar from "../SortBar/SortBar";
import { Wrapper, MainWrapper, LangButtonWrapper } from "./ModalStyle";

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
      <LangButtonWrapper>
        <LangButton isEnglish={isEnglish} lang={lang} />
      </LangButtonWrapper>
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

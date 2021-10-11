import React from "react";
import LangButton from "../LangButton/LangButton";
import SortBar from "../SortBar/SortBar";
import { Wrapper, MainWrapper, LangButtonWrapper } from "./ModalStyle";

const Modal = ({
  closeModalFunc,
  isEnglish,
  lang,
  sortByValue,
  sortByName,
  sortDirect,
  sortDirectV,
}) => (
  <MainWrapper onClick={closeModalFunc}>
    <Wrapper onClick={(proxy) => proxy.stopPropagation()}>
      <LangButtonWrapper>
        <LangButton isEnglish={isEnglish} lang={lang} />
      </LangButtonWrapper>
      <SortBar
        isEnglish={isEnglish}
        sortByValue={sortByValue}
        sortByName={sortByName}
        sortDirect={sortDirect}
        sortDirectV={sortDirectV}
      />
    </Wrapper>
  </MainWrapper>
);

export default Modal;

import React from "react";
import LangButton from "../LangButton/LangButton";
import SortBar from "../SortBar/SortBar";
import { Wrapper, MainWrapper, LangButtonWrapper } from "./ModalStyle";

const Modal = ({ closeModalFunc, isEnglish, lang, sortBy, sortDirect }) => (
  <MainWrapper onClick={closeModalFunc}>
    <Wrapper onClick={(proxy) => proxy.stopPropagation()}>
      <LangButtonWrapper>
        <LangButton isEnglish={isEnglish} lang={lang} />
      </LangButtonWrapper>
      <SortBar isEnglish={isEnglish} sortBy={sortBy} sortDirect={sortDirect} />
    </Wrapper>
  </MainWrapper>
);

export default Modal;

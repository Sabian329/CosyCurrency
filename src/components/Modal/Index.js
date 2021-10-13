import React from "react";
import LangButton from "../LangButton/LangButton";
import SortBar from "../SortBar/SortBar";
import { Wrapper, MainWrapper, LangButtonWrapper } from "./Styled";

export const Modal = ({
  closeModalFunc,
  isEnglish,
  lang,
  sortBy,
  sortDirect,
  isFiltered,
  setIsFiltered,
}) => (
  <MainWrapper onClick={closeModalFunc}>
    <Wrapper onClick={(proxy) => proxy.stopPropagation()}>
      <LangButtonWrapper>
        <LangButton isEnglish={isEnglish} lang={lang} />
      </LangButtonWrapper>
      <SortBar
        isFiltered={isFiltered}
        setIsFiltered={setIsFiltered}
        isEnglish={isEnglish}
        sortBy={sortBy}
        sortDirect={sortDirect}
      />
    </Wrapper>
  </MainWrapper>
);
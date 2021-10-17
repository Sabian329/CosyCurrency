import React from "react";
import { LangButton } from "../LangButton/Index";
import { SortBar } from "../SortBar/Index";
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
        closeModalFunc={closeModalFunc}
        isFiltered={isFiltered}
        setIsFiltered={setIsFiltered}
        isEnglish={isEnglish}
        sortBy={sortBy}
        sortDirect={sortDirect}
      />
    </Wrapper>
  </MainWrapper>
);

import React from "react";
import { LangButton } from "../LangButton/Index";
import { SortBar } from "../SortBar/Index";
import { Wrapper, MainWrapper, LangButtonWrapper } from "./Styled";

export const Modal = ({
  closeModal,
  isEnglish,
  lang,
  sortBy,
  sortDirect,
  isFiltered,
  setIsFiltered,
  search,
}) => (
  <MainWrapper onClick={closeModal}>
    <Wrapper onClick={(proxy) => proxy.stopPropagation()}>
      <LangButtonWrapper>
        <LangButton isEnglish={isEnglish} lang={lang} />
      </LangButtonWrapper>
      <SortBar
        closeModal={closeModal}
        isFiltered={isFiltered}
        setIsFiltered={setIsFiltered}
        isEnglish={isEnglish}
        sortBy={sortBy}
        sortDirect={sortDirect}
        search={search}
      />
    </Wrapper>
  </MainWrapper>
);

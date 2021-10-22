import React from "react";
import logo from "../../Asets/logoN.png";
import {
  HelloBtn,
  LogoWrapper,
  SortBarWrapper,
  Wrapper,
  LangButtonWrapper,
} from "./Styled";
import { LangButton } from "../LangButton/Index";
import { SortBar } from "../SortBar/Index";
export const Header = ({
  isEnglish,
  sortBy,
  lang,
  sortDirect,
  openModal,
  setIsFiltered,
  isFiltered,
  closeModal,
  search,
}) => (
  <Wrapper>
    <LogoWrapper onClick={() => setIsFiltered(false)}>
      <p>Cosy Currency</p>
      <img src={logo} alt="cosyCurrency Logo" />
    </LogoWrapper>
    <SortBarWrapper>
      <SortBar
        isFiltered={isFiltered}
        setIsFiltered={setIsFiltered}
        isEnglish={isEnglish}
        sortBy={sortBy}
        sortDirect={sortDirect}
        closeModal={closeModal}
        search={search}
      />
    </SortBarWrapper>
    <HelloBtn onClick={openModal}>{isEnglish ? `more` : `więcej`}</HelloBtn>
    <LangButtonWrapper>
      <LangButton isEnglish={isEnglish} lang={lang} />
    </LangButtonWrapper>
  </Wrapper>
);

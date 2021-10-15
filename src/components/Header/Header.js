import React from "react";
import logo from "../../Asets/logo.png";
import {
  HelloBtn,
  LogoWrapper,
  SortBarWrapper,
  Wrapper,
  LangButtonWrapper,
} from "./Header.styled";
import LangButton from "../LangButton/LangButton";
import SortBar from "../SortBar/SortBar";
const Header = ({
  isEnglish,
  sortBy,
  lang,
  sortDirect,
  openModalFunc,
  setIsFiltered,
  isFiltered,
  closeModalFunc,
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
        closeModalFunc={closeModalFunc}
      />
    </SortBarWrapper>
    <HelloBtn onClick={openModalFunc}>{isEnglish ? `more` : `więcej`}</HelloBtn>
    <LangButtonWrapper>
      <LangButton isEnglish={isEnglish} lang={lang} />
    </LangButtonWrapper>
  </Wrapper>
);

export default Header;

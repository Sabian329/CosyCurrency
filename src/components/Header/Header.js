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
  sortByValue,
  sortByName,
  lang,
  sortDirect,
  sortDirectV,
  openModalFunc,
}) => (
  <Wrapper>
    <LogoWrapper>
      <p>Cosy Currency</p>
      <img src={logo} />
    </LogoWrapper>
    <SortBarWrapper>
      <SortBar
        isEnglish={isEnglish}
        sortByValue={sortByValue}
        sortByName={sortByName}
        sortDirect={sortDirect}
        sortDirectV={sortDirectV}
      />
    </SortBarWrapper>
    <HelloBtn onClick={openModalFunc}>More</HelloBtn>
    <LangButtonWrapper>
      <LangButton isEnglish={isEnglish} lang={lang} />
    </LangButtonWrapper>
  </Wrapper>
);

export default Header;

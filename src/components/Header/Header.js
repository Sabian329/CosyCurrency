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
const Header = ({ isEnglish, sortBy, lang, sortDirect, openModalFunc }) => (
  <Wrapper>
    <LogoWrapper onClick={() => sortBy("code")}>
      <p>Cosy Currency</p>
      <img src={logo} />
    </LogoWrapper>
    <SortBarWrapper>
      <SortBar isEnglish={isEnglish} sortBy={sortBy} sortDirect={sortDirect} />
    </SortBarWrapper>
    <HelloBtn onClick={openModalFunc}>More</HelloBtn>
    <LangButtonWrapper>
      <LangButton isEnglish={isEnglish} lang={lang} />
    </LangButtonWrapper>
  </Wrapper>
);

export default Header;

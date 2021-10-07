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
  openModalFunc,
  isEnglish,
  lang,
  native,
  sortingByValue,
  sortingByName,
}) => (
  <Wrapper>
    <LogoWrapper>
      <p>Cosy Currency</p>
      <img src={logo} />
    </LogoWrapper>
    <SortBarWrapper>
      <SortBar
        isEnglish={isEnglish}
        native={native}
        sortingByValue={sortingByValue}
        sortingByName={sortingByName}
      />
    </SortBarWrapper>
    <HelloBtn onClick={openModalFunc}>More</HelloBtn>
    <LangButtonWrapper>
      <LangButton isEnglish={isEnglish} lang={lang} />
    </LangButtonWrapper>
  </Wrapper>
);

export default Header;

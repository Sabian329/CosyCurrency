import React from "react";
import HeaderNav from "./HeaderNav";
import style from "./Header.module.scss";
import logo from "../../Asets/logo.png";
import { HelloBtn, LogoWrapper, HeaderNavWrapper } from "./Header.styled";
const Header = ({ openModalFunc }) => (
  <header className={style.wrapper}>
    <LogoWrapper>
      <p>Cosy Currency</p>
      <img src={logo} />
    </LogoWrapper>
    <HeaderNavWrapper>
      <HeaderNav />
    </HeaderNavWrapper>
    <HelloBtn onClick={openModalFunc}>More</HelloBtn>
  </header>
);

export default Header;

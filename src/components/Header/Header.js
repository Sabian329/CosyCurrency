import React from "react";
import HeaderNav from "./HeaderNav";
import style from "./Header.module.scss";
import logo from "../../Asets/logo.png";
import { LogoWrapper } from "./Header.styled";
import { OpenButton } from "./Header.styled";

const Header = ({ openModalFunc }) => (
  <header className={style.wrapper}>
    <LogoWrapper>
      <p>Cosy Currency</p>
      <img src={logo} />
    </LogoWrapper>
    <HeaderNav />
    <OpenButton onClick={openModalFunc}>Click</OpenButton>
  </header>
);

export default Header;

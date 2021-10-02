import React from "react";
import HeaderNav from "./HeaderNav";
import style from "./Header.module.scss";
import logo from "../../Asets/logo.png";
import {
  container,
  ContainerBtn,
  HelloBtn,
  LogoWrapper,
  ShineEfect,
} from "./Header.styled";
import { OpenButton } from "./Header.styled";

const Header = ({ openModalFunc }) => (
  <header className={style.wrapper}>
    <LogoWrapper>
      <p>Cosy Currency</p>
      <img src={logo} />
    </LogoWrapper>
    <HeaderNav />
    <ContainerBtn>
      <HelloBtn onClick={openModalFunc}>Click </HelloBtn>
      <ShineEfect className="shine"></ShineEfect>
    </ContainerBtn>
  </header>
);

export default Header;

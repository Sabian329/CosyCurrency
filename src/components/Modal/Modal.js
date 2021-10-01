import React from "react";
import style from "./Modal.module.scss";
import styled from "styled-components";

const Modal = ({ closeModalFunc }) => (
  <div className={style.wrapper}>
    <CloseButton onClick={closeModalFunc}>X</CloseButton>
    <div>No money !?</div>
  </div>
);

export default Modal;

const CloseButton = styled.button`
  border: none;
  border-radius: 1rem;
  width: 5rem;
  height: 3rem;
  background-color: rgb(100, 106, 221);
  font-size: 1rem;
  color: #ffff;
  margin: 2rem;
  -webkit-box-shadow: -1px 13px 15px -6px rgba(0, 0, 0, 0.64);
  box-shadow: -1px 13px 15px -6px rgba(0, 0, 0, 0.64);
`;

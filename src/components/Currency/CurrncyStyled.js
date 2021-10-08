import React from "react";
import styled from "styled-components";

export const CrrItemWrapper = styled.tr`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: 7rem;
  width: 32rem;
  background-color: #2e8de7;
  margin: 1rem;
  padding: 1rem;
  border-radius: 10px;
  -webkit-box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
  @media only screen and (max-width: 550px) {
    width: 17rem;
    margin: 0.5rem;
    flex-wrap: nowrap;
  }
  img {
    width: 80px;
    height: 80px;
    @media only screen and (max-width: 550px) {
      width: 60px;
      height: 60px;
    }
  }
  div {
    width: 12rem;
    padding: 0 1rem 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    @media only screen and (max-width: 550px) {
      width: 5rem;
      font-size: 0.8rem;
      padding: 0 0.2rem 0 0.2rem;
    }
  }
`;
export const Item = styled.th``;
export const ItemValue = styled.th`
  width: 10rem;
  border-radius: 20px;
  display: block;
  font-size: 1.5rem;
  color: #91dddd;
  width: max-content;
  @media only screen and (max-width: 550px) {
    width: 5rem;
    font-size: 1rem;
  }
`;
export const ItemShort = styled.th`
  font-size: 1.4rem;
  color: #cececf;
  @media only screen and (max-width: 550px) {
    font-size: 1rem;
  }
`;

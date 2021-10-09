import React from "react";
import styled from "styled-components";

export const CrrWrapper = styled.ul`
  padding: 1rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const CrrItemWrapper = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 7rem;
  width: 32rem;
  background-color: #2e8de7;
  margin: 1rem;
  border-radius: 10px;
  -webkit-box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
  @media only screen and (max-width: 550px) {
    width: 17rem;
    margin: 0.5rem;
    flex-wrap: nowrap;
  }
`;
export const Item = styled.p`
  padding: 0;
  margin: 0;
`;
export const ItemValue = styled.h2`
  padding: 0;
  margin: 0;
  width: 10rem;
  border-radius: 20px;
  font-size: 1.5rem;
  color: #91dddd;
  width: max-content;
  @media only screen and (max-width: 550px) {
    width: 5rem;
    font-size: 1rem;
  }
`;
export const ItemShort = styled.h2`
  padding: 0;
  margin: 0;
  font-size: 1.4rem;
  color: #cececf;
  @media only screen and (max-width: 550px) {
    font-size: 1rem;
  }
`;

export const SmallWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: max-content;
  width: 12rem;
  padding: 0 1rem 0 1rem;
  height: 7rem;
  overflow: hidden;
  @media only screen and (max-width: 550px) {
    width: 5rem;
    font-size: 0.8rem;
    padding: 0 0.2rem 0 0.2rem;
  }
`;

export const Flag = styled.img`
  width: 80px;
  height: 80px;
  @media only screen and (max-width: 550px) {
    width: 60px;
    height: 60px;
  }
`;

export const DropWrapper = styled.div`
  width: 20rem;
  background-color: #2e8de7;
`;
export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

import React from "react";
import styled from "styled-components";

export const CrrItemWrapper = styled.tr`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 30rem;
  background-color: rgb(100, 106, 221);
  margin: 1rem;
  padding: 1rem;
  -webkit-box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
  img {
    width: 80px;
    height: 80px;
  }
  div {
    width: 10rem;
    padding: 0 1rem 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
`;
export const ItemShort = styled.th`
  font-size: 1.4rem;
  color: #cececf;
`;

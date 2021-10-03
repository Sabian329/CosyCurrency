import styled from "styled-components";

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #8181dd;
  margin-left: 2rem;
  border-radius: 3rem;
  padding: 0 0rem 0 1rem;
  color: white;
  -webkit-box-shadow: 5px 5px 50px rgba(0, 0, 0, 0.4);
  box-shadow: 5px 5px 50px rgba(0, 0, 0, 0.4);
`;

export const HelloBtn = styled.button`
  background: #6161b1;
  border-radius: 3rem;
  padding: 1rem;
  margin-right: 2rem;
  color: #c7c7c7;
  -webkit-box-shadow: -1px 13px 15px -6px rgba(0, 0, 0, 0.64);
  @media only screen and (min-width: 900px) {
    display: none;
  }
`;
export const HeaderNavWrapper = styled.div`
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

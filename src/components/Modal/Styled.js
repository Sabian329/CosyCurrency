import styled from "styled-components";

export const MainWrapper = styled.div`
  padding: 01rem;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  margin: 0 auto;
  position: fixed;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(2px);
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 30vw;
  height: 50vh;
  background-color: rgb(180, 180, 180);
  box-shadow: 0px 20px 40px -10px rgba(#818181, 0.5);
  position: fixed;
  border-radius: 15px;
  z-index: 100;
  @media only screen and (max-width: 550px) {
    width: 65vw;
    height: 55vh;
  }
`;

export const LangButtonWrapper = styled.div`
  top: 2rem;
`;

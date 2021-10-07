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
  padding: 01rem;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 30vw;
  height: 70vh;
  background-color: rgb(180, 180, 180);
  box-shadow: 0px 20px 40px -10px rgba(#818181, 0.5);
  position: fixed;
  border-radius: 15px;
  z-index: 100;
  @media only screen and (max-width: 550px) {
    width: 60vw;
  }
`;
export const CloseButton = styled.button`
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

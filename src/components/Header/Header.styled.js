import styled from "styled-components";

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2e8de7;
  margin-left: 2rem;
  border-radius: 3rem;
  padding: 0 0rem 0 1rem;
  color: white;
  -webkit-box-shadow: 5px 5px 50px rgba(0, 0, 0, 0.4);
  box-shadow: 5px 5px 50px rgba(0, 0, 0, 0.4);
  img {
    margin-left: 1rem;
    height: 4rem;
    @media only screen and (max-width: 550px) {
      margin-left: 0.4rem;
    }
  }
  p {
    @media only screen and (max-width: 550px) {
      margin-left: 0.5rem;
    }
  }
  @media only screen and (max-width: 550px) {
    margin-left: 1rem;
    padding: 0 0 0 0.5rem;
  }
`;

export const Wrapper = styled.header`
  height: 5rem;
  width: 100%;
  background-color: rgba(100, 100, 100, 0.201);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem;
  position: relative;
  @media only screen and (max-width: 550px) {
    padding: 1rem;
  }
`;

export const HelloBtn = styled.button`
  height: 4rem;
  width: 6rem;
  background-color: #2e8de7;
  color: #ffff;
  border: none;
  border-radius: 3rem;
  padding: 1rem;
  margin-right: 2rem;
  font-size: 1rem;
  -webkit-box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5);
  @media only screen and (min-width: 900px) {
    display: none;
  }
  @media only screen and (max-width: 550px) {
    margin-left: 1rem;
  }
`;
export const SortBarWrapper = styled.div`
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;
export const LangButtonWrapper = styled.div`
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

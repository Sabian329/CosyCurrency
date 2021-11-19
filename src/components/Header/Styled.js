import styled from "styled-components";

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #b6ccfe;
  margin-left: 3rem;
  border-radius: 3rem;
  padding: 0 0rem 0 1rem;
  color: white;
  -webkit-box-shadow: 5px 5px 50px rgba(0, 0, 0, 0.4);
  box-shadow: 5px 5px 50px rgba(0, 0, 0, 0.4);
  :hover {
    cursor: pointer;
  }
  img {
    margin-left: 1rem;
    height: 4rem;
    position: relative;
    animation-name: slide-in;
    animation-duration: 2s;
    :hover {
      transform: rotate(10deg);
      cursor: pointer;
    }

    @keyframes slide-in {
      from {
        left: -10rem;
        transform: rotate(-360deg);
      }
      to {
        left: 0px;
      }
    }

    @media only screen and (max-width: 550px) {
      margin-left: 0.4rem;
    }
  }
  p {
    font-family: "Abhaya Libre", serif;
    font-family: "Monoton", cursive;
    font-family: "Orbitron", sans-serif;
    @media only screen and (max-width: 550px) {
      margin-left: 0.5rem;
    }
  }
  @media only screen and (max-width: 550px) {
    margin-left: 1rem;
    padding: 0 0 0 0.5rem;
  }
  @media only screen and (max-width: 1100px) {
    margin-left: 1rem;
  }
`;

export const Wrapper = styled.header`
  height: 6rem;
  width: 100%;
  max-width: 1480px;
  border-radius: 0 0 10px 10px;
  background-color: rgba(100, 100, 100, 0.201);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem;
  position: relative;
  @media only screen and (max-width: 1480px) {
    border-radius: unset;
  }
  @media only screen and (max-width: 550px) {
    padding: 1rem;
  }
`;

export const HelloBtn = styled.button`
  height: 2rem;
  width: 5rem;
  background-color: #b6ccfe;
  color: #ffff;
  border: none;
  border-radius: 3rem;
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
  margin-right: 5rem;
  @media only screen and (max-width: 1100px) {
    margin-right: 1rem;
  }
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

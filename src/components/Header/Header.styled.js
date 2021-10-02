import styled from "styled-components";

export const OpenButton = styled.button`
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
export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #8181dd;
  margin-left: 2rem;
  border-radius: 3rem;
  padding: 0 0rem 0 1rem;
  color: white;
  -webkit-box-shadow: -1px 13px 15px -6px rgba(0, 0, 0, 0.64);
`;
export const ContainerBtn = styled.div`
  border-radius: 3rem;
  margin: 30px;
  width: 5rem;
  position: relative;
  overflow: hidden;
  &:hover .shine {
    transform: skewX(20deg) translateX(300px);
  }
`;

export const HelloBtn = styled.button`
  border-radius: 3rem;
  position: relative;
  display: inline-block;
  padding: 15px 25px;
  background-color: green; /*for compatibility with older browsers*/
  background-image: linear-gradient(green, lightgreen);
  ::after {
    border-radius: 2rem;
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: calc(100% - 4px);
    height: 50%;
    background: linear-gradient(
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.2)
    );
  }
`;

export const ShineEfect = styled.div`
  position: absolute;
  top: 0;
  left: -70px;
  height: 98px;
  width: 50px;
  background: rgba(255, 255, 255, 0.4);
  transition: all 0.3s linear;
  transform: skewX(20deg) translateX(0);
`;

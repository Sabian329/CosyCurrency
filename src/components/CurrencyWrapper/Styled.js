import styled from "styled-components";

export const CrrWrapper = styled.ul`
  padding: 1rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1200px;
`;

export const CrrItemWrapper = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 6rem;
  width: 33rem;
  background-color: #e2eafc;
  margin: 1rem 1rem 0 1rem;
  border-radius: 10px;

  -webkit-box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
  @media only screen and (max-width: 550px) {
    height: 5rem;
    width: 19rem;
    margin: 0.7rem 0 0 0;
    flex-wrap: nowrap;
  }
  :hover {
    cursor: pointer;
  }
`;
export const Item = styled.p`
  padding: 0;
  margin: 0;
  color: #014f86;
`;
export const ItemValue = styled.h2`
  padding: 0;
  margin: 0;
  width: 10rem;
  border-radius: 20px;
  font-size: 1.5rem;
  color: #014f86;
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
  color: #014f86;
  @media only screen and (max-width: 550px) {
    font-size: 1rem;
  }
`;

export const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: max-content;
  width: 12rem;
  padding: 0 1rem 0 1rem;
  height: 5rem;
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

  margin-left: 3rem;
  @media only screen and (max-width: 550px) {
    width: 60px;
    height: 60px;
    margin-right: 1rem;
    margin-left: 0;
  }
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ItemsWrapperPln = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: max-content;
  width: 12rem;
  padding: 0 1rem 0 1rem;
  height: 5rem;
  overflow: hidden;

  @media only screen and (max-width: 550px) {
    width: 5rem;
    font-size: 0.8rem;
    padding: 0 0.2rem 0 0.2rem;
  }
`;

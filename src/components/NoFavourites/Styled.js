import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 1px #ffff;
  padding: 2rem;
  border-radius: 19px;
  img {
    width: 1rem;
  }
  button {
    color: #ffff;
    background: transparent;
    border: 1px solid #fff;
    padding: 0.7rem;
    font-size: 1.5rem;
    border-radius: 10px;
    margin-bottom: 1rem;
    :hover {
      font-size: 1.4rem;
    }
  }
`;

export const NoFavH1 = styled.h1`
  font-size: 2rem;
`;

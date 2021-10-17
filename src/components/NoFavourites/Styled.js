import styled from "styled-components";

export const Wrapper = styled.section`
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid 1px #ffff;
  padding: 2rem;
  border-radius: 19px;
  @media only screen and (max-width: 900px) {
    text-align: center;
  }

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
      cursor: pointer;
      border: 1px solid #ddd;
      color: #ddd;
    }
  }
`;

export const NoFavH1 = styled.h3`
  font-size: 2rem;
`;

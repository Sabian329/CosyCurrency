import styled from "styled-components";

export const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-weight: 600;
  }
  button {
    display: flex;
    justify-content: center;
    font-size: 1.2rem;
    width: max-content;
    cursor: pointer;
    margin: 0.5rem;
    border: none;
    color: #ffff;
    border-radius: 20px;
    background-color: rgba(100, 100, 100, 0);
  }
  @media only screen and (min-width: 900px) {
    flex-direction: row;
  }
`;

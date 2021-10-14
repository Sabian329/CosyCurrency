import styled from "styled-components";

export const Wrapper = styled.nav`
  display: flex;
  padding: 0;
  margin: 0;
  @media only screen and (max-width: 900px) {
    text-align: center;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background-color: #0090c1;
  }
  p {
    display: block;
    font-size: 1.5rem;
    font-weight: 600;
    :hover {
      cursor: pointer;
      color: #dddd;
    }
  }
  button {
    display: flex;
    justify-content: center;
    width: max-content;
    cursor: pointer;
    margin: 0.5rem;
    border: none;
    color: #ffff;
    border-radius: 20px;
    background-color: rgba(100, 100, 100, 0);
    p {
      font-size: 1rem;
      :hover {
        cursor: pointer;
        color: #dddd;
      }
    }
  }
`;

import styled from "styled-components";
import magicon from "../../Asets/magicon.png";

export const Wrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  @media only screen and (max-width: 900px) {
    text-align: center;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background-color: #014f86;
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

export const SortInput = styled.input`
  height: 2rem;
  width: 9rem;
  background: transparent;
  border: solid 1px #ffff;
  border-radius: 15px;
  font-size: 1rem;
  padding: 0 1rem 0 1rem;
  cursor: pointer;
  color: #ffff;
  @media only screen and (max-width: 1200px) {
    width: 9rem;
  }
  @media only screen and (max-width: 900px) {
    width: 9rem;
    margin: 0 2rem 1rem 2rem;
  }
  ::placeholder {
    background-image: url(${magicon});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;
    color: #ffff;
  }
`;

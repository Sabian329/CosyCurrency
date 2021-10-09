import styled from "styled-components";

export const Wrapper = styled.nav`
  position: absolute;
  top: 0rem;
  left: 47%;
  padding: 0;
  margin: 0;
  @media only screen and (max-width: 900px) {
    position: absolute;
    top: 15%;
    left: 0;
    right: 0;
    text-align: center;
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
export const BtnsWrapper = styled.div`
  background-color: rgba(100, 100, 100, 1.201);
  border-radius: 10px;
  margin: 0 1rem 0 1rem;
`;

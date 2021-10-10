import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #68aff2;
  width: 25rem;
  border-radius: 0 0 15px 15px;
  padding: 1rem;
  font-size: 1.2rem;
  -webkit-box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
  @media only screen and (max-width: 550px) {
    width: 15rem;
  }
  button {
    border: none;
    border-radius: 7px;
    padding: 0.5rem;
    font-size: 1rem;
    background-color: #c9ebff;
    color: #818181;
    -webkit-box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
  }
  input {
    background-color: transparent;
    border: none;
    border-bottom: 2px #ffff solid;
    color: #ffff;
    font-size: 1rem;
    :focus {
      outline: none;
    }
    ::-webkit-input-placeholder {
      color: #ffff;
    }
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }
  p {
    padding: 0.5rem 0 0.5rem 0;
    margin: 0;
  }
`;

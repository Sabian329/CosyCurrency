import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #01497c;
  width: 25rem;
  border-radius: 0 0 15px 15px;
  padding: 1rem;
  font-size: 1.2rem;
  -webkit-box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
  @media only screen and (max-width: 550px) {
    width: 15rem;
  }
  input {
    background-color: transparent;
    border: none;
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
    padding: 0.5rem 0.5rem 0.5rem 0;
    margin: 0;
  }
`;

export const OptionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FavBtn = styled.button`
  border: none;
  border-radius: 7px;
  padding: 0.5rem;
  font-size: 1rem;
  background: transparent;
  img {
    width: 2rem;
    :hover {
      cursor: pointer;
    }
  }
`;
export const OpenBtn = styled.button`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 7px;
  padding: 0.5rem;
  font-size: 1rem;
  background-color: #e2eafc;
  color: #014f86;
  -webkit-box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
  :hover {
    cursor: pointer;
  }
`;

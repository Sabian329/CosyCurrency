import styled from "styled-components";

export const WrapperMain = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Wrapper = styled.div`
  display: flex;
`;

export const Container = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  position: relative;
  padding-left: 2rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    border-radius: 50%;
  }
  :hover input ~ span {
    background-color: #ccc;
  }
  input:checked ~ span {
    background-color: #8590dd;
  }
  span:after {
    content: "";
    position: absolute;
    display: none;
  }
  input:checked ~ span:after {
    display: block;
  }
  span:after {
    top: 9px;
    left: 9px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
  }
`;

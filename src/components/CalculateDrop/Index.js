import React, { useState } from "react";
import styled from "styled-components";
import { arrows } from "../../Constants/arrows";

export const CalculateDrop = ({ value, short, setInputValue, inputValue }) => {
  const [calculateDirect, setCalculateDirect] = useState(true);
  return (
    <Wrapper>
      <div>
        <Input>
          <p>{calculateDirect ? "PLN" : short}</p>
          <input
            type="text"
            name="phone"
            maxLength="8"
            placeholder="..."
            onChange={(e) => setInputValue(e.target.value)}
          />
        </Input>
        <div>
          {calculateDirect
            ? short + ` ` + Math.round((inputValue / value) * 100) / 100
            : `PLN  ${Math.round(inputValue * value * 100) / 100}`}
        </div>
      </div>

      <Swith onClick={() => setCalculateDirect(!calculateDirect)}>
        {arrows.upDown}
      </Swith>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 15rem;
  padding: 0 1rem 0 1rem;
  input {
    font-size: 1.2rem;
    cursor: pointer;
  }
  input {
    @media only screen and (max-width: 900px) {
      width: 10rem;
      overflow: hidden;
    }
  }
  div {
    overflow: hidden;
    width: 10rem;
    padding-top: 0.5rem;
  }
`;

const Swith = styled.button`
  margin: 1.2rem 0 0 0;
  height: 2.5rem;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 7px;
  padding: 0 0.6rem 0 0.6rem;
  font-size: 1.6rem;
  background-color: #0090c1;
  color: #ffff;
  -webkit-box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
  :hover {
    cursor: pointer;
  }
`;
const Input = styled.div`
  color: #ffd700;
  display: flex;
  border-bottom: solid #ffff 1px;
`;

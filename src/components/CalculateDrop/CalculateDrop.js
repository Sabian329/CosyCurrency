import React, { useState } from "react";
import styled from "styled-components";
import { arrows } from "../../Constants/arrows";

export const CalculateDrop = ({ value, short, setInputValue, inputValue }) => {
  const [calculateDirect, setCalculateDirect] = useState(true);
  return (
    <Wrapper>
      <div>
        <input
          type="text"
          name="phone"
          maxLength="8"
          placeholder={calculateDirect ? "PLN" : short}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <div>
          {calculateDirect
            ? Math.round((inputValue / value) * 100) / 100 + ` ` + short
            : Math.round(inputValue * value * 100) / 100 + ` ` + "PLN"}
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
    @media only screen and (max-width: 900px) {
      width: 10rem;
      overflow: hidden;
    }
  }
  div {
    overflow: hidden;
    width: 10rem;
  }
`;

const Swith = styled.button`
  margin-left: 1rem;
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

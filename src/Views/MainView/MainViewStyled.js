import styled from "styled-components";

export const MainStylesView = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    padding: 0 1rem 0 1rem;
    font-size: 2rem;
    @media only screen and (max-width: 550px) {
      display: none;
    }
  }
`;

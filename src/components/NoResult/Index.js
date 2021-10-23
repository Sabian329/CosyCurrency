import React from "react";
import { NoFavH1, Wrapper } from "./Styled";

export const NoResult = ({ isEnglish }) => (
  <>
    {isEnglish ? (
      <Wrapper>
        <NoFavH1>NO RESULTS</NoFavH1>
        <p>Sorry, we can not find this currency.</p>
      </Wrapper>
    ) : (
      <Wrapper>
        <NoFavH1>BRAK WYNIKÓW</NoFavH1>
        <p>Przepraszamy, nie możemy odszukać tej waluty.</p>
      </Wrapper>
    )}
  </>
);

import React from "react";
import { NoFavH1, Wrapper } from "./Styled";

export const NoFavourites = ({ setIsFiltered }) => (
  <Wrapper>
    <NoFavH1>NO FAVOURITES YET !</NoFavH1>
    <p>
      To add currency to favourites click on currency block and tap the heart.
    </p>
    <button onClick={() => setIsFiltered(false)}>Back</button>
  </Wrapper>
);

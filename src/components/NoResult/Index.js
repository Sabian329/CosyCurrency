import React from "react";
import { NoFavH1, Wrapper } from "./Styled";

export const NoResult = ({ setIsFiltered, isEnglish }) => (
  <>
    {isEnglish ? (
      <Wrapper>
        <NoFavH1>NO FAVOURITES YET</NoFavH1>
        <p>
          To add currency to favourites click on currency block and tap the
          heart.
        </p>
        <button onClick={() => setIsFiltered(false)}>Back</button>{" "}
      </Wrapper>
    ) : (
      <Wrapper>
        <NoFavH1>BRAK ULUBIONYCH</NoFavH1>
        <p>
          Aby dodać walutę do ulubionych kliknij w baner waluty, następnie
          zaznacz ikonę serca.
        </p>
        <button onClick={() => setIsFiltered(false)}>Wróć</button>{" "}
      </Wrapper>
    )}
  </>
);

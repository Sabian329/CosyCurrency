import React from "react";
import { Flags } from "../../Constants/LanguageFalgs";
import { Btn } from "./LangButtonStyled";

const LangButton = ({ isEnglish, lang }) => (
  <>
    {isEnglish ? (
      <Btn onClick={lang}>
        <img src={Flags.polish} alt="polish flag" />
        <p>Polska wersja</p>
      </Btn>
    ) : (
      <Btn onClick={lang}>
        <img src={Flags.english} alt="english flag" />
        <p>English version</p>
      </Btn>
    )}
  </>
);
export default LangButton;

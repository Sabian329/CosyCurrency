import React from "react";
import { MainView } from "../MainView/MainView";
import { GlobalStyles } from "../GlobalStyle/GlobalStyle";

export const Root = () => {
  return (
    <>
      <GlobalStyles />
      <section>
        <MainView />
      </section>
    </>
  );
};

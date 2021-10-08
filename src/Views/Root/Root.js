import React from "react";
import MainView from "../MainView/MainView";
import { GlobalStyles } from "../../GlobalStyle/GlobalStyle";

class Root extends React.Component {
  render() {
    return (
      <>
        <GlobalStyles />
        <section>
          <MainView />
        </section>
      </>
    );
  }
}

export default Root;

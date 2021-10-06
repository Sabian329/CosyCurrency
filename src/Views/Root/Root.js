import React from "react";
import "./index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainView from "../MainView/MainView";
import CountryView from "../CountryView/CountryView";
import CalculateView from "../CalculateView/CalculateView";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";
import style from "../Root/Root.module.scss";

class Root extends React.Component {
  state = {
    isModalOpen: false,
  };

  toogleModalVisibility = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };
  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { isModalOpen } = this.state;
    return (
      <section>
        <BrowserRouter>
          <>
            <Header openModalFunc={this.toogleModalVisibility} />
            {/* <h1>This is CosyCurrency app enjoy </h1> */}
            <Switch>
              <Route exact path="/" component={MainView} />
              <Route path="/country" component={CountryView} />
              <Route path="/calculate" component={CalculateView} />
            </Switch>
            {isModalOpen && <Modal closeModalFunc={this.closeModal} />}
          </>
        </BrowserRouter>
      </section>
    );
  }
}

export default Root;

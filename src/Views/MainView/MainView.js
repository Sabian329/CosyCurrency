import React from "react";
import CurrencyWrapper from "../../components/Currency/CurrencyWrapper";
import styled from "styled-components";
import { MainStylesView } from "./MainViewStyled";
import SortBar from "../../components/SortBar/SortBar";
class MainView extends React.Component {
  state = {
    apiData: [],
    apiDataNative: [],
    isLoaded: false,
  };

  componentDidMount() {
    fetch("https://api.nbp.pl/api/exchangerates/tables/a/?format=json")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            apiData: [...result[0].rates],
            apiDataNative: [...result[0].rates],
          });
          console.log(this.state.apiData);
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  sortingByValue = () => {
    let toSort = this.state.apiData;
    toSort.sort((a, b) => (a.mid < b.mid ? 1 : -1));
    this.setState({ apiData: toSort });
  };
  sortingByName = () => {
    let toSort = this.state.apiData;
    toSort.sort((a, b) => (a.code > b.code ? 1 : -1));
    this.setState({ apiData: toSort });
  };
  nativeSort = () => {
    this.componentDidMount();
  };

  render() {
    return (
      <MainStylesView>
        <h1>This is CosyCurrency app enjoy </h1>
        <SortBar
          native={this.nativeSort}
          sortingByValue={this.sortingByValue}
          sortingByName={this.sortingByName}
        />
        <CurrencyWrapper items={this.state.apiData} />
      </MainStylesView>
    );
  }
}
export default MainView;

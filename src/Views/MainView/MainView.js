import React from "react";
import CurrencyWrapper from "../../components/Currency/CurrencyWrapper";
import styled from "styled-components";
class MainView extends React.Component {
  state = {
    apiData: [],
    apiDataHead: [],
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

  render() {
    return (
      <MainStylesView>
        <CurrencyWrapper items={this.state.apiData} />
      </MainStylesView>
    );
  }
}
export default MainView;

const MainStylesView = styled.section`
  display: flex;
  justify-content: center;
`;

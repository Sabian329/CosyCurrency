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
    fetch("http://api.nbp.pl/api/exchangerates/tables/a/?format=json")
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

  render() {
    return (
      <MainStylesView>
        <CurrencyWrapper items={this.state.apiData} />
      </MainStylesView>
    );
  }
}
export default MainView;

const MainStylesView = styled.div`
  display: flex;
  flex-direction: column;
  width: 98%;
  color: #ffff;
`;

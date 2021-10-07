import React from "react";
import CurrencyWrapper from "../../components/Currency/CurrencyWrapper";
import { MainStylesView } from "./MainViewStyled";
import SortBar from "../../components/SortBar/SortBar";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";
class MainView extends React.Component {
  state = {
    apiData: [],
    isEnglish: true,
    isLoaded: false,
    isModalOpen: false,
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
  toogleModalVisibility = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };
  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

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
  langSet = () => {
    this.setState({ isEnglish: !this.state.isEnglish });
    console.log(this.state.isEnglish);
  };

  render() {
    const { isModalOpen } = this.state;
    return (
      <MainStylesView>
        <Header
          native={this.nativeSort}
          sortingByValue={this.sortingByValue}
          sortingByName={this.sortingByName}
          lang={this.langSet}
          isEnglish={this.state.isEnglish}
          openModalFunc={this.toogleModalVisibility}
        />
        {isModalOpen && (
          <Modal
            closeModalFunc={this.closeModal}
            lang={this.langSet}
            isEnglish={this.state.isEnglish}
            native={this.nativeSort}
            sortingByValue={this.sortingByValue}
            sortingByName={this.sortingByName}
          />
        )}
        <CurrencyWrapper
          isEnglish={this.state.isEnglish}
          items={this.state.apiData}
        />
      </MainStylesView>
    );
  }
}
export default MainView;

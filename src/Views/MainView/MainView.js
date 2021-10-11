import React, { useState, useEffect } from "react";
import { MainStylesView } from "./MainViewStyled";
import { LinkTBa, LinkTBb } from "../../Constants/Links";
import Header from "../../components/Header/Header";
import CurrencyWrapper from "../../components/Currency/CurrencyWrapper";
import Modal from "../../components/Modal/Modal";

const MainView = () => {
  const [error, setError] = useState(null);
  const [apiData, setApiData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isEnglish, setIsEnglish] = useState(true);
  const [isModal, setIsModal] = useState(false);
  const [sortDirectV, setSortDirectV] = useState(false);
  const [sortDirect, setSortDirect] = useState(false);
  useEffect(() => {
    fetch(LinkTBa)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setApiData(
            [...result[0].rates].sort((a, b) => (a.code > b.code ? 1 : -1))
          );
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  const sortByValue = () => {
    setSortDirectV(!sortDirectV);
    sortDirectV
      ? setApiData([...apiData.sort((a, b) => (a.mid > b.mid ? 1 : -1))])
      : setApiData([...apiData.sort((a, b) => (a.mid < b.mid ? 1 : -1))]);
  };
  const sortByName = () => {
    setSortDirect(!sortDirect);
    sortDirect
      ? setApiData([...apiData.sort((a, b) => (a.code > b.code ? 1 : -1))])
      : setApiData([...apiData.sort((a, b) => (a.code < b.code ? 1 : -1))]);
  };
  return (
    <MainStylesView>
      <Header
        isEnglish={isEnglish}
        lang={() => setIsEnglish(!isEnglish)}
        sortByValue={sortByValue}
        sortByName={sortByName}
        sortDirect={sortDirect}
        sortDirectV={sortDirectV}
        openModalFunc={() => setIsModal(true)}
      />

      {isModal && (
        <Modal
          isModal={isModal}
          isEnglish={isEnglish}
          lang={() => setIsEnglish(!isEnglish)}
          closeModalFunc={() => setIsModal(false)}
          sortByValue={sortByValue}
          sortByName={sortByName}
          sortDirect={sortDirect}
          sortDirectV={sortDirectV}
        />
      )}

      <CurrencyWrapper items={apiData} isEnglish={isEnglish} />
    </MainStylesView>
  );
};
export default MainView;

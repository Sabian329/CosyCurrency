import React, { useState, useEffect } from "react";
import { MainStylesView } from "./MainViewStyled";
import { LinkTBa } from "../../Constants/Links";
import Header from "../../components/Header/Header";
import CurrencyWrapper from "../../components/Currency/CurrencyWrapper";
import Modal from "../../components/Modal/Modal";

const MainView = () => {
  const [error, setError] = useState(null);
  const [apiData, setApiData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isEnglish, setIsEnglish] = useState(true);
  const [isModal, setIsModal] = useState(false);
  const [sortDirect, setSortDirect] = useState(false);
  const [favourites, setFavourites] = useState(
    localStorage.getItem("favs") ? JSON.parse(localStorage.getItem("favs")) : []
  );

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favourites));
    console.log(favourites);
  }, [favourites]);

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
  const sortBy = (param) => {
    setSortDirect(!sortDirect);
    sortDirect
      ? setApiData([
          ...apiData.sort((a, b) => (a?.[param] > b?.[param] ? 1 : -1)),
        ])
      : setApiData([
          ...apiData.sort((a, b) => (a?.[param] < b?.[param] ? 1 : -1)),
        ]);
    console.log(apiData);
  };

  return (
    <MainStylesView>
      <Header
        isEnglish={isEnglish}
        lang={() => setIsEnglish(!isEnglish)}
        sortBy={sortBy}
        sortDirect={sortDirect}
        openModalFunc={() => setIsModal(true)}
      />

      {isModal && (
        <Modal
          isModal={isModal}
          isEnglish={isEnglish}
          lang={() => setIsEnglish(!isEnglish)}
          closeModalFunc={() => setIsModal(false)}
          sortBy={sortBy}
          sortDirect={sortDirect}
        />
      )}

      <CurrencyWrapper
        items={apiData}
        isEnglish={isEnglish}
        favourites={favourites}
        setFavourites={setFavourites}
      />
    </MainStylesView>
  );
};
export default MainView;

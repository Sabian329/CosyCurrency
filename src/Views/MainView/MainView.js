import React, { useState, useEffect } from "react";
import { MainStylesView } from "./MainViewStyled";
import { LinkTBa } from "../../Constants/Links";
import { Header } from "../../components/Header/Index";
import { CurrencyWrapper } from "../../components/CurrencyWrapper/Index";
import { Modal } from "../../components/Modal/Index";

const MainView = () => {
  const [errors, setErrors] = useState(null);
  const [apiData, setApiData] = useState([]);
  const [isLoaded, setIsLoaded] = useState("");
  const [isEnglish, setIsEnglish] = useState(true);
  const [isModal, setIsModal] = useState(false);
  const [sortDirect, setSortDirect] = useState(false);
  const [favourites, setFavourites] = useState(
    localStorage.getItem("favs") ? JSON.parse(localStorage.getItem("favs")) : []
  );
  const [isFiltered, setIsFiltered] = useState(false);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favourites));
  }, [favourites]);

  useEffect(() => {
    fetch(LinkTBa)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setApiData(
            [...result[0].rates]
              .sort((a, b) => (a.code > b.code ? 1 : -1))
              .map((item, index) => {
                item.id = index;
                return item;
              })
          );
          console.log(`is loaded ${isLoaded}`);
        },
        (error) => {
          setIsLoaded(true);
          setErrors(error);
          console.log(errors);
        }
      );
  }, [isLoaded, errors]);
  const sortBy = (param) => {
    setSortDirect(!sortDirect);
    sortDirect
      ? setApiData([
          ...apiData.sort((a, b) => (a?.[param] > b?.[param] ? 1 : -1)),
        ])
      : setApiData([
          ...apiData.sort((a, b) => (a?.[param] < b?.[param] ? 1 : -1)),
        ]);
  };
  const search = (e) => {
    setInputValue(e.target.value.toUpperCase());
  };
  const showSearch = () => {
    const searched = apiData.filter((item) => item.code.includes(inputValue));
    return inputValue.length ? searched : apiData;
  };

  const filterApi = () => {
    let filtered = apiData.filter((x) => favourites.includes(x.code));
    return filtered;
  };
  const closeModal = () => {
    console.log("closed");
  };
  return (
    <MainStylesView>
      <Header
        isEnglish={isEnglish}
        lang={() => setIsEnglish(!isEnglish)}
        sortBy={sortBy}
        sortDirect={sortDirect}
        openModal={() => setIsModal(true)}
        setIsFiltered={setIsFiltered}
        isFiltered={isFiltered}
        closeModal={closeModal}
        search={search}
        setInputValue={setInputValue}
      />
      {isModal && (
        <Modal
          isEnglish={isEnglish}
          lang={() => setIsEnglish(!isEnglish)}
          closeModal={() => setIsModal(false)}
          sortBy={sortBy}
          sortDirect={sortDirect}
          setIsFiltered={setIsFiltered}
          isFiltered={isFiltered}
          search={search}
        />
      )}

      <CurrencyWrapper
        isEnglish={isEnglish}
        favourites={favourites}
        setFavourites={setFavourites}
        isFiltered={isFiltered}
        setIsFiltered={setIsFiltered}
        filterApi={filterApi}
        showSearch={showSearch}
        inputValue={inputValue}
      />
    </MainStylesView>
  );
};
export default MainView;

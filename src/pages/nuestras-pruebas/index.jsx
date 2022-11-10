import { useState } from "react";

import { APP_CONSTANTS } from "@constants/index";
import MainLayout from "@components/layouts/MainLayout";

import styles from "@styles/pages/Our-test.module.scss";

export default function Procedures(props) {
  const [details, setDetails] = useState({});
  const [results, setResults] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const [showEmptyMessage, setShowEmptyMessage] = useState(false);
  const apiPath = process.env.API_PATH;

  function changeInputSearch(event) {
    setSearchValue(event.target.value);

    if (event.target.value.length >= 3) {
      fetch(`${apiPath}${APP_CONSTANTS.API.SEARCH}${event.target.value}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.length > 0) {
            setResults(data);
            setShowEmptyMessage(false);
          } else {
            setShowEmptyMessage(true);
          }
        });
    } else {
      setResults([]);
      setShowEmptyMessage(false);
    }

    setShowDetails(false);
  }

  function openDetails(index) {
    if (results[index]) {
      setDetails(results[index]);
      setShowDetails(true);
      setSearchValue("");
    }
  }

  return (
    <MainLayout
      navLinks={props.navLinks}
      isOurTestPage={true}
      footerData={props.footerData}
      headerData={props.headerData}
    >
      <div className={styles.ourTestWrapper}>
        <h2 className={styles.ourTestMainTitle}>
          {props.ourTestPage.mainTitle}
        </h2>
        <div className={styles.ourTestSearchWrapper}>
          <form>
            <input
              className={styles.ourTestSearchInput}
              value={searchValue}
              id="search"
              type="search"
              autoComplete="off"
              onChange={(event) => changeInputSearch(event)}
              placeholder={props.ourTestPage.search.searchPlaceHolder}
            />
          </form>
          {results && results.length > 0 && !showEmptyMessage && !showDetails && (
            <div className={styles.ourTestResults}>
              <div className={styles.ourTestResultsTotal}>
                {props.ourTestPage.search.searchResultsLabel} {results.length}
              </div>
              <div className={styles.ourTestResultsList}>
                {results.map((resultItem, index) => (
                  <div
                    className={styles.ourTestResultsListItem}
                    key={index}
                    onClick={(event) => openDetails(index)}
                  >
                    <div className={styles.ourTestResultsListItemLabel}>
                      {resultItem.nombre_prueba}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {showEmptyMessage && (
            <div className={styles.ourTestEmptyResults}>
              {props.ourTestPage.search.searchEmptyMessage}
            </div>
          )}
          {showDetails && (
            <div className={styles.ourTestResultsListItemDetails}>
              <div className={styles.ourTestResultsListItemDetailsHeader}>
                <h3>{details.nombre_prueba}</h3>
                <span>
                  {props.ourTestPage.search.codeLabel} {details.codigo_cups}
                </span>
              </div>
              <div className={styles.ourTestResultsListItemDetailsBody}>
                <div className={styles.ourTestResultsListItemDetailsBodyList}>
                  <div
                    className={styles.ourTestResultsListItemDetailsBodyListItem}
                  >
                    <img
                      src={APP_CONSTANTS.OUR_TEST.ICONS.PATIENT.SRC}
                      alt={APP_CONSTANTS.OUR_TEST.ICONS.PATIENT.ALT}
                      aria-hidden="true"
                    />
                    <span>{details.condicion_paciente}</span>
                  </div>
                  <div
                    className={styles.ourTestResultsListItemDetailsBodyListItem}
                  >
                    <img
                      src={APP_CONSTANTS.OUR_TEST.ICONS.TIME.SRC}
                      alt={APP_CONSTANTS.OUR_TEST.ICONS.TIME.ALT}
                      aria-hidden="true"
                    />
                    <span>{details.tiempo_entrega}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}

export async function getServerSideProps() {
  const apiPath = process?.env?.API_PATH;
  const res = await fetch(`${apiPath}${APP_CONSTANTS.API.DATA_INFORMATION}`);
  const data = await res.json();

  return {
    props: {
      ...data,
    },
  };
}

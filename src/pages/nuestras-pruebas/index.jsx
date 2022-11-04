import { useState } from "react";

import MainLayout from "@components/layouts/MainLayout";

import styles from "@styles/pages/Our-test.module.scss";


export default function Procedures(props) {
  const [results, setResults] = useState([]);
  const [details, setDetails] = useState({});
  const [showDetails, setShowDetails] = useState(false);
  const api = process.env.API_KEY;

  function changeInputSearch(event) {
    if (event.target.value.length >= 3) {
        fetch(`${api}api/labs?search=${event.target.value}`)
          .then((res) => res.json())
          .then((data) => {
            setResults(data);
          });
    } else {
      setResults([]);
    }

    setShowDetails(false);
  }

  function openDetails(index) {
    if (results[index]) {
      setDetails(results[index]);
      setShowDetails(true);
    }
  }

  return (
    <MainLayout
      navLinks={props.navLinks}
      mobileNavLinks={props.mobileNavLinks}
      isFixedHeaderAndFooter
    >
      <div className={styles.ourTestWrapper}>
        <h2 className={styles.ourTestMainTitle}>Nuestras pruebas</h2>
        <div className={styles.ourTestSearchWrapper}>
          <form>
            <input
              className={styles.ourTestSearchInput}
              id="search"
              type="text"
              autoComplete="off"
              onChange={(event) => changeInputSearch(event)}
              placeholder="Busca por nombre de prueba o código"
            />
          </form>
          {results && results.length > 0 && !showDetails && (
            <div className={styles.ourTestResults}>
              <div className={styles.ourTestResultsTotal}>
                Resultados: {results.length}
              </div>
              <div className={styles.ourTestResultsList}>
                {results.map((resultItem, index) => (
                  <div
                    className={styles.ourTestResultsListItem}
                    key={index}
                    onClick={(event) => openDetails(index)}
                  >
                    {resultItem.nombre_prueba}
                  </div>
                ))}
              </div>
            </div>
          )}
          {showDetails && (
            <div className={styles.ourTestResultsListItemDetails}>
              <div className={styles.ourTestResultsListItemDetailsHeader}>
                <h3>{details.nombre_prueba}</h3>
                <span>Código: {details.codigo_cups}</span>
              </div>
              <div className={styles.ourTestResultsListItemDetailsBody}>
                <div className={styles.ourTestResultsListItemDetailsBodyList}>
                  <div
                    className={styles.ourTestResultsListItemDetailsBodyListItem}
                  >
                    <img src="/img/patient.svg" alt="" />
                    <span>
                      {details.condicion_paciente}
                    </span>
                  </div>
                  <div
                    className={styles.ourTestResultsListItemDetailsBodyListItem}
                  >
                    <img src="/img/time.svg" alt="" />
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
  const api = process?.env?.API_PATH;
  const res = await fetch(`${api}api/home`);
  const data = await res.json();

  return {
    props: {
      ...data,
    },
  };
}

import { useState } from "react";

import MainLayout from "@components/layouts/MainLayout";

import styles from "@styles/pages/Our-test.module.scss";

export default function Procedures(props) {
  const [results, setResults] = useState([]);
  const [details, setDetails] = useState({});
  const [showDetails, setShowDetails] = useState(false);

  function changeBuyPrice(event) {
    if (event.target.value.length >= 3) {
      setResults([
        {
          label: "Prueba de laboratorio # 1",
          code: "999999",
          suggestions:
            "Se sugiere tomar muestra en ayuno, mas no es excluyente.",
          time: "24 horas a partir del día de procesamiento.",
        },
        {
          label: "Prueba de laboratorio # 2",
          code: "999999",
          suggestions:
            "Se sugiere tomar muestra en ayuno, mas no es excluyente.",
          time: "24 horas a partir del día de procesamiento.",
        },
        {
          label: "Prueba de laboratorio # 3",
          code: "999999",
          suggestions:
            "Se sugiere tomar muestra en ayuno, mas no es excluyente.",
          time: "24 horas a partir del día de procesamiento.",
        },
        {
          label: "Prueba de laboratorio # 4",
          code: "999999",
          suggestions:
            "Se sugiere tomar muestra en ayuno, mas no es excluyente.",
          time: "24 horas a partir del día de procesamiento.",
        },
        {
          label: "Prueba de laboratorio # 5",
          code: "999999",
          suggestions:
            "Se sugiere tomar muestra en ayuno, mas no es excluyente.",
          time: "24 horas a partir del día de procesamiento.",
        },
        {
          label: "Prueba de laboratorio # 6",
          code: "999999",
          suggestions:
            "Se sugiere tomar muestra en ayuno, mas no es excluyente.",
          time: "24 horas a partir del día de procesamiento.",
        },
        {
          label: "Prueba de laboratorio # 7",
          code: "999999",
          suggestions:
            "Se sugiere tomar muestra en ayuno, mas no es excluyente.",
          time: "24 horas a partir del día de procesamiento.",
        },
      ]);
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
              onChange={(event) => changeBuyPrice(event)}
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
                    {resultItem.label}
                  </div>
                ))}
              </div>
            </div>
          )}
          {showDetails && (
            <div className={styles.ourTestResultsListItemDetails}>
              <div className={styles.ourTestResultsListItemDetailsHeader}>
                <h3>{details.label}</h3>
                <span>Código: {details.code}</span>
              </div>
              <div className={styles.ourTestResultsListItemDetailsBody}>
                <div className={styles.ourTestResultsListItemDetailsBodyList}>
                  <div
                    className={styles.ourTestResultsListItemDetailsBodyListItem}
                  >
                    <img src="/img/patient.svg" alt="" />
                    <span>
                      {details.suggestions}
                    </span>
                  </div>
                  <div
                    className={styles.ourTestResultsListItemDetailsBodyListItem}
                  >
                    <img src="/img/time.svg" alt="" />
                    <span>{details.time}</span>
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

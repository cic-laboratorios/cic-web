import PdfIconComponent from "@components/icons/pdf/Pdf";

import styles from "@styles/pages/Estados-financieros.module.scss";

export default function PoliticaPrivacidad() {
  const pdfsInformativos = [
    {
      name: "POLITICA TRATAMIENTO DE DATOS",
      url: "./pdf/POLITICA_DATOS_2023.pdf",
    }
  ];

  return (
    <section className={styles.content}>
      <h1>Política de tratamiento de datos</h1>
      <div className={styles.pdfContainer}>
        {pdfsInformativos.map((pdf) => (
          <a key={pdf.url} href={pdf.url} target="_blank" rel="noreferrer">
            <div className={styles.card}>
              <PdfIconComponent />
              <p>{pdf.name}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

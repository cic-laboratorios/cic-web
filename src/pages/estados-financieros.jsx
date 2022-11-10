import PdfIconComponent from "@components/icons/pdf/Pdf";

import styles from "@styles/pages/Estados-financieros.module.scss";

export default function EstadosFinancieros() {
  const pdfs = [
    {
      name: "ERI CIC 2021.PDF",
      url: "./pdf/ERICIC2021.pdf",
    },
    {
      name: "ESF CIC 2021.PDF",
      url: "./pdf/ESFCIC2021.pdf",
    },
    {
      name: "NOTAS CIC 2021",
      url: "./pdf/NOTASCIC2021.pdf",
    },
  ];

  return (
    <section className={styles.content}>
      <h1>Estados financieros</h1>

      <div className={styles.pdfContainer}>
        {pdfs.map((pdf) => (
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

import WhatsAppSvg from "./WhatsAppSvg";
import styles from "@styles/components/whatsapp/Whatsapp.module.scss";

const WhatsApp = ({ url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={styles.whatsappContainer}
    >
      <WhatsAppSvg />
    </a>
  );
};

export default WhatsApp;

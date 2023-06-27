import styles from "@styles/components/customer-rights/CustomerRights.module.scss";

const CustomerRights = ({customerRights}) => (
  <section className={styles.customerRightsWrapper}>
    {
    Object.keys(customerRights).map((type) => {
      const data = customerRights[type].data.map(
        (text) => (<li key={text}>{text}</li>)
      );

      return (
      <article key={type}>
        <h3 className={styles.customerRightsHeader}>
          {customerRights[type].title}</h3>
        <ul className={styles.customerRightsList}>
          {data}
        </ul>
      </article>
      );
    })
    }
  </section>
)

export default CustomerRights;

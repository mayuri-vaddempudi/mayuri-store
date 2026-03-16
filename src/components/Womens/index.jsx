import styles from "./womens.module.css";
import "@fontsource/dancing-script";

const Womens = () => {
  return (
    <div className={styles.womens}>
      <h3 className={styles.dancingScript}>Women's fashion</h3>
      <p className={styles.womenDiscription}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <li className={styles.womenShoping}>
        <a>ShopNow</a>
      </li>
    </div>
  );
};
export default Womens;

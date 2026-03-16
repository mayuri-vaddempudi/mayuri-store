import styles from "./cosmetics.module.css";
import cosmetics from "../../assets/images/cosmetics.jpeg";

const Cosmetics = () => {
  return (
    <div className={styles.cosmetics}>
      <h3>Cosmetics</h3>
      <li>
        <a>ShopNow</a>
      </li>
    </div>
  );
};
export default Cosmetics;

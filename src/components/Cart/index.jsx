import styles from "./cart.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  return (
    <button className={styles.cartButton}>
      <FontAwesomeIcon icon={faCartArrowDown} />
    </button>
  );
};

export default Cart;

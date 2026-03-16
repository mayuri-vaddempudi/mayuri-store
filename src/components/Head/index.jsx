import styles from "./head.module.css";
import Logo from "../Logo";
import Navigation from "../Navigation";
import Cart from "../Cart";

const Head = () => {
  return (
    <div className={styles.head}>
      <Logo />
      <Navigation />
      <Cart />
    </div>
  );
};

export default Head;

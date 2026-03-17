import styles from "./head.module.css";
import Logo from "../Logo";
import Navigation from "../Navigation";

const Head = () => {
  return (
    <div className={styles.head}>
      <Logo />
      <Navigation />
    </div>
  );
};

export default Head;

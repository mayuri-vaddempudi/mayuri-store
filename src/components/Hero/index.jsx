import styles from "./hero.module.css";
import Womens from "../Womens";
import Mens from "../Mens";
import Kids from "../Kids";
import Cosmetics from "../Cosmetics";
import Accessories from "../Accessories";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.womens}>
        <Womens />
      </div>

      <div className={styles.mens}>
        <Mens />
      </div>

      <div className={styles.kids}>
        <Kids />
      </div>

      <div className={styles.cosmetics}>
        <Cosmetics />
      </div>

      <div className={styles.accessories}>
        <Accessories />
      </div>
    </div>
  );
};

export default Hero;

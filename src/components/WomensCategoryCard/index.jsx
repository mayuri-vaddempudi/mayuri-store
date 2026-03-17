import styles from "./womenscategoryCard.module.css";
import "@fontsource/dancing-script";

const WomensCategoryCard = ({ title, description }) => {
  return (
    <div className={styles.womens}>
      <h3 className={styles.dancingScript}>{title}</h3>
      <p className={styles.womenDescription}>{description}</p>
      <div className={styles.womenShoping}>
        <a>ShopNow</a>
      </div>
    </div>
  );
};
export default WomensCategoryCard;

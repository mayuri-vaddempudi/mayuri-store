import styles from "./categoryCard.module.css";

const CategoryCard = ({ title, image }) => {
  return (
    <div
      className={styles.categoryCard}
      style={{ backgroundImage: `url(${image})` }}
    >
      <h3>{title}</h3>
      <div className={styles.shopButton}>
        <a href="#">Shop Now</a>
      </div>
    </div>
  );
};

export default CategoryCard;

import styles from "./hero.module.css";
import WomensCategoryCard from "../WomensCategoryCard";
import CategoryCard from "../CategoryCard";

import womens from "../../assets/images/women.jpeg";
import men from "../../assets/images/men.jpeg";
import kids from "../../assets/images/kids.jpeg";
import cosmetics from "../../assets/images/cosmetics.jpeg";
import accessories from "../../assets/images/accessories.jpeg";

const Hero = () => {
  const otherCategories = [
    { title: "Men's fashion", image: men },
    { title: "Kids", image: kids },
    { title: "Cosmetics", image: cosmetics },
    { title: "Accessories", image: accessories },
  ];

  return (
    <div className={styles.hero}>
      <div className={styles.womensContainer}>
        <WomensCategoryCard
          title="Women's fashion"
          description="Lorem Ipsum is simply dummy text of the printing industry"
          image={womens}
        />
      </div>

      <div className={styles.otherCategories}>
        {otherCategories.map((category, index) => (
          <CategoryCard
            key={index}
            title={category.title}
            image={category.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;

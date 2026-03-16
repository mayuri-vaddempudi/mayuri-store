import styles from "./navigation.module.css";

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <ul>
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#">WOMENS</a>
        </li>
        <li>
          <a href="#">MEN´S</a>
        </li>
        <li>
          <a href="#">SHOP</a>
        </li>
        <li>
          <a href="#">PAGES</a>
        </li>
        <li>
          <a href="#">BLOG</a>
        </li>
        <li>
          <a href="#">CONTACT</a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;

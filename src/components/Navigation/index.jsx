import { useState } from "react";
import styles from "./navigation.module.css";
import Cart from "../Cart";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navigation}>
      <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      <ul className={`${styles.menu} ${isOpen ? styles.active : ""}`}>
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#">WOMENS</a>
        </li>
        <li>
          <a href="#">MENS</a>
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
        <div className={styles.cartContainer}>
          <Cart />
        </div>
      </ul>
    </nav>
  );
};

export default Navigation;

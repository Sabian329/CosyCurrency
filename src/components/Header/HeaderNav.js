import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./HeaderNav.module.scss";

const HeaderNav = () => (
  <nav className={styles.wrapper}>
    <li className={styles.navItem}>
      <NavLink
        exact
        activeClassName={styles.navItemActive}
        className={styles.navItemLink}
        to="/"
      >
        Main
      </NavLink>
    </li>
    <li className={styles.navItem}>
      <NavLink
        activeClassName={styles.navItemActive}
        className={styles.navItemLink}
        to="/country"
      >
        Country
      </NavLink>
    </li>
    <li className={styles.navItem}>
      <NavLink
        activeClassName={styles.navItemActive}
        className={styles.navItemLink}
        to="/calculate"
      >
        Calculate
      </NavLink>
    </li>
  </nav>
);
export default HeaderNav;

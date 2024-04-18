import React from "react";
import styles from "./navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <NavLink to={"/"}>Contacts</NavLink>
      <NavLink to={"/add"}>Add contact</NavLink>
    </div>
  );
};

export default Navbar;

import React from "react";
import styles from "./input.module.css";

const Input = ({ label, placeholder, value, onChange, type = "text" }) => {
  return (
    <label>
      <p>{label}:</p>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={styles.input}
        type={type}
      />{" "}
    </label>
  );
};

export default Input;

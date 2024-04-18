import React from "react";
import styles from "./card.module.css";
import { Link } from "react-router-dom";

const Card = ({ item, deleteContact }) => {
  return (
    <div>
      <img width={300} src={item.image} alt="" />
      <h2>Name: {item.name}</h2>
      <p>Email: {item.email}</p>
      <p>
        Phone: <b>{item.phone}</b>
      </p>
      <div>
        <Link to={`/edit/${item.id}`}>
          <button>Edit</button>
        </Link>
        <button onClick={() => deleteContact(item.id)}>Delete</button>
      </div>
    </div>
  );
};

export default Card;

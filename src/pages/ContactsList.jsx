import React, { useEffect } from "react";
import Card from "../components/card/Card";

const ContactsList = ({ getContacts, contacts }) => {
  useEffect(() => {
    getContacts();
  }, []);

  console.log(contacts, "in contacts list");
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginTop: "50px",
      }}
    >
      {contacts.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ContactsList;

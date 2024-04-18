import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import MainRoutes from "./routes/MainRoutes";
import axios from "axios";

const App = () => {
  const API = "http://localhost:8001/contacts";

  const [contacts, setContacts] = useState([]);
  const [oneContact, setOneContact] = useState(null);

  const getContacts = async () => {
    const result = await axios.get(API);
    setContacts(result.data);
  };

  const createContact = async (newContact) => {
    await axios.post(API, newContact);
    getContacts();
  };

  const getOneContact = async (id) => {
    const result = await axios.get(`${API}/${id}`);
    setOneContact(result.data);
  };

  const editContact = async (id, newContact) => {
    await axios.put(`${API}/${id}`, newContact);
    getContacts();
  };

  const deleteContact = async (id) => {
    await axios.delete(`${API}/${id}`);
    getContacts();
  };

  return (
    <div>
      <Navbar />
      <MainRoutes
        editContact={editContact}
        contacts={contacts}
        getContacts={getContacts}
        createContact={createContact}
        oneContact={oneContact}
        getOneContact={getOneContact}
        deleteContact={deleteContact}
      />
    </div>
  );
};

export default App;

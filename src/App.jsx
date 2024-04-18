import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import MainRoutes from "./routes/MainRoutes";
import axios from "axios";

const App = () => {
  const API = "http://localhost:8001/contacts";

  const [contacts, setContacts] = useState([]);
  const [oneContact, setOneContact] = useState(null);

  const createContact = (newContact) => {
    axios.post(API, newContact);
  };

  const getContacts = async () => {
    const result = await axios.get(API);
    setContacts(result.data);
  };

  const getOneContact = async (id) => {
    const result = await axios.get(`${API}/${id}`);
    setOneContact(result.data);
  };

  return (
    <div>
      <Navbar />
      <MainRoutes
        contacts={contacts}
        getContacts={getContacts}
        createContact={createContact}
        oneContact={oneContact}
        getOneContact={getOneContact}
      />
    </div>
  );
};

export default App;

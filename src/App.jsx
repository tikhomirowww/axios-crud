import React from "react";
import Navbar from "./components/navbar/Navbar";
import MainRoutes from "./routes/MainRoutes";
import axios from "axios";

const App = () => {
  const API = "http://localhost:8001/contacts";
  const createContact = (newContact) => {
    axios.post(API, newContact);
  };
  return (
    <div>
      <Navbar />
      <MainRoutes createContact={createContact} />
    </div>
  );
};

export default App;

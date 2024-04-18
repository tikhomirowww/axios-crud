import React from "react";
import { Route, Routes } from "react-router-dom";
import ContactsList from "../pages/ContactsList";
import AddContact from "../pages/AddContact";
import EditPage from "../pages/EditPage";

const MainRoutes = ({
  createContact,
  getContacts,
  contacts,
  oneContact,
  getOneContact,
  editContact,
  deleteContact,
}) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ContactsList
            contacts={contacts}
            getContacts={getContacts}
            deleteContact={deleteContact}
          />
        }
      />
      <Route
        path="/add"
        element={<AddContact createContact={createContact} />}
      />
      <Route
        path="/edit/:id"
        element={
          <EditPage
            editContact={editContact}
            oneContact={oneContact}
            getOneContact={getOneContact}
          />
        }
      />
    </Routes>
  );
};

export default MainRoutes;

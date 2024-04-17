import React from "react";
import { Route, Routes } from "react-router-dom";
import ContactsList from "../pages/ContactsList";
import AddContact from "../pages/AddContact";

const MainRoutes = ({ createContact }) => {
  return (
    <Routes>
      <Route path="/" element={<ContactsList />} />
      <Route
        path="/add"
        element={<AddContact createContact={createContact} />}
      />
    </Routes>
  );
};

export default MainRoutes;

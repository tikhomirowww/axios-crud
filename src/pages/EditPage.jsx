import React, { useEffect, useState } from "react";
import Input from "../ui/input/Input";
import { useNavigate, useParams } from "react-router-dom";

const EditPage = ({ getOneContact, oneContact, editContact }) => {
  const { id } = useParams();
  useEffect(() => {
    getOneContact(id);
  }, []);

  console.log(oneContact);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (oneContact) {
      setName(oneContact.name);
      setEmail(oneContact.email);
      setPhone(oneContact.phone);
      setImage(oneContact.image);
    }
  }, [oneContact]);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim() || !image.trim()) {
      alert("Some inputs are empty!");
      return;
    }
    const contactObj = {
      name,
      phone,
      email,
      image,
    };

    editContact(id, contactObj);

    navigate("/");
    setName("");
    setEmail("");
    setPhone("");
    setImage("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit contact</h2>
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        label="Name"
        placeholder="Name..."
      />
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        label="Email"
        type="email"
        placeholder="Email..."
      />
      <Input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        label="Phone"
        type="phone"
        placeholder="phone number..."
      />
      <Input
        value={image}
        onChange={(e) => setImage(e.target.value)}
        label="Image"
        type="url"
        placeholder="Image url..."
      />
      <div className="form-btn">
        <button>Save changes</button>
      </div>
    </form>
  );
};

export default EditPage;

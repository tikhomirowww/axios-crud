import React, { useState } from "react";
import Input from "../ui/input/Input";
import { useNavigate } from "react-router-dom";

const AddContact = ({ createContact }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");

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
    createContact(contactObj);
    navigate("/");
    setName("");
    setEmail("");
    setPhone("");
    setImage("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add contact</h2>
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
        <button>Add contact</button>
      </div>
    </form>
  );
};

export default AddContact;
